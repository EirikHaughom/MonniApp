# Repository Guidelines

## Project Structure & Module Organization
- Next.js routes live in `src/app`; reusable UI sits in `src/components`; feature bundles (logic, hooks, models, types) belong to `src/features`.
- Integrations land in `src/libs`, helpers in `src/utils`, translations in `src/locales`, and global styles in `src/styles`.
- Database schemas and snapshots reside in `migrations` with configuration in `drizzle.config.ts`; public assets stay in `public/assets`.
- Tests colocate as `*.test.ts(x)` next to source, while broader suites live in `tests/integration` and `tests/e2e`.

## Build, Test, and Development Commands
- `npm run dev` launches Next.js along with Spotlight debugging.
- `npm run build` and `npm run start` create and serve the production bundle.
- `npm run check-types` runs TypeScript, `npm run lint`/`npm run lint:fix` enforce ESLint + Prettier.
- `npm run test` executes Vitest suites (use `--watch` for loops); `npm run test:e2e` runs Playwright after `npx playwright install`.
- Database flow: `npm run db:generate` syncs schema, `npm run db:migrate` applies migrations, `npm run db:studio` opens Drizzle Studio.
- `npm run storybook` previews component stories.

## Coding Style & Naming Conventions
- Prettier defaults (two-space indent, single quotes, trailing commas) are enforced via ESLint; format before pushes with `npm run lint:fix`.
- Components and hooks use PascalCase; utilities stay camelCase; route folders in `src/app` follow kebab-case.
- Prefer `@/` absolute imports and keep module boundaries clear between app, features, and libs.
- Model external data with Zod schemas and expose shared types through dedicated `*.types.ts` modules.

## Testing Guidelines
- Unit and component tests rely on Vitest + React Testing Library; mirror the source structure and suffix files with `.test.tsx`.
- `tests/integration` covers API handlers and server utilities using realistic fixtures; `tests/e2e` holds authenticated Playwright journeys.
- CI publishes results to Codecov—extend existing suites to keep coverage trends positive and detect regressions early.

## Commit & Pull Request Guidelines
- Follow Conventional Commits (`feat`, `fix`, `docs`, etc.); use `npm run commit` (Commitizen) to scaffold templates.
- Keep each commit focused and let semantic-release manage `CHANGELOG.md`.
- PRs should state intent, list local checks (`npm run lint`, `npm run test`, `npm run test:e2e` when relevant), and link the tracking issue.
- Include before/after screenshots for UI work and mention any migration files in database-related changes.
- Request review only after lint, type-check, and test commands succeed locally.

## MCP Tools
- `playwright` automates browser interactions and testing.
- `shadcn` fetches ShadCN UI component data and examples.
- `github` interfaces with GitHub for code and repo operations.
- `context7` pulls up-to-date, version-specific documentation and code examples straight from the source. Use this if none of the other more specific tools seem right.
- `sequential-thinking` improves multi-step reasoning and planning.
- `ms-docs` queries Microsoft Learn documentation.
