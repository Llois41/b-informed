import { shallowMount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import App from './App.vue';
import DefaultLayout from './layouts/DefaultLayout.vue';

function shallowMountApp() {
    return shallowMount(App, {
        global: { stubs: { RouterView: true } },
    })
}

describe('App.vue', () => {
    test('should have the correct app heading', () => {
        const cut = shallowMountApp();
        expect(cut.get('h1').text()).toBe('b-informed')
    })

    test('should render default layout', () => {
        const cut = shallowMountApp();
        expect(cut.findComponent(DefaultLayout).isVisible()).toBe(true)
    })
})
