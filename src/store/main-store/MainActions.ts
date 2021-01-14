import { Actions } from 'vuex-smart-module';

import MainState from './MainState';
import MainGetters from './MainGetters';
import MainMutations from './MainMutations';

export default class MainActions extends Actions<
    MainState,
    MainGetters,
    MainMutations,
    MainActions
> {
    // Translate Actions
    public changeLanguajeToSpanish(): void {
        this.commit('changeLanguajeToSpanish');
    }

    public changeLanguajeToEnglish(): void {
        this.commit('changeLanguajeToEnglish');
    }
}
