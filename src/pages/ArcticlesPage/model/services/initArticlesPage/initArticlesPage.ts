import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageSliceActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlePage/initArticlesPage',
    async (searchParams, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const inited = getArticlesPageInited(getState());
        if (!inited) {
            const orderFromUrl = searchParams.get('order') as SortOrder;
            const sortFromUrl = searchParams.get('sort') as ArticleSortField;
            const searchFromUrl = searchParams.get('search');
            const typeFromUrl = searchParams.get('type') as ArticleType;

            if (orderFromUrl) {
                dispatch(articlesPageSliceActions.setOrder(orderFromUrl));
            }

            if (sortFromUrl) {
                dispatch(articlesPageSliceActions.setSort(sortFromUrl));
            }

            if (searchFromUrl) {
                dispatch(articlesPageSliceActions.setSearch(searchFromUrl));
            }

            if (typeFromUrl) {
                dispatch(articlesPageSliceActions.setType(typeFromUrl));
            }

            dispatch(articlesPageSliceActions.initState());
            dispatch(fetchArticlesList({}));
        }
    }
);
