## common-styles

Common CSS styles for WEB applications

### Install

```shell script
npm i github:julyskies/common-styles
```

### Usage

##### NextJS

```jsx
// _app.tsx
import React from 'react';
import type { AppProps } from 'next/app';
import 'common-styles/styles.css';

...
```

##### Nuxt v3

```vue
// pages/index.vue
<script setup lang="ts">
import 'common-styles/styles.css';

...
</script>
```

##### React

```typescript
// index.ts
import React from 'react';
import ReactDOM from 'react-dom';
import 'common-styles/styles.css';

import App from './App';

...
```

##### Vue

```typescript
// main.ts
import { createApp } from 'vue';
import 'common-styles/styles.css';

import App from './App.vue'

...
```

### Available styles

##### CSS variables

- accent
- accent-dark
- accent-light
- background
- error
- error-dark
- error-light
- muted
- muted-dark
- muted-light
- spacer
- spacer-half
- spacer-quarter
- success
- success-dark
- success-light
- text
- text-inverted
- transition

##### Animation classes

- fade-in
- fade-out

##### Flexbox classes

- align-content-center / ac-center
- aign-items-center / ai-center
- direction-column / d-col
- direction-row / d-row
- flex / f *(display: flex)*
- flex-wrap / f-wrap *(flex-wrap: wrap)*
- flex-nowrap / f-nowrap *(flex-wrap: nowrap)*
- justify-center / j-center
- justify-end / j-end
- justify-space-around / j-space-around
- justify-space-between / j-space-between
- justify-start / j-start

##### Spacing classes

- h-auto / height-auto *(height: auto)*
- h-100 / height-100 *(height: 100%)*
- h-100vh / height-100vh *(height: 100vh)*
- m-1
- m-2
- m-half
- m-quarter
- mb-1
- mb-2
- mb-half
- mb-quarter
- mh-auto *(margin-horizontal: auto)*
- mh-1 *(margin-horizontal: var(--spacer))*
- mh-2 *(margin-horizontal: calc(var(--spacer) * 2))*
- mh-half *(margin-horizontal: var(--spacer-half))*
- mh-quarter *(margin-horizontal: var(--spacer-quarter))*
- ml-1
- ml-2
- ml-half
- ml-quarter
- mr-1
- mr-2
- mr-half
- mr-quarter
- mt-1
- mt-2
- mt-half
- mt-quarter
- mv-auto *(margin-vertical: auto)*
- mv-1 *(margin-vertical: var(--spacer))*
- mv-2 *(margin-vertical: calc(var(--spacer) * 2))*
- mv-half *(margin-vertical: var(--spacer-half))*
- mv-quarter *(margin-vertical: var(--spacer-quarter))*
- p-1
- p-2
- p-half
- p-quarter
- pb-1
- pb-2
- pb-half
- pb-quarter
- ph-auto *(padding-horizontal: auto)*
- ph-1 *(padding-horizontal: var(--spacer))*
- ph-2 *(padding-horizontal: calc(var(--spacer) * 2))*
- ph-half *(padding-horizontal: var(--spacer-half))*
- ph-quarter *(padding-horizontal: var(--spacer-quarter))*
- pl-1
- pl-2
- pl-half
- pl-quarter
- pr-1
- pr-2
- pr-half
- pr-quarter
- pt-1
- pt-2
- pt-half
- pt-quarter
- pv-auto *(padding-vertical: auto)*
- pv-1 *(padding-vertical: var(--spacer))*
- pv-2 *(padding-vertical: calc(var(--spacer) * 2))*
- pv-half *(padding-vertical: var(--spacer-half))*
- pv-quarter *(padding-vertical: var(--spacer-quarter))*
- w-auto / width-auto *(width: auto)*
- w-100 / width-100 *(width: 100%)*
- w-100vw / width-100vw *(width: 100vw)*

##### Tags

Margin and padding is removed for all of the tags.

Altered tags

- a

Tag-specific styles represented as **classes**

- button
- input

##### Utility classes

- noselect / ns
- text-center / t-center
- text-left / t-left
- text-right / t-right

### License

[MIT](./LICENSE.md)
