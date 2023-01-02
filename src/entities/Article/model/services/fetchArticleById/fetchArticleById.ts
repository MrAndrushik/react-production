import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
    Article,
    string | undefined,
    ThunkConfig<string>
>('articleDetails/fetchArticleById', async (articleId, thunkApi) => {
    try {
        if (!articleId) {
            throw new Error();
        }
        const response = await thunkApi.extra.api.get<Article>(
            `/articles/${articleId}`,
            {
                params: {
                    _expand: 'user',
                },
            }
        );

        if (!response.data) {
            throw new Error('error');
        }

        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue('error');
    }
});
