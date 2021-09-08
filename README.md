# Get started

mohen-vueuse is a collection of utility functions based on Composition API. We assume you are already familiar with the basic ideas of Composition API before you continue.


<p align="center">
<a href="https://www.npmjs.com/package/mohen-vueuse" target="__blank"><img src="https://img.shields.io/npm/v/mohen-vueuse?color=a1b858&label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/mohen-vueuse" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/mohen-vueuse?color=50a36f&label="></a>
<br>
<a href="https://github.com/251205668/mohen-vueuse" target="__blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/251205668/mohen-vueuse?style=social"></a>
</p>

## Installation

```shell
npm i mohen-vueuse
```

## Usage Example

```typescript
import { useMouse, usePreferredDark, useLocalStorage } from 'mohen-vueuse'

export default {
  setup() {
    // tracks mouse position
    const { x, y } = useMouse()

    // is user prefers dark theme
    const isDark = usePreferredDark()

    // persist state in localStorage
    const store = useLocalStorage(
      'my-storage',
      {
        name: 'Apple',
        color: 'red',
      },
    )

    return { x, y, isDark, store }
  }
}
```
