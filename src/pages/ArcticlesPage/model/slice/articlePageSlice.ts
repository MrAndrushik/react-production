import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageSchema } from '../types/articlesPageSchema';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage ?? articlesAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.BIG,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        initState: (state) => {
            state.view = localStorage.getItem(
                ARTICLE_VIEW_LOCALSTORAGE_KEY
            ) as ArticleView;
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchArticlesList.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(
            fetchArticlesList.fulfilled,
            (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false;
                articlesAdapter.setAll(state, action.payload);
            }
        );
        builder.addCase(fetchArticlesList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { reducer: articlesPageSliceReducer } = articlesPageSlice;
export const { actions: articlesPageSliceActions } = articlesPageSlice;
