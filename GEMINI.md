# Gemini Project Workspace

This file provides context for the Gemini AI code assistant, helping it understand the project structure, conventions, and goals. By maintaining this document, you can improve Gemini's ability to provide relevant and accurate assistance.

## Project Overview

-   **Name:** uno-chan-demo-site
-   **Description:** A demonstration website for the `uno-chan` UnoCSS preset, showcasing its animation utilities.
-   **Repository:** [https://github.com/kubokawa/uno-chan-demo-site](https://github.com/kubokawa/uno-chan-demo-site)

## Workspace Structure

This is a monorepo managed with pnpm workspaces.

-   `apps/demo-site`: The main demo website, built with React and Vite.
-   `packages/uno-chan`: The `uno-chan` UnoCSS preset package.
-   `__legacy__`: A legacy version of the site, built with SvelteKit.

## Development Workflow

1.  **Installation:**

    ```bash
    pnpm install
    ```

2.  **Running the demo site:**

    ```bash
    pnpm run --filter demo-site dev
    ```

3.  **Building the `uno-chan` package:**

    ```bash
    pnpm run --filter uno-chan build
    ```

## Coding Conventions

-   **Language:** TypeScript
-   **Linter:** ESLint
-   **Formatter:** Prettier
-   **Styling:** UnoCSS with the `uno-chan` preset

## Goals

-   Maintain and improve the `uno-chan` package.
-   Enhance the demo site to showcase new features.
-   Keep dependencies up-to-date.
