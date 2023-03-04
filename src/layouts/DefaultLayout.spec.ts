import { describe, expect, test } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import DefaultLayout from './DefaultLayout.vue';

describe('DefaultLayout', () => {
    test('should render navbar, main content and footer', () => {
        const cut = shallowMount(DefaultLayout, {
            global: { stubs: { RouterLink: true } }
        });
        expect(cut.get('nav').isVisible()).toBe(true)
        expect(cut.get('main').isVisible()).toBe(true)
        expect(cut.get('footer').isVisible()).toBe(true)
    })
})
