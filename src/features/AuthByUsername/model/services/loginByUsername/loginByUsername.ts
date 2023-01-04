import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authdata, thunkApi) => {
        try {
            const response = await thunkApi.extra.api.post<User>('/login', authdata);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

            // if (thunkApi.extra?.navigate) {
            //     // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            //     thunkApi.extra.navigate(RoutePath.profile + response.data.id);
            // }

            thunkApi.dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue('error');
        }
    }
);
