# AGENTS.md

## Technology stack

- **Phaser 4** — game framework (see https://docs.phaser.io)
- **TypeScript** — strict mode, no emit
- **Vite** — dev server and bundler
- **npm** — package manager

## Guidelines for coding agents

- Keep implementations **simple**. This is a game jam boilerplate, not an engine architecture exercise.
- No UI frameworks (React, Vue, etc.), no backend, no external services.
- Do not add dependencies unless strictly necessary.
- Do not add speculative abstractions, placeholder features, or unrequested functionality.
- Put scenes in `src/scenes/` and register them in `src/main.ts`.
- Verify changes with `npm run typecheck` and `npm run build`.
