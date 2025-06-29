# uno-chan

`uno-chan` is an UnoCSS preset that provides custom utility classes and a rich set of animations.

## Demo

You can see a live demo of the animations at:
[https://uno-chan-demo-site.vercel.app/](https://uno-chan-demo-site.vercel.app/)

## Installation

Install `uno-chan` in your project:

```bash
pnpm add uno-chan
# or
npm install uno-chan
# or
yarn add uno-chan
```

## Setup

To use `uno-chan`, you need to add it to your UnoCSS configuration file (e.g., `uno.config.ts`).

1.  **Import the preset:**

    ```typescript
    import { defineConfig } from 'unocss';
    import unoChanPreset from 'uno-chan';

    export default defineConfig({
      presets: [
        unoChanPreset(),
        // ... other UnoCSS presets
      ],
      // ... other UnoCSS configurations
    });
    ```

2.  **Integrate UnoCSS with your project:**

    If you haven't already, set up UnoCSS in your project. Refer to the [official UnoCSS documentation](https://unocss.dev/) for framework-specific integration guides (e.g., for Next.js, Svelte, or Vite).

## Available Animations

`uno-chan` provides a variety of animations that can be applied with the `animation-<name>-<duration>ms` utility class. You can also specify an iteration count or `infinite`.

**Usage:**

-   `animation-<name>-<duration>ms`
-   `animation-<name>-<duration>ms-<iteration-count>`
-   `animation-<name>-<duration>ms-infinite`

**Example:**

```html
<div class="animation-fadeIn-1000ms">This element will fade in over 1 second.</div>
<div class="animation-bounce-500ms-3">This element will bounce 3 times.</div>
<div class="animation-spin-2000ms-infinite">This element will spin continuously.</div>
```

**Supported Animations:**

-   `fadeIn`, `fadeOut`
-   `fadeInDown`, `fadeInUp`
-   `fadeOutDown`, `fadeOutUp`
-   `slideIn`, `slideOut`
-   `zoomIn`, `zoomOut`
-   `zoomInDown`, `zoomInUp`, `zoomInLeft`, `zoomInRight`
-   `zoomOutDown`, `zoomOutUp`, `zoomOutLeft`, `zoomOutRight`
-   `bounce`
-   `shake`
-   `rotate`
-   `flip`
-   `spin`
-   `pulse`
-   `flash`
-   `wiggle`

## Building from Source

If you need to build the package from its source code, follow these steps:

1.  **Clone the repository and navigate to the `uno-chan` package:**

    ```bash
    # Clone your project repository if you haven't already
    git clone <your-repo-url>
    cd <your-repo>/packages/uno-chan
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Run the build command:**

    The build script uses `tsup` to compile the TypeScript source code into both ESM and CJS formats and generates type definitions.

    ```bash
    pnpm run build
    ```

    This will create a `dist` directory with the compiled output.
