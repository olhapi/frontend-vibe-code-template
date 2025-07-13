# CLAUDE.md

Quick reference for Claude Code when working with this repository.

## Project Overview

Modern React TypeScript template with automated quality checks and AI-ready development tools.

**Stack:** React 19, TypeScript, Vite, Biome, Vitest, Storybook

## Essential Commands

```bash
npm start               # Start dev server
npm run build           # Production build
npm run lint            # Check code issues
npm run format          # Auto-format code
npm test                # Run tests
npm run storybook:text  # Component tests
```

## Project Structure

```
src/
├── features/      # Feature modules (self-contained)
├── shared/        # Reusable code
│   ├── components/
│   ├── hooks/
│   ├── services/
│   ├── stores/
│   ├── types/
│   └── utils/
├── app.tsx
└── main.tsx
```

**Key:** Always check `project-structure.md` for current file layout before creating new files.

## Development Rules

### Must Do
- ✅ Use TypeScript with explicit types
- ✅ Follow `.rules` file for all code
- ✅ Import with `@/` alias: `@/shared/components/button`
- ✅ Direct exports (no barrel/index files)
- ✅ Semantic HTML (`<button>`, not `<div onClick>`)
- ✅ Run `npm run lint` after changes and fix all issues, run command again after fixing them to verify that they are fixed

### Must NOT Do
- ❌ Create example/demo files
- ❌ Use `any` type
- ❌ Use console.log (use console.error/warn if needed)
- ❌ Skip accessibility attributes
- ❌ Create index.ts barrel exports
- ❌ Use non-semantic HTML for interactive elements

## Component Guidelines

### Creating Components

```typescript
// ✅ GOOD: Direct export, typed props, semantic HTML
export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={`btn btn-${props.variant}`}
      type="button"
    >
      {props.label}
    </button>
  );
}
```

```typescript
// ❌ BAD: No types, non-semantic HTML
export default function Button(props) {
  return <div onClick={props.onClick}>{props.label}</div>
}
```

### File Organization

```typescript
// feature-name.tsx - Main component
export function FeatureName() { ... }

// feature-name.stories.tsx - Storybook component docs
export default { title: 'Features/FeatureName' };

// feature-name.test.tsx - Unit tests
test('renders correctly', () => { ... });
```

## Code Quality Workflow

1. **Write code** following TypeScript and accessibility rules
2. **Format** with `npm run format`
3. **Lint** with `npm run lint` and fix any errors
4. **Test** with `npm test`
5. **Build** with `npm run build` to verify

## Using Libraries

Before adding dependencies:
1. Check if functionality exists in `shared/`
2. Use Context7 MCP for library docs: `get-library-docs`
3. Prefer well-maintained packages with TypeScript support

## Design Principles

**KISS** - Simple, readable solutions only
**YAGNI** - Build what's needed now, not "might need"
**DRY** - Reuse shared components, don't duplicate

## Quick Checks

Before considering tesk completed:

- [ ] TypeScript compiles without errors
- [ ] Linting passes (`npm run lint`)
- [ ] Formatting applied (`npm run format`)
- [ ] Accessibility rules followed
- [ ] Semantic HTML used
- [ ] Direct imports (no barrel exports)
- [ ] Components have proper types

## Error Fixes

**Linting errors:**
```bash
npm run check:fix  # Auto-fix what's possible
npm run lint       # Check remaining issues
```

**Type errors:**
- Define explicit types for all props and returns
- Avoid `any` - use `unknown` if type is truly unknown
- Check `shared/types/` for existing type definitions

**Import errors:**
- Use `@/` prefix for src imports
- Check `project-structure.md` for correct paths

## MCP Integration

Available MCP servers:
- **playwright** - Browser automation
- **figma** - Design tokens
- **context7** - Library documentation
