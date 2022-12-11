import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

const baseURL = __API__;

export const $api = axios.create({
    baseURL,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) ?? '',
    },
});
