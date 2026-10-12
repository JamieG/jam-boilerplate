# Jam Boilerplate

A minimal browser game boilerplate using **Phaser 4**, **TypeScript** (strict mode) and **Vite**. It renders "Hello World" centred on a 1280×720 canvas that scales to fit the window while preserving aspect ratio — nothing more.

## Setup

```bash
npm install
```

## Running

```bash
npm run dev
```

Open http://localhost:8080 in your browser.

## Other scripts

| Command | Description |
| --- | --- |
| `npm run build` | Production build, output in `dist/` |
| `npm run typecheck` | TypeScript type checking (no emit) |

## Project structure

```
index.html          Entry page
src/main.ts         Phaser game config and startup
src/scenes/         Game scenes (MainScene.ts renders "Hello World")
```

## Configuration

- **Background colour**: edit `backgroundColor` in [src/main.ts](src/main.ts) and the matching `background-color` in [index.html](index.html) (used for the letterbox area).
- **Game size / aspect ratio**: edit `width` and `height` in the `scale` config in [src/main.ts](src/main.ts). The canvas scales to fit the window (`Scale.FIT`) and stays centred (`Scale.CENTER_BOTH`).
- **Adding scenes**: create a file in `src/scenes/` and register it in the `scene` array in [src/main.ts](src/main.ts).
