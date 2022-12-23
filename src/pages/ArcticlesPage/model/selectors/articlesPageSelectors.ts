import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';
export const getArticlesPageIsLoading = (state: StateSchema) =>
    state.articlesPage?.isLoading;

export const getArticlesPageError = (state: StateSchema) =>
    state.articlesPage?.error;

export const getArticlesPageView = (state: StateSchema) =>
    state.articlesPage?.view ?? ArticleView.BIG;

export const getArticlesPageNum = (state: StateSchema) =>
    state.articlesPage?.page ?? 1;

export const getArticlesPageLimit = (state: StateSchema) =>
    state.articlesPage?.limit;

export const getArticlesPageHasMore = (state: StateSchema) =>
    state.articlesPage?.hasMore;

export const getArticlesPageInited = (state: StateSchema) =>
    state.articlesPage?._inited;
