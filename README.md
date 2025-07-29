# Sabermine Tech Test

For my reasoning on the tech stack and component patterns I chose, please see the [reasoning](./REASONING.md) file.

## Usage

This project uses version 10 of pnpm as a package manager. If you don't already have it installed please follow their
installation [docs](https://pnpm.io/installation).

```bash
pnpm i
```

### Dev

```bash
turbo dev
```

### Build

```bash
turbo build
```

### Run

```bash
pnpm run start
```

### Lint

```bash
turbo lint
```

## The monorepo

This project is a monorepo using `turbo` to manage the build process.

The `apps/web` directory is the main app and the `packages/ui` directory is the shared ui library.

The `packages/types` directory is the shared types library.

The `packages/eslint-config` directory is the shared eslint config.

The `packages/typescript-config` directory is the shared typescript config.

## Adding components

To add more shadcn components to app, run the following from anywhere in the project:

```bash
pnpm dlx shadcn@latest add button
```

This will place the new ui component in the `packages/ui/src/components` directory.

## Tailwind

This repo uses `tailwindcss` version 4 and `globals.css` files are set up in both the `apps/web` and `packages/ui` directories.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button";
```
