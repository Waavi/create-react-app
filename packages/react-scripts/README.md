# react-scripts

This package includes scripts and configuration used by [Create React App](https://github.com/facebookincubator/create-react-app).<br>
Please refer to its documentation:

* [Getting Started](https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started) – How to create a new app.
* [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.

## WAAVI CUSTOM
Hemos modificado estos ficheros con un comentario antes de "// TODO: WAAVI CUSTOM":

- jest/babelTransform.js
- webpack.config.dev.js
- webpack.config.prod.js

## Como probar este paquete
- Te pones en esta carpeta y ejecutamos yarn link.
- Vamos al proyecto de react que queremos probarlo y ejecutamos yarn link @waavi/react-scripts
- Quitar el repo local yarn unlink @waavi/react-scripts

## Como publicar este paquete
- Modificas el package.json aumentando la versión.
- Te pones en este carpeta.
- npm login
- npm publish
