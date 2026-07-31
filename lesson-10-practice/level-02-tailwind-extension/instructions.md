# Tailwind Extension

Install the VS Code extension for Tailwind and configure it to auto-fill utility classes.

## Benefits

The VS Code Tailwind extension can reduce the amount of time spent referencing classes in the Tailwind website.

## Complete these tasks

1. NOTE: This level requires `spa-template` from a previous level. Complete these tasks from scratch. Do not copy/paste unless the task permits it. Code for TW Elements can be copied/pasted.
2. Set up the website: In your system's file explorer or file picker, copy your `spa-template` folder into this level folder. The template should render TWE components and should include a VS Code workspace file. In this level folder, rename `spa-template` to `tailwind-extension`. Update the website title to `Intellisense with the Tailwind Extension`. Rename the VS Code workspace file from `spa-template` to `tailwind-extension` and open that workspace. Open a VS Code terminal, which should already be in the `tailwind-extension` folder. After installing `node_modules`, start the Vite server and open a React Debugger browser to the URL provided by Vite.
3. View the website pages and make sure they run without errors.
4. Add a Tailwind style: Open `Home.jsx`. In the `main` tag, add `className="text-green-500"`. Notice that no popup appears listing valid Tailwind classes.
5. View the website pages and make sure they run without errors. Observe that text in the `main` tag of the `Home` page is green.
6. Install the Tailwind extension: Open the `Extensions` panel. Search for `tailwind`. Install `Tailwind CSS Intellisense` by `Tailwind Labs`.
7. Change a Tailwind style: Open `Home.jsx`. In the `main` tag, change the color to `text-red-300`. Even with the Tailwind extension installed, notice that no popup appears listing valid Tailwind classes.
8. View the website pages and make sure they run without errors. Observe that text in the `main` tag of the `Home` page is a shade of red.
9. Configure the Tailwind extension: Open `style.css`, which is in the same folder as `package.json`. After any `@import` statements in `style.css`, add `@config "tailwind.config.js";`
10. Change a Tailwind style: Open `Home.jsx`. In the `main` tag, change the color to `text-blue-400`. A popup should present Tailwind classes for different shades of blue.
11. View the website pages and make sure they run without errors. Observe that text in the `main` tag of the `Home` page is a shade of blue.
12. Use more Tailwind styles: Open `Home.jsx`. In the `main` tag, add more elements and properly apply variants of the following Tailwind classes - `bg-`, `font-`, `w-`, `h-`, `p-`, `m-`, `border-`, `rounded-`, `shadow-`, `opacity-`, `blur-`, `rotate-`, `skew-`, `hover:`, and `cursor-`.
13. In the `Home` component, add a `p` tag that explains how to install and configure the Tailwind VS Code extension.
14. View the website pages and make sure they run without errors.

## More Information

- To open the `Extensions` panel, click the settings gear icon → `Extensions`.
- Because TW Elements uses Tailwind version 3, follow the Tailwind extension installation instructions for Tailwind v3.
- [Tailwind extension for VS Code](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Tailwind utility classes](https://v3.tailwindcss.com/docs/padding)
- [CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties)

## Usage Tips

- In `.css` files, `@import` statements should be at the top with no code before them.
- For Tailwind v3, `@config` must be used to indicate the location of the Tailwind config file. Example: `@config "tailwind.config.js";`

## Hints

- Open a React project with a VS Code workspace so the terminal starts in the folder for the React project.
