# fosscu

**This is a monorepo with bun workspaces**

To install dependencies:

```bash
bun install
```

To run:

```bash
bun dev
```

To build:

```bash
bun run build
```
Lint:

```bash
bun lint
```

# A quick guide to monorepo

## Overview

This monorepo is structured to handle multiple applications and shared packages efficiently. It utilizes `bun` for package management, along with workspaces to manage dependencies across different parts of the project.

## Directory Structure

Here's an overview of the directory structure and what each part is responsible for:

- `apps/`: Contains the individual applications in the monorepo.
  - `backend/`: Will be used for backend app.
  - `web/`: A frontend application for landing page for FOSSCU.
- `configs/`: Shared configurations for ESLint, TypeScript, etc. Will import from external public package in future.
- `packages/`: Shared code that can be used across different applications and services.
  - `assets/`: Shared assets, such as images.
  - `database/`: Database related code, including Prisma schemas. We will one of Turso or Postgress, still to decide.
  - `ui/`: Shared UI components.
- `scripts/`: Utility scripts to help with monorepo tasks. Can be added other scripts too.

## Setting Up the Monorepo

To get started with this monorepo, follow these steps:

1. Ensure `bun` is installed on your system.
2. Clone the repository to your local machine.
3. Navigate to the root directory of the monorepo.
4. Run `bun install` to install all dependencies according to the `bun.lockb` file.

### Adding a New Workspace

To add a new workspace:

1. Create a new directory for your workspace under either `apps/` or `packages/`.
2. Initialize a new `package.json` in your workspace directory with `bun init`.
3. Add the workspace to the `workspaces` array in the root `package.json`.

### Adding Dependencies

To add a dependency to a specific workspace:

1. Navigate to the workspace directory.
2. Run `bun add [package-name]`.

Bun will install the dependency and update the workspace's `package.json`.

## Developing Applications

### Backend (`apps/backend/`)

To develop the backend service:

1. Navigate to `apps/backend/`.
2. Run `bun run dev` to start the development server (assuming there's a `dev` script in `package.json`).

### Web (`apps/web/`)

For the frontend application:

1. Navigate to `apps/web/`.
2. Run `bun run dev` to start the Next.js development server.

## Shared Configurations

Use the configurations from `configs/` directory to maintain consistency in coding styles and configurations. For example, link the ESLint or TypeScript configurations in your app or package's `package.json`.

## Shared Packages

Leverage the shared packages under `packages/` directory to maintain a DRY codebase. Import them into your apps as you would with any other npm package.

## Utility Scripts

Utilize the `scripts/` directory for tasks like bootstrapping the project, building, or deploying. For example, running `bun run-workspaces.ts` might be set up to perform a certain task across all workspaces.

## Maintaining the Monorepo

Regularly update dependencies and keep scripts under the `scripts/` directory up-to-date. Use `bun` to upgrade packages across workspaces.

---

This is a basic outline for your monorepo guide. Depending on the specifics of your scripts, applications, and configurations, you would need to add more detailed instructions and examples for each part of the repository. It's also important to document the specifics of each application, any environment setup required, coding guidelines, and contribution processes.