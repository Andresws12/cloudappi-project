import Vue from 'vue';
import Vuex from 'vuex';
import { createStore, Module } from 'vuex-smart-module';
import createPersistedState from 'vuex-persistedstate';

import mainStore from './main-store/MainStore';

Vue.use(Vuex);

const root = new Module({
    modules: {
        mainStore,
    },
});

const persistedPaths = ['path'];
export const store = createStore(root, {
    plugins: [createPersistedState({ paths: persistedPaths })],
});
