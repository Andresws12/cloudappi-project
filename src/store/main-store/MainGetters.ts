import { Getters } from 'vuex-smart-module';
import MainState from './MainState';

export default class MainGetters extends Getters<MainState> {
    public get totalWomen(): number {
        let womanCount: number = 0;
        this.state.users.forEach(woman => {
            woman.id === 1 || woman.id === 3 ? womanCount++ : null;
        });
        return womanCount;
    }

    public get totalMen(): number {
        let menCount: number = 0;
        this.state.users.forEach(men => {
            men.id === 2 || men.id === 4 ? menCount++ : null;
        });
        return menCount;
    }
}
