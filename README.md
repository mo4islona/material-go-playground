# React Material UI Component for Golang playground

<!--![Build](https://travis-ci.org/mo4islona/node-blockly.svg?branch=master)-->

[Website](http://mo4islona.github.io/material-go-playground/)

## Install
```shell
yarn add material-go-playground
```

## Usage

```jsx
import React from "react";
import { render } from "react-dom";
import GoPlayground from "material-go-playground";

const code = `package main

import (
  "fmt"
)

func main() {
  fmt.Println("Hello, playground")
}`;

function App() {
  return <GoPlayground code={code}/>
}

render(
  <App/>,
  document.getElementById("root"),
);
```
