# uno-chan

`uno-chan` is an UnoCSS preset that provides custom utility classes and animations.

## Installation

Install `uno-chan` in your project:

```bash
pnpm add uno-chan
# or
npm install uno-chan
# or
yarn add uno-chan
```

## Usage with Next.js

1.  **Create `uno.config.ts` in your Next.js project (e.g., `apps/demo/uno.config.ts`):**

    If you don't have an `uno.config.ts` file, create one at the root of your Next.js application (e.g., `apps/demo/uno.config.ts`).

    ```typescript
    // apps/demo/uno.config.ts
    import { defineConfig } from 'unocss';
    import unoChanPreset from 'uno-chan';

    export default defineConfig({
      presets: [
        unoChanPreset(),
        // ... other UnoCSS presets you might be using
      ],
      // ... other UnoCSS configurations
    });
    ```

2.  **Integrate UnoCSS with Next.js:**

    Ensure your Next.js project is set up to use UnoCSS. This typically involves configuring `next.config.js` and importing UnoCSS styles. Refer to the official UnoCSS documentation for Next.js integration if you haven't already set it up.

3.  **Use the `fadeIn` animation:**

    `uno-chan` provides a `fadeIn` animation. You can use it with the `animation-fadeIn-<duration>ms` utility class.

    ```html
    <div class="animation-fadeIn-1000ms">
      This element will fade in over 1000 milliseconds.
    </div>
    ```

    The `duration` can be any number representing milliseconds (e.g., `500ms`, `2000ms`).
