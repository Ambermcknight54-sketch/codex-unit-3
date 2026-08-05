# Responsive React

## Objective

Arrange TWE card components in a responsive layout with Tailwind breakpoints and React.

## Benefits

Responsive layouts make your React site convenient to view on any screen size.

## Complete these tasks

1. NOTE: This level requires `spa-template` from a previous level. Complete these tasks from scratch. Do not copy/paste unless the task permits it. Code for TW Elements can be copied/pasted.
2. Set up the website: In your system's file explorer or file picker, copy your `spa-template` folder into this level folder. The template should render TW Elements. There should also be a VS Code workspace file in `spa-template`. In this level folder, rename `spa-template` to `responsive-react`. Change the title of the website to `Highlighting Active Links in a TWE Navbar`. Rename the VS Code workspace file from `spa-template` to `responsive-react`. Open the `responsive-react` workspace. Open a VS Code terminal, which should already be in the `responsive-react` folder. After installing `node_modules`, start the Vite server and open a React Debugger browser to the URL provided by Vite.
3. View the website pages and make sure they run without errors.
4. Create a `Card` component: In the `src/components/` folder, create the file `Card.jsx` that exports the `Card` component. Let `Card` return the code for a TW Elements card that includes an image and caption, but no title and no button. In `Home.jsx`, render the `Card` component.
5. View the website pages. After fixing import and React errors, the pages should render without console errors.
6. Make the `Card` reusable: In `Card.jsx`, destructure `src`, `alt`, and `caption` in the parameters. Then use `src` and `alt` for the `img` tag. Example: `src={src}`. Use `caption` for the `p` tag content. Example: `<p>{caption}</p>`
7. Add `Card` content: In `Home.jsx`, where `Card` is rendered, add attributes/props for `src`, `alt`, and `caption`. Example: `caption="Picture of a sunset."`. Add more cards to the `Home` component until there are 9 or more.
8. View the website pages. After fixing props errors, pages should render without console errors. Observe that the cards contain the images and captions you specified.
9. Add a stylesheet: In the `Home` component, give the `main` tag a unique ID. Example: `id="mainHome"`. In the `src/styles/` folder, create `Home.css`. Add an ID selector for the `main` tag. Example: `#mainHome { ... }`. In the styles block, add a style for the `Home` page. Example: `background-color: red;`. In `Home.jsx`, import the stylesheet. Example: `import "../styles/Home.css";`
10. View the website pages. After fixing import and CSS errors, the pages should render without console errors. Observe that the styles in `Home.css` are only applied to the `Home` page and elements in its `#mainHome` tag.
11. Layout the cards: In the `Home` component, add a `section` tag in the `main` tag, then move all the cards into the `section` tag. In `Home.css`, in the `#mainHome { ... }` style block, add styles for a mobile-first layout. Example: `section { flex-direction: column; }`. This is parent syntax, where a CSS selector is nested in another selector. Only `section` tags in `#mainHome` will be selected.
12. View the website pages. They should run without errors. Observe that the styles in `Home.css` are only applied to the `Home` page and elements in the `#mainHome` tag.
13. Experiment with styles: In the browser, inspect the Home page and the `section` tag. In the `Elements` tab, select the `section` tag. In the `Styles` tab and in the `element.style` selector, experiment with styles that layout the `Home` page for larger devices.
14. In `Home.jsx` and in the `section` tag, apply responsive design with Tailwind breakpoints. Example: `className="sm:flex-row"`.
15. View the website pages. They should run without errors. Observe the `Styles` tab again. Styles for `#mainHome` may override styles from Tailwind with a strikethrough. Example: ~~`flex-direction: row;`~~
16. Configure Tailwind styles in `className` to override styles from `.css` files: In `tailwind.config.js`, add the property `important: true`.
17. In the `Home` component, add a `p` tag that explains how to create React components from TWE components and how to apply mobile-first responsive design.
18. View the website pages and make sure they run without errors.

## More Information

- TWE code can be turned into React components with props.
- A stylesheet can be imported into a component. Example: `import "../styles/Home.css"`
- A convention for component stylesheets is to match the names. Example: The `Home` component has the `Home.css` stylesheet.
- To isolate styles by page, place a unique ID in the `main` tag. Example: `id="mainHome"`
- Mobile-first responsive design styles pages for mobile devices first, then overrides them with styles for larger devices.
- Global styles that apply to all pages can be defined in `index.css`.
- Styles that only apply to specific components can be defined in CSS files that are named after the component. Example: `Home.css` contains styles for the `Home` page.
- `tailwind.config.js` can be configured to override styles in `.css` files by default. Example: `important: true`

## Usage Tips

- [Flexbox guide - for 1 dimensional layouts](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Grid - for 2 dimensional layouts](https://css-tricks.com/complete-guide-css-grid-layout/)
- [Tailwind breakpoints](https://v3.tailwindcss.com/docs/responsive-design)
- DOM stands for Document Object Model, which represents each element in the `document` object.
- Use `!` in `className` attributes or `!important` in `.css` files to indicate individual styles that should take priority.
- To make styles in `.css` files override Tailwind styles in `className`, append `!important` to the style rule. Example: `flex-direction: column !important;`.
- To make a Tailwind style in `className` override a style in `.css`, prepend it with `!`. Example: `sm:!flex-row`
- Component styles can be isolated with unique IDs. Example: `id="mainHome"`.
- In React, when CSS files are imported, their styles apply to all pages in a website. To isolate styles to specific components, assign them unique IDs and use CSS parent syntax.
- CSS parent syntax nests a selector in another selector. Example:

```css
#mainHome {
  section {
    background-color: red;
  }
}
```

## Hints

- Open a React project with a VS Code workspace so the terminal starts in the folder for the React project.
- For cleaner code, try keeping mobile-first styles in `.css` files and responsive styles in `className`.
