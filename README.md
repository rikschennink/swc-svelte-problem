SWC error when compressing Svelte

Only happens if Svelte is imported in JS file

```
test-swc.js:197 Uncaught TypeError: Cannot read properties of undefined (reading 'context')
    at H (test-swc.js:197:49)
    at new ft (test-swc.js:336:43)
    at test-swc.js:330:1
```
