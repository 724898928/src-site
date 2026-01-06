# AI Coding Instructions for src-site

A Vue 3 + Vite resource portal that aggregates links to common Chinese websites across entertainment, shopping, learning, and tools categories.

## Architecture Overview

**Tech Stack:**
- Vue 3 (Composition API) with TypeScript support
- Vite (build tool with hot reload)
- Element Plus (UI component library) - Chinese localization enabled
- Pinia (state management) - installed but not yet used
- Vue Router - hardcoded routes in `src/main.js` (no router config file used)

**Key Files:**
- [src/main.js](src/main.js) - App initialization and route definitions (inline, not split into router/index.js)
- [src/App.vue](src/App.vue) - Root layout with TopStatus header, router-view, and Footer
- [src/utils/data.js](src/utils/data.js) - All static content (sites, categories data) - 359 lines, single source of truth
- [src/components/](src/components/) - Reusable UI components consuming data from utils/data.js

## Data Flow Pattern

**Static-first architecture:** All data lives in [src/utils/data.js](src/utils/data.js). Components import and render directly without API calls or state management.

**Common data structures:**
```javascript
// Sites
{ name: '网站名', icon: '/path/icon.png', url: 'https://...' }

// Categories
{ 
  title: '分类标题',
  name: 'categoryKey',  // used as router params
  subCategories: [
    { title: '子分类', items: [ { name: '项目', url: '...' } ] }
  ]
}
```

**Component-Data Mapping:**
- [HotPanel.vue](src/components/HotPanel.vue) → `commonSites` - Grid of popular sites
- [CategoryPanel.vue](src/components/CategoryPanel.vue) → `categories` - Tabbed navigation by category

## Development Workflow

**Commands:**
```bash
npm run dev      # Start Vite dev server with HMR
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
```

**Key Node requirement:** Node 20.19.0+ or 22.12.0+ (configured in package.json engines)

**Auto-import plugins enabled:**
- `unplugin-auto-import` - Element Plus components auto-imported
- `unplugin-vue-components` - Direct component usage without explicit imports
- Results: `<el-card>`, `<el-tabs>`, etc. work without import statements

## Important Patterns & Conventions

### 1. Link Navigation Pattern
Components use `<el-link>` with `target="_blank"` for all external navigation (not router):
```vue
<el-link href="https://example.com" target="_blank">Site Name</el-link>
```
This is intentional - links are external resources, not SPA routes.

### 2. Responsive Grid System
Categories use CSS Grid with hardcoded `grid-template-columns: repeat(6, 1fr)` - adjust in [CategoryPanel.vue](src/components/CategoryPanel.vue#L68) for mobile responsiveness.

### 3. TypeScript Usage
Project uses `lang="ts"` in components but with minimal typing. Leverage existing patterns:
```vue
<script setup lang="ts">
import { ref } from 'vue'
import { categories } from '../utils/data'
const activeTab = ref('entertainment')
```

### 4. Localization
Element Plus configured for Chinese (zh-cn) in [src/main.js](src/main.js#L25). All UI text is already Chinese.

## File Organization Notes

- **No Pinia store** currently used (initialized but empty [src/store/index.js](src/store/index.js))
- **No router config** - routes hardcoded inline in main.js; [src/router/index.js](src/router/index.js) is empty
- **SCSS configured** but only [assets/element/index.scss](src/assets/element/index.scss) exists (global Element overrides)
- **App.vue_bak** - backup of old App.vue layout; ignore for current development

## Common Tasks

**Adding a new site:** Edit `commonSites` or relevant category in [src/utils/data.js](src/utils/data.js), components auto-render.

**Creating new view/route:** 
1. Add component in `src/views/`
2. Add route object to routes array in [src/main.js](src/main.js#L16)
3. Props are passed via route config: `props: (route) => ({ query: route.query.q })`

**Styling:** 
- Component-scoped styles preferred (already used)
- Global CSS in [assets/styles/](src/assets/styles/) if needed
- Element Plus variables available for theming

## External Dependencies of Note

- `xlsx` - Imported in comments (for potential Excel parsing, not actively used)
- `element-plus@2.13.0` - UI components (docs: element-plus.org)
- `vue@3.5.25` - Latest Vue 3 Composition API

## Debugging Tips

- Check `store/index.js` when adding state (currently placeholder)
- Favicon: `public/index.html`
- Assets served from `public/` (PNG icons, SVG files)
- Vue DevTools browser extension recommended for component inspection
