import { lazy } from 'react';

export const ArticlesDetailsPageAsync = lazy(
    async () => await import('./ArticleDetailsPage')
);
