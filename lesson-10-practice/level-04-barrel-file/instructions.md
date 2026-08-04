# Barrel Files

## Objective

Group closely related code together using barrel files.

## Benefits

Grouping closely related code makes files easier to find and use.

## Complete these tasks

1. NOTE: This level requires `prisma-template`, `authentication`, and `state-context` from previous levels. Complete these tasks from scratch. Do not copy/paste unless the task permits it. Code for TW Elements may be copied/pasted.
2. Set up the Prisma web client: In your system's file explorer or file picker, copy your `prisma-template` folder from a previous level into this level folder. In the terminal, navigate to `prisma-template` and run `script.js`. It should work without errors after `node_modules` are installed. You may need to update it to work with foreign keys and join tables.
3. Set up the website: In your system's file explorer or file picker, copy your `authentication` folder from a previous level into this level folder. In this level folder, rename `authentication` to `barrel-file`. In the `barrel-file` folder, rename the VS Code workspace to `barrel-file`. Open the `barrel-file` workspace. Change the title of the website to `Group Closely Related Code with Barrel Files`. Open a VS Code terminal, which it should already be in the `barrel-file` folder. Start the Vite server and open a React Debugger browser to the URL provided by Vite. View the website pages. They should work without errors after `node_modules` are installed.
4. Prepare the barrel file folder structure: In the `src/components/` folder, create the folder `Authentication`. Move `Authentication.jsx`, `Login.jsx`, `Logout.jsx`, and `useLogin.jsx` into the `Authentication` folder. Observe that closely related files have been grouped together in an appropriately named folder.
5. View the website pages. After fixing import errors, confirm that all pages render without console errors. In `WebClient.jsx`, notice that the import for `Authentication` has a redundant path. Example: `import { Authentication } from "../components/Authentication/Authentication";`
6. Create the barrel file: In the `Authentication` folder, create the file `index.js`. In `index.js`, re-export the `Authentication` component. Example: `export { Authentication } from "./Authentication";`. Re-export other modules that are intended for use by other parts of the app. Example: `export { useLogin } from "./useLogin";`. Omit from `index.js` any modules that are not intended to be used outside the `Authentication` folder. Example: `Login` and `Logout`
7. Simplify imports: In `WebClient.jsx`, remove the redundancy from imports. Example: `import { Authentication, useLogin } from "../components/Authentication";`. The barrel file `index.js` provides implied access to the folder's exports, so it's not necessary to specify `index.js` in the import path. Modules from different files can be imported from the same barrel file.
8. View the website pages. After fixing export and import errors, confirm that all pages render without console errors.
9. Add modules from another project: In your system's file explorer or file picker, open your `state-context` folder from a previous level. Copy the hooks from `state-context/src/hooks/` to `barrel-file/src/hooks/`. Copy the counter components from `state-context/src/components/` — `Count.jsx`, `Decrement.jsx`, `Increment.jsx`, `Message.jsx`, and `StateContext.jsx` — to `barrel-file/src/components/`. Copy `Counter.jsx` from `state-context/src/pages/` to `barrel-file/src/pages/`. Copy `counter.js` from `state-context/src/states/` to `barrel-file/src/states/`.
10. Render the `Counter` page: In the `barrel-file/src/` folder, open `App.jsx`. Add a `Route` for the `Counter` page. Example: `path="/counter"`. In `Navbar.jsx`, add a link to the `Counter` page.
11. View the website pages. After fixing import and path errors, confirm that all pages render without console errors and that the counter works as intended.
12. Prepare the barrel file folder structure: In the `src/components/` folder, create the folder `Counter`. Move `Count.jsx`, `Decrement.jsx`, `Increment.jsx`, and `Message.jsx` into the `Counter` folder. Observe that closely related files have been grouped together in an appropriately named folder.
13. Create the barrel file: In the `Counter` folder, create the file `index.js`. In `index.js`, re-export all the components in the `Counter` folder. Example: `export { Count } from "./Count";`.
14. Simplify imports: In `src/pages/Counter.jsx`, use a single `import` statement to import all the components from the `Counter` folder. The barrel file `index.js` is implied, so it's not necessary to specify `index.js` in the import path.
15. View the website pages. After fixing import and path errors, confirm that all pages render without console errors and that the counter works as intended.
16. In the `Home` component, add a `p` tag that explains barrel files, how to use them, and how they group related code together.
17. View the website pages and make sure they run without errors.

## More Information

- The `index.js` barrel file re-exports modules that are intended to be used by other files in the project.
- Files that are not intended to be used by other files in the project can be omitted from the `index.js` barrel file.
- As projects grow, barrel files become useful for grouping closely related files together.
- Vite automatically detects barrel files, so `index.js` can be omitted from import paths.
- Barrel files can combine multiple modules into one import. Example: `import { Authentication, useLogin } from "./components/Authentication";`

## Usage tips

- Files that are shared throughout a React project can remain in their category folders. Example: `src/hooks/` or `src/styles/`.
- Barrel files help other developers become familiar with a project. Instead of searching through deeply nested code where private files reside, developers can focus on the public files indicated by barrel files.
- Barrel files can become the source of truth: moving files then only requires updating the barrel file, which reduces the chance of breaking code that depends on those exports.

## Hints

- If it makes sense to group related files in a folder, it may also make sense to group their exports in a barrel file.
