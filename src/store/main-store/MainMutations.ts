import { Mutations } from 'vuex-smart-module';

import MainState from './MainState';

import { User } from '../../models/User';

export default class MainMutations extends Mutations<MainState> {
    // User Mutations
    public setUsers(users: User[]): void {
        this.state.users = users;
    }

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
