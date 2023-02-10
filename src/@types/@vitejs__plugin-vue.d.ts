declare module '@vitejs/plugin-vue' {
    import { type Plugin } from 'vite';

    // @vitejs/plugin-vue does not have proper typings (the default import is declared as {default: ...})
    // these are minimal typings, so we can use the plugin without casting to `any` or other hacks,
    // see https://github.com/vitejs/vite/issues/10481.
    const plugin: () => Plugin;
    export default plugin;
}
