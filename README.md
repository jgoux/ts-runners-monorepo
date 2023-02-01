# Reproduction

`vite-node` is not using `@acme/sdk` own `node_modules` to resolve `find-up` dependency, it uses the one in root `node_modules` which is used internally by `@changesets/cli`

```bash
pnpm i
pnpm --filter app start:vite-node
```

`tsx` is correctly using the local `node_modules` in `@acme/sdk`:

```bash
pnpm --filter app start:tsx
```