# Node Modules

## Objective

Import and use built-in NodeJS modules.

## Benefits

Built-in NodeJS modules increase productivity by allowing developers to reuse stable, compatible, efficient, and secure code.

## Complete these tasks

1. In `script.js`, import `cpus`, `totalmem`, `freemem`, `machine`, and `platform` from `node:os`.
2. Use those functions and save their return values in descriptive variables.
3. Use `console.log` to display the value of each variable.
4. In the terminal, navigate to this folder and run `script.js`
5. In `script.js`, import `resolve` and `parse` from `node:path`.
6. Use the functions and save their return values in descriptive variables.
7. Use `console.log` to display the value of each variable.
8. Run `script.js`

## More Information

- `node:os` is a built-in NodeJS module that provides various ways to gain information about the local operating system.
- `node:path` is a built-in NodeJS module that provides utilities for file and folder paths.
- [OS Module](https://nodejs.org/api/os.html)
- [Path Module](https://nodejs.org/api/path.html)

## Usage Tips

- `cpus` is a function that returns information about the local CPU. Example: `const cpuInfo = cpus();`
- `resolve` accepts a relative path string and returns the full path. Example: `const filepath = resolve("./script.js");`
- `parse` accepts a path string and returns an object. Example: `const pathParts = parse(filepath);`

## Hints

- Use commas to separate multiple named imports from a single file.
