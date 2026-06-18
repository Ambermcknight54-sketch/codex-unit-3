# Default Imports

## Objective

Access and use a default exports from separate files. Observe that values can be defined first or directly exported.

## Benefits

Default exports and imports allow code to be accessed by any variable name from another file.

## Complete these tasks

1. In `definedMessage.js` define a `const` string variable called `definedMessage`.
2. Let `definedMessage` explain how to use `export default`.
3. Make `definedMessage` accessible as a default export.
4. In `index.js`, import `definedMessage`.
5. Add `console.log` to display `definedMessage`.
6. In the terminal, navigate to this folder and run `index.js`.
7. In `directMessage.js`, use `export default` to directly export a string that explains default imports.
8. In `index.js`, import the direct message.
9. Add `console.log` to display the direct message.
10. Run `index.js`

## More Information

- `export default` allows a single value in a file to be accessible by other files.
- `import` and `from` accesses code from another file.
- [Using the default export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export#using_the_default_export)

## Usage Tips

- A variable or function name can be exported. Example: `export default myValue`
- Use `export default` to directly export a single value. Example: `export default "My value."`
- To `import`, specify a variable to store the value and specify the relative file path. Example: `import myValue from "./myValue.js"`
- Note that there are no curly braces for default imports.

## Hints

- Only one `export default` is allowed per file.
- In relative paths, `./` means "current folder".
- `./myFile.js` means `myFile.js` is in the current folder.
- Any variable name can import a default export. The imported variable doesn't have to match the exported variable.
