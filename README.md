SWC error when compressing Svelte.

```html
<div class="app"></div>

<script type="module">
    import { App } from './dist/test-vite.js';

    new App({
        target: document.querySelector('.app'),
        props: {
            label: 'world',
        },
        // context: []
    });
</script>
```

`vite.html` works, `swc.html` (same code as above but loads `test-swc.js`) throws the error below.

```
Uncaught TypeError: Cannot read properties of undefined (reading 'context')
    at I (test-swc.js:197:49)
    at new ft (test-swc.js:336:43)
    at swc.html:18:13
```

If we supply `context` prop to `App` the app works but the sub component will throw the error.

If we disable `compress` in the `.swcrc` file the code runs.

```json
{
    "jsc": {
        "minify": {
            "compress": true,
            "mangle": false
        }
    }
}
```

This is problematic as NextJS 12 has switched to SWC for compressing code and Svelte components used will throw an error.
