import Vuex from 'vuex';

import { getUsers } from '@/webservices/UsersWebservice';

import { createLocalVue } from '@vue/test-utils';
import { inject, createStore } from 'vuex-smart-module';
import MainActions from './MainActions';

import MainStore from './MainStore';

import { usersResponse } from './testData';

const getUsersMock: jest.MockedFunction<typeof getUsers> = getUsers as any;

const commit = jest.fn();
const dispatch = jest.fn();

jest.mock('@/webservices/UsersWebservice', () => ({
    getUsers: jest.fn(),
}));

describe('Translations store', () => {
    beforeEach(() => {
        dispatch.mockClear();
        commit.mockClear();
    });
    it('Change to English', async () => {
        const localVue = createLocalVue();

        localVue.use(Vuex);

        const actions = inject(MainActions, {
            commit,
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

        const actions = inject(MainActions, {
            commit,
        });
        const store = createStore(MainStore);

        store.dispatch('changeLanguajeToEnglish');
        store.dispatch('changeLanguajeToSpanish');

        await actions.changeLanguajeToSpanish();

        expect(commit).toHaveBeenCalledWith('changeLanguajeToSpanish');

        expect(store.state.currentLanguage).toBe('es');
    });

    it('get user data', async () => {
        const localVue = createLocalVue();

        localVue.use(Vuex);

        const store = createStore(MainStore);

        getUsersMock.mockClear();
        getUsersMock.mockImplementation(
            () => new Promise(resolve => resolve(usersResponse))
        );

        await store.dispatch('getUsers');

        expect(store.state.users).toBe(usersResponse);
    });
});
