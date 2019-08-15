# React Material UI Component for Golang playground

[Demo](https://www.google.com)

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

## Docs

// TODO

## Widget

```
<div id="editor"></div>
<script src="https://unpkg.com/material-go-playground@0.0.7/dist/widget.min.js"></script>
<script>
  const code = `
    package main

    import (
      "fmt"
      "time"
      "math/rand"
    )

    func main() {
      for i:=0; i<=30; i++ {
        fmt.Println("Hello, playground")
        time.Sleep(time.Duration(rand.Intn(5)))
      }
  }`

  const height = document.documentElement.clientHeight - 56 - 24;

  GoPlayground.create(document.getElementById('editor'), {
    code: code,
    title: 'My example'
  })
</script>

```

[Widget demo](https://jsfiddle.net/mo4islona/a08unxjw/)

