# Frontend Vibe Code Template

A modern React TypeScript starter template built for developer productivity. Features automated code quality checks, comprehensive testing setup, and seamless AI-assisted development integration.

## ✨ Highlights

- **React 19 + TypeScript** - Latest React with full TypeScript support
- **Lightning-fast Vite** - Instant HMR and optimized production builds
- **Zero-config testing** - Vitest, Storybook, and Chromatic pre-configured
- **AI-ready development** - Claude Code MCP server integration
- **Automated quality gates** - Pre-commit hooks and CI for formatting and linting

## 🚀 Quick Start

### Prerequisites

- Node.js 22+ and npm
- Git for version control

### Installation

1. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your API keys:
   ```env
   FIGMA_API_KEY=your_figma_api_key_here
   ```

2. **Configure visual testing (optional)**

   For Chromatic integration:
   - Replace `CHROMATIC_PROJECT_ID` in `chromatic.config.json`
   - Replace `CHROMATIC_PROJECT_TOKEN` in `package.json`
   - Set `CHROMATIC_PROJECT_TOKEN` in GitHub secrets

3. **Start developing**
   ```bash
   npm start
   ```

## 📚 Available Scripts

### Development
| Command | Description |
|---------|-------------|
| `npm start` | Start development server with hot reload |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |

### Code Quality
| Command | Description |
|---------|-------------|
| `npm run lint` | Check code for issues |
| `npm run format` | Auto-format all code |
| `npm run check` | Run all code quality checks |
| `npm run check:fix` | Fix all auto-fixable issues |

### Testing
| Command | Description |
|---------|-------------|
| `npm test` | Run unit tests |
| `npm run test:watch` | Run tests and watch for changes |
| `npm run test:coverage` | Generate test coverage report |
| `npm run storybook:run` | Launch Storybook development |
| `npm run storybook:build` | Build static Storybook |
| `npm run chromatic` | Run visual regression tests |

## 🏗️ Project Architecture

```
frontend-vibe-code-template/
├── src/
│   ├── features/           # Feature modules (screens, workflows)
│   │   └── intro/         # Example feature with component + stories
│   ├── shared/            # Shared code across features
│   │   ├── components/    # Reusable UI components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── services/      # API clients and external services
│   │   ├── stores/        # Global state management
│   │   ├── types/         # TypeScript type definitions
│   │   └── utils/         # Helper functions
│   ├── app.tsx           # Root application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── .storybook/          # Storybook configuration
└── [config files]       # Various configuration files
```

### Architecture Principles

- **Feature-first organization** - Group by feature, not file type
- **Shared module pattern** - Common code in centralized location
- **Path aliasing** - Use `@/` prefix for clean imports
- **No barrel exports** - Direct imports for better tree-shaking

## 🛠️ Development Workflow

### 1. Creating New Features

Features live in `src/features/`. Each feature should be self-contained:

```typescript
// src/features/my-feature/my-feature.tsx
export function MyFeature() {
  return <div>My new feature</div>;
}

// src/features/my-feature/my-feature.stories.tsx
export default {
  title: 'Features/MyFeature',
  component: MyFeature,
};
```

### 2. Using Shared Components

Import shared utilities using the `@/` alias:

```typescript
import { Button } from '@/shared/components/button';
import { useDebounce } from '@/shared/hooks/use-debounce';
import { apiClient } from '@/shared/services/api';
```

### 3. Tests and component Documentation

Document components with Storybook, write test using [storybook interaction tests](https://storybook.js.org/docs/writing-tests/interaction-testing) or [vitest](https://vitest.dev/guide/#writing-tests)

```typescript
// my-component.stories.tsx
export default {
  title: 'Shared/MyComponent',
  component: MyComponent,
  parameters: {
    docs: {
      description: {
        component: 'A reusable component for...'
      }
    }
  }
};

export const Default = {
  args: {
    label: 'Click me'
  }
};
```

## 🤖 AI-Assisted Development

### Claude Code Integration

This template includes MCP (Model Context Protocol) server configurations:

- **Playwright** - Browser automation and E2E testing
- **Figma** - Design token extraction and component sync
- **Context7** - Library documentation lookup

To use with Claude Code:

```bash
source .env && claude
```

The `.mcp.json` configuration automatically loads the required servers.

### Development Best Practices

When using AI assistance:

1. **Reference CLAUDE.md** - Contains project-specific guidelines
2. **Check project-structure.md** - Auto-updated file structure
3. **Run quality checks** - Always lint and format after AI-generated code
4. **Test thoroughly** - Verify AI suggestions with unit tests

## 📋 Code Standards

### Enforced Rules

This template uses **Ultracite** rules via Biome for:

- ✅ Accessibility compliance (ARIA, semantic HTML)
- ✅ React best practices (hooks, props, components)
- ✅ TypeScript strictness (no any, proper types)
- ✅ Code consistency (formatting, naming)

### Pre-commit Automation

Git hooks automatically:
1. Format staged files
2. Update project structure documentation
3. Run linting checks
4. Stage documentation changes

## 🔧 Configuration

### Essential Files

| File | Purpose |
|------|---------|
| `biome.json` | Linting and formatting rules |
| `vite.config.ts` | Build and dev server settings |
| `vitest.config.ts` | Test runner configuration |
| `tsconfig.json` | TypeScript compiler options |
| `.rules` | Custom project guidelines |

### Path Aliases

The `@/` alias maps to the `src/` directory:

```json
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

### Environment Variables

Create `.env` from `.env.example`:

```env
# API Keys
FIGMA_API_KEY=your_key_here

# Feature Flags (optional)
VITE_ENABLE_ANALYTICS=false
VITE_API_URL=http://localhost:3000
```

## 🚦 Troubleshooting

### Common Issues

**Port already in use**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

**Module not found errors**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Linting errors after changes**
```bash
# Auto-fix what's possible
npm run check:fix
```

## 📄 License
[**MIT**](LICENSE)

---

Built with ❤️ for productive development
