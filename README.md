# Webpack Typescript Boilerplate
Very simple Webpack 4 Typescript boilerplate html5 starter template kit for webstorm and vscode, with hot reloading, intellij javascript debug configuration.

Just open this project in your IDE and start developing. Write code directly in `src/main.ts` and handle module exports in `src/index.ts`. It is possible to write js-only code like in `sample.js`. The declaration files for these are automatically generated in `dist` by `tsc`.

For IntelliJ IDEs, change the project name by selecting the project in the File Hierarchy and Refactor/Rename project name.

The exported library is `MAIN`. To change this in your project, update constants at the top of `webpack.common.js`.

```
//install dependencies
npm install

//start a dev server to test the project.
npm start

//build a production code and uglifies to generate .min.js in the dist folder. 
npm build
```