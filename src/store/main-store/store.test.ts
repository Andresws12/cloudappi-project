import Vuex from 'vuex';

import { createLocalVue } from '@vue/test-utils';
import { inject, createStore } from 'vuex-smart-module';
import MainActions from './MainActions';

import MainStore from './MainStore';

describe('Translations store', () => {
    it('Change to English', async () => {
        const localVue = createLocalVue();
        localVue.use(Vuex);

        const commit = jest.fn();
        const actions = inject(MainActions, {
            commit,
            state: {
                currentLanguage: 'es',
            },
        });
        const store = createStore(MainStore);

        store.dispatch('changeLanguajeToEnglish');

        await actions.changeLanguajeToEnglish();

        expect(commit).toHaveBeenCalledWith('changeLanguajeToEnglish');

        expect(store.state.currentLanguage).toBe('en');
    });
    it('Change to Espanish', async () => {
        const localVue = createLocalVue();
        localVue.use(Vuex);

        const commit = jest.fn();
        const actions = inject(MainActions, {
            commit,
            state: {
                currentLanguage: 'es',
            },
        });
        const store = createStore(MainStore);

        store.dispatch('changeLanguajeToEnglish');

        await actions.changeLanguajeToEnglish();

        expect(commit).toHaveBeenCalledWith('changeLanguajeToEnglish');

        expect(store.state.currentLanguage).toBe('en');
    });
});
