import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageSliceActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('articlePage/initArticlesPage', async (props, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getArticlesPageInited(getState());
    if (!inited) {
        dispatch(articlesPageSliceActions.initState());
        dispatch(
            fetchArticlesList({
                page: 1,
            })
        );
    }
});
