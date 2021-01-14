import axios from 'axios';

import { apiPrefix, jsonHeaders } from './consts';

import { UsersResponse } from './models';

const baseUrl: string = apiPrefix('/users');

export const getUsers: () => Promise<UsersResponse[]> = async () => {
    const response = await axios.get<UsersResponse[]>(
        `${baseUrl}`,
        jsonHeaders
    );
    return response.data;
};
