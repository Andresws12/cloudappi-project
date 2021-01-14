import { User } from '../../models/User';

export default class MainState {
    public users: User[] = [];
    public isLoading: boolean = false;
    public currentLanguage: string = 'en';
}
