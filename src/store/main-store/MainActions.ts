import { Actions } from 'vuex-smart-module';

import MainState from './MainState';
import MainGetters from './MainGetters';
import MainMutations from './MainMutations';

import { User } from '../../models/User';

import { getUsers } from '@/webservices/UsersWebservice';

export default class MainActions extends Actions<
    MainState,
    MainGetters,
    MainMutations,
    MainActions
> {
    // User Actions
    public async getUsers(): Promise<void> {
        try {
            this.commit('startLoading', null);

            const users: User[] = await getUsers();

            this.commit('setUsers', users);
        } finally {
            this.commit('stopLoading', null);
        }
    }

    // Translate Actions
    public changeLanguajeToSpanish(): void {
        this.commit('changeLanguajeToSpanish');
    }

    public changeLanguajeToEnglish(): void {
        this.commit('changeLanguajeToEnglish');
    }
}
