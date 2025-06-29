# uno-chan-demo-site

This is the official demonstration site for the `uno-chan` UnoCSS preset. This project is a monorepo managed with pnpm and Turbo.

## Live Demo

You can view the live demo here: [https://uno-chan-demo-site.vercel.app/](https://uno-chan-demo-site.vercel.app/)

## Workspace Structure

-   `apps/demo-site`: The main demo website, built with React and Vite.
-   `packages/uno-chan`: The `uno-chan` UnoCSS preset package.
-   `__legacy__`: A legacy version of the site, built with SvelteKit.

## Getting Started

### Installation

To get started, install the dependencies using pnpm:

```bash
pnpm install
```

### Running the Development Server

To start the development server for the demo site, run:

```bash
pnpm dev
```

This will start the Vite development server for the `demo-site` application.

### Building for Production

To build all packages and applications for production, run:

```bash
pnpm build
```

This command uses Turbo to build all workspaces in the correct order.

## Tech Stack

-   **Framework:** React (with Vite)
-   **Styling:** UnoCSS, using the `uno-chan` preset from this repository.
-   **Language:** TypeScript
-   **Monorepo Management:** pnpm Workspaces, Turbo
