import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
export const fetchArticlesList = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
>('articlePage/fetchArticlesList', async (_, thunkApi) => {
    try {
        const response = await thunkApi.extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'user',
            },
        });

        if (!response.data) {
            throw new Error('error');
        }

        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue('error');
    }
});
