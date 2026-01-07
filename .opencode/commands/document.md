---
description: Generate markdown documentation for a module or feature
argument-hint: <module-path-or-feature>
---

You are creating proper markdown documentation for a module or feature in the library.

## Your Task

1. **Identify the scope** - What does `$ARGUMENTS` refer to? (file, directory, or feature name)
2. **Read the source code** - Understand the public API, types, and behavior
3. **Read existing docs** - Check if there's documentation to update
4. **Write comprehensive documentation** - Create or update markdown docs

## Documentation Structure

Create documentation in the appropriate location:
- **API docs**: `docs/api/<module>.md`
- **Guides**: `docs/guides/<topic>.md`
- **Examples**: Include in the relevant doc or `docs/examples/`

### API Documentation Format

```markdown
# <Module Name>

Brief description of what this module does and when to use it.

## Installation

If there are specific imports needed.

## Quick Start

```typescript
// Minimal working example
```

## API Reference

### `ClassName`

Description of the class.

#### Constructor

```typescript
new ClassName(options: Options)
```

| Parameter | Type | Description |
|-----------|------|-------------|
| options | `Options` | Configuration options |

#### Methods

##### `methodName(param: Type): ReturnType`

Description of what the method does.

**Parameters:**
- `param` - Description

**Returns:** Description of return value

**Example:**
```typescript
// Usage example
```

### Types

#### `TypeName`

```typescript
interface TypeName {
  property: string;
}
```

## Examples

### Common Use Case

```typescript
// Full working example
```

### Advanced Usage

```typescript
// More complex example
```

## Error Handling

Document common errors and how to handle them.

## See Also

- Links to related documentation
```

## Guidelines

### Content Quality
- **Be accurate** - Verify behavior by reading the code
- **Be complete** - Document all public API surface
- **Be practical** - Include real, working examples
- **Be concise** - Don't over-explain obvious things

### Code Examples
- All examples must be valid TypeScript
- Show imports when not obvious
- Include expected output in comments where helpful
- Progress from simple to complex

### Formatting
- Use proper markdown headers (h1 for title, h2 for sections)
- Use code fences with `typescript` language tag
- Use tables for parameter/option documentation
- Use admonitions sparingly (> **Note:** ...)

### Maintenance
- Include types inline so docs don't get stale
- Reference source file locations for complex behavior
- Date or version-stamp if behavior may change

## Process

1. **Explore the code** - Read source files to understand the API
2. **Identify the audience** - Who will read this? What do they need?
3. **Draft the structure** - Outline sections before writing
4. **Write content** - Fill in each section
5. **Add examples** - Create working code samples
6. **Review** - Read through for clarity and accuracy

## Begin

Analyze `$ARGUMENTS`, read the relevant source code, and create comprehensive markdown documentation.
