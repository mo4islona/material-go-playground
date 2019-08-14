# React Component for Golang playground


## Install
```shell
yarn add react-go-playground
```
## Usage


```js
const code = `package main

import (
  "fmt"
)

func main() {
  fmt.Println("Hello, playground")
}`;

<GoPlayground
   code={code}
/>
```
