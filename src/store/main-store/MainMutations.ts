import { Mutations } from 'vuex-smart-module';

import MainState from './MainState';

export default class MainMutations extends Mutations<MainState> {
    // Languaje Mutations
    public changeLanguajeToSpanish(): void {
        this.state.currentLanguage = 'es';
    }

    public changeLanguajeToEnglish(): void {
        this.state.currentLanguage = 'en';
    }

    // Loading Mutations
    public startLoading(): void {
        this.state.isLoading = true;
    }

    public stopLoading(): void {
        this.state.isLoading = false;
    }
}
