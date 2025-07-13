import { defineConfig, mergeConfig } from "vitest/config";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import path from "node:path";
import { fileURLToPath } from "node:url";
import viteConfig from "./vite.config";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [
      storybookTest({
        configDir: path.join(dirname, ".storybook"),
        storybookScript: "npm run storybook:run --ci",
      }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(dirname, "src"),
        },
    },
    test: {
      globals: true,
      coverage: {
        provider: "v8",
        reporter: ["text", "json", "html"],
        include: ["src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        exclude: [
          "node_modules",
          "dist",
          ".storybook",
          "**/*.d.ts",
          "**/*.stories.{js,jsx,ts,tsx}",
          "**/*.test.{js,jsx,ts,tsx}",
          "**/*.spec.{js,jsx,ts,tsx}",
        ],
      },
      projects: [
        {
          test: {
            name: "unit",
            environment: "node",
            include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
            exclude: ["src/**/*.stories.tsx"],
          },
        },
        {
            test: {
                name: "storybook",
                browser: {
                    enabled: true,
                    provider: "playwright",
                    headless: true,
                    instances: [{ browser: "chromium" }],
                },
                setupFiles: [path.join(dirname, ".storybook/vitest.setup.ts")],
            },
        },
      ],
    },
  }),
);
