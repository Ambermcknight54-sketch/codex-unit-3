# Active Links

## Objective

Configure the TWE navbar to highlight active links.

## Benefits

React Router provides utilities that can automatically highlight active links in the TWE navbar.

## Complete these tasks

1. NOTE: This level requires `spa-template` from a previous level. Complete these tasks from scratch. Do not copy/paste unless the task permits it. Code for TW Elements can be copied/pasted.
2. Set up the website: In your system's file explorer or file picker, copy your `spa-template` folder into this level folder. The template should render a `Navbar` with TW Elements that links to at least 2 pages. There should also be a VS Code workspace file in `spa-template`. In this level folder, rename `spa-template` to `active-links`. Change the title of the website to `Highlighting Active Links in a TWE Navbar`. Rename the VS Code workspace file from `spa-template` to `active-links`. Open the `active-links` workspace. Open a VS Code terminal, which should already be in the `active-links` folder. After installing `node_modules`, start the Vite server and open a React Debugger browser to the URL provided by Vite.
3. View the website pages and make sure they run without errors. Click on the page links. Observe that the link to the home page is always highlighted, even when navigating to another page.
4. Open `Navbar.jsx`. Replace the label for the nav brand with `Active Links`. The nav brand is usually a link that represents the website. There should be no `a` tags because they were replaced with `NavLink` tags. There should be no `href` attributes because they were replaced with `to`. There should be no `class` attributes because they were replaced with `className`.
5. Identify the link styles: Observe the `className` values for the `NavLink`. All page links, except for the nav brand link, should have some type of `active:` class. The `active:` class applies a style only while the element is active - when the element is clicked or focused.
6. Unify the link styles: Copy the `className` that uses `active:` and use it to replace the `className` for `NavLink` tags that don't have `active:`. Only replace the `className` for page links, not the nav brand.
7. View the website pages. They should run without errors. Observe that navbar links highlight when clicked, and lose highlight when another link is clicked. Observe that the highlighted link loses its highlight when something else on the page, like a word, is clicked. Observe that the highlighted link loses its highlight when the page is refreshed.
8. Open DevTools and view the `Elements` tab. Inspect one of the page links. Observe that it is an `a` tag - the `NavLink` components render `a` tags. Notice that the `active` class is appended to the end of the `class` list when a link is clicked, then removed when another link is clicked. The `NavLink` component automatically adds the `active` class when the browser address path matches the `href` attribute of the `a` tag, then removes `active` when the paths don't match.
9. Keep links actively highlighted: In `Navbar.jsx`, replace all occurrences of `active:` with `[&.active]:`. This is Tailwind's arbitrary variants syntax. It represents a CSS selector. The `&` represents the current element. The `.active` represents the `active` class. The `:` separates the selector from the style. Altogether, it means: when the current element has the `active` class, apply the following style.
10. View the website pages. They should run without errors. Observe that the highlighted link remains highlighted even when clicking on something else on the page, or refreshing the page.
11. In the `Home` component, add a `p` tag that explains how to use Tailwind classes to properly highlight active links in TWE navbars.
12. View the website pages and make sure they run without errors.
13. Update your templates with proper active links.

## More Information

- The nav brand, usually located at the top left of a navigation panel, represents the website with a logo or the website name.
- The nav brand provides a quick and familiar way to link to the home page of a website.
- The `active:` class applies while an element is active - when it is clicked or focused - but is deactivated when another element is activated.
- The `[&.active]:` variant applies when an element has an `active` class (without the colon).
- The `NavLink` component automatically appends the `active` class when the `to` attribute matches the path in the browser address bar.
- Tailwind arbitrary variants represent CSS selectors and are escaped with `[]`.
- [Tailwind Arbitrary Variants](https://tailwindcss.com/docs/hover-focus-and-other-states#using-arbitrary-variants)

## Usage Tips

- The nav brand's appearance should remain consistent, therefore it doesn't need the `active` class or anything related to it.
- The CSS `active` status is different from an `active` CSS class.
- An element has `active` status when it is clicked or has focus.
- An element has the `active` class when `active` appears in its `class` list.

## Hints

- Open a React project with a VS Code workspace so the terminal starts in the folder for the React project.
