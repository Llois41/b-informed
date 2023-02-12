import { shallowMount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import App from './App.vue';

describe('App.vue', () => {
    test('should have the correct app heading', () => {
        expect(shallowMount(App).get('h1').text()).toBe('b-informed')
    })
})
