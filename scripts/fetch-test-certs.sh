#!/usr/bin/env bash
#
# Fetch real certificates from public HTTPS endpoints for testing.
#
# These certificates are used to test AIA (Authority Information Access)
# and CRL Distribution Point parsing, which requires real-world certificates
# since our self-signed test certs don't have these extensions.
#
# Usage:
#   ./scripts/fetch-test-certs.sh
#
# Output:
#   fixtures/certificates/real/<domain>-<index>.der
#   fixtures/certificates/real/<domain>-chain.pem  (full chain for reference)
#
# Note: The fetched certificates are committed to the repo. Our tests only
# parse the certificate extensions (AIA URLs, CRL distribution points), so
# it doesn't matter if the certificates expire. Re-run this script if you
# need fresher certificates or want to test against different CAs.
#

set -euo pipefail

OUTPUT_DIR="fixtures/certificates/real"
mkdir -p "$OUTPUT_DIR"

# Domains to fetch certificates from (different CAs for coverage)
# - github.com: DigiCert
# - letsencrypt.org: Let's Encrypt / ISRG
# - amazon.com: Amazon Trust Services
# - cloudflare.com: Cloudflare / DigiCert
DOMAINS=(
  "github.com"
  "letsencrypt.org"
  "amazon.com"
  "cloudflare.com"
)

fetch_chain() {
  local domain="$1"
  local prefix="${domain%%.*}"  # e.g., "github" from "github.com"
  
  echo "Fetching certificates from $domain..."
  
  # Get the full chain in PEM format
  local chain_pem
  chain_pem=$(openssl s_client -connect "$domain:443" -showcerts </dev/null 2>/dev/null) || {
    echo "  WARNING: Failed to connect to $domain, skipping"
    return 0
  }
  
  # Save full chain for reference
  echo "$chain_pem" | sed -n '/-----BEGIN CERTIFICATE-----/,/-----END CERTIFICATE-----/p' > "$OUTPUT_DIR/$prefix-chain.pem"
  
  # Extract individual certificates
  local cert_index=0
  local in_cert=false
  local cert_pem=""
  
  while IFS= read -r line; do
    if [[ "$line" == "-----BEGIN CERTIFICATE-----" ]]; then
      in_cert=true
      cert_pem="$line"$'\n'
    elif [[ "$line" == "-----END CERTIFICATE-----" ]]; then
      cert_pem+="$line"$'\n'
      in_cert=false
      
      # Convert to DER and save
      local out_file="$OUTPUT_DIR/$prefix-$cert_index.der"
      echo "$cert_pem" | openssl x509 -outform DER -out "$out_file" 2>/dev/null
      
      # Show cert info
      local subject
      subject=$(echo "$cert_pem" | openssl x509 -noout -subject 2>/dev/null | sed 's/subject=/  /')
      echo "  [$cert_index] $subject -> $out_file"
      
      cert_index=$((cert_index + 1))
      cert_pem=""
    elif [[ "$in_cert" == true ]]; then
      cert_pem+="$line"$'\n'
    fi
  done <<< "$chain_pem"
  
  echo "  Saved $cert_index certificates"
  echo ""
}

# Also fetch an OCSP response for testing extractOcspResponderCerts
fetch_ocsp_response() {
  local domain="$1"
  local prefix="${domain%%.*}"
  
  echo "Fetching OCSP response for $domain..."
  
  local leaf_der="$OUTPUT_DIR/$prefix-0.der"
  local issuer_der="$OUTPUT_DIR/$prefix-1.der"
  local ocsp_out="$OUTPUT_DIR/$prefix-ocsp.der"
  
  if [[ ! -f "$leaf_der" ]] || [[ ! -f "$issuer_der" ]]; then
    echo "  WARNING: Missing cert files, skipping OCSP fetch"
    return 0
  fi
  
  # Convert DER to PEM for openssl ocsp command
  local leaf_pem issuer_pem
  leaf_pem=$(openssl x509 -inform DER -in "$leaf_der" 2>/dev/null)
  issuer_pem=$(openssl x509 -inform DER -in "$issuer_der" 2>/dev/null)
  
  # Get OCSP URL from leaf cert
  local ocsp_url
  ocsp_url=$(echo "$leaf_pem" | openssl x509 -noout -ocsp_uri 2>/dev/null) || {
    echo "  WARNING: No OCSP URL in certificate, skipping"
    return 0
  }
  
  if [[ -z "$ocsp_url" ]]; then
    echo "  WARNING: No OCSP URL in certificate, skipping"
    return 0
  fi
  
  echo "  OCSP URL: $ocsp_url"
  
  # Create temp files for the PEM certs
  local tmp_leaf tmp_issuer
  tmp_leaf=$(mktemp)
  tmp_issuer=$(mktemp)
  echo "$leaf_pem" > "$tmp_leaf"
  echo "$issuer_pem" > "$tmp_issuer"
  
  # Fetch OCSP response
  openssl ocsp \
    -issuer "$tmp_issuer" \
    -cert "$tmp_leaf" \
    -url "$ocsp_url" \
    -respout "$ocsp_out" \
    -no_nonce \
    2>/dev/null && {
    echo "  Saved OCSP response to $ocsp_out"
  } || {
    echo "  WARNING: OCSP request failed"
  }
  
  rm -f "$tmp_leaf" "$tmp_issuer"
  echo ""
}

echo "=========================================="
echo "Fetching test certificates"
echo "=========================================="
echo ""

for domain in "${DOMAINS[@]}"; do
  fetch_chain "$domain"
done

echo "=========================================="
echo "Fetching OCSP responses"
echo "=========================================="
echo ""

# Just fetch OCSP for the first domain (github) - one is enough for testing
fetch_ocsp_response "github.com"

echo "=========================================="
echo "Done!"
echo "=========================================="
echo ""
echo "Certificates saved to: $OUTPUT_DIR/"
echo ""
echo "Files:"
ls -la "$OUTPUT_DIR/"
