# React Components

## Objective

Create React components that render different page sections.

## Benefits

React components group code into reusable pieces.

## Complete these tasks

1. In your system's folder explorer or file picker, copy your `react-template` folder into this level folder.
2. In this level folder, rename `react-template` to `react-components`.
3. In the terminal, navigate to the `react-components` folder.
4. Start the Vite server and open a web browser to the URL provided by Vite.
5. In the `src` folder, create a `components` folder.
6. In the `components` folder, create the file `Main.jsx`.
7. In `Main.jsx`, create a function called `Main` that returns a `main` tag.
8. In the `main` tag, add an `h1` tag, a `p` tag, and 1 `img` tag.
9. Let the `h1` title be `React Components`
10. Let the `p` tag describe what React components are. Use your own words. Don't copy/paste.
11. In the level folder, add an image to the `assets` folder.
12. In `Main.jsx`, import the image into a variable.
13. Let the `img` tag use the variable as the `src`.
14. In `App.jsx`, import the `Main` component from `Main.jsx`.
15. Let `App` return the `Main` component. Example: `return <Main />;`
16. View the page in the browser.
17. In `App.css`, use flexbox to arrange the images horizontally.
18. In `index.css`, add at least 2 styles to improve the website's layout and appearance.
19. View the page in the browser.

## More Information

- The names of React components usually begin with a capital letter.
- Files usually match the name of what they are exporting.
- Modules like `node:os` and `node:path` are libraries because they contain code that you call.
- JavaScript, HTML, and CSS are languages they have their own syntax.
- [Software Framework vs Library](https://www.geeksforgeeks.org/software-engineering/software-framework-vs-library/)

## Usage Tips

- To import a picture into a React project, use `import`, a variable name, `from`, and the relative image path. Example: `import myPicture from "./assets/myPicture.jpg";`
- To insert a picture, use curly braces and the picture variable as the image `src`. Example: `<img src={myPicture} />`

## Hints

- If the `node_modules` folder isn't installed - In the terminal, navigate to the project folder, then run `npm install`. NPM packages for the project will be installed. An internet connection is required to download the packages.
- `npm run dev` starts a Vite server.
