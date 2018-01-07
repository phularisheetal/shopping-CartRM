# GIT APP



## Install

```
npm install
npm run start
open application at http://localhost:8080/
```

## Architecture and Technology Stack

1. This Application makes use of
      * React v16
      * Webpack 2.2.0,
      * CSS modules,
      * React-router version 4
      * Redux

      -- Using React v16 - React is a simple yet powerful library, it is the first library I came across which follows a components based architecture, helps in debugging, and wins in performance with its partial rendering and virtual DOM feature. Version 16 has many new features release very recently one big one is Errorhandling and ErrorLogging

      -- React-router and redux compliments the above Technology stack and react for routing and application state management

      -- CSS modules is a concept of adding styles in React Components , where we append classNames to components mapping with css files which instead  creates a unique class names .Setting for this is done in webpack.config.js

      -- Webpack, there are other build tooks like gulp and grunt, webpack can actually split up your bundle.js, can control application assets,and even support hot reloading.

## Screenshots
![Products](screens/productsListpng?fileviewer=file-view-default)

![Product Details](screens/productsDetail.png?fileviewer=file-view-default)
![Filtered Products](Screenshot/filterProducts.png?fileviewer=file-view-default)
![Cart](Screenshot/cart.png?fileviewer=file-view-default)
