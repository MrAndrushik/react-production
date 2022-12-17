import { lazy } from 'react';

export const ArticlesDetailsPageAsync = lazy(
    async () =>
        await new Promise((resolve) => {
            // @ts-expect-error
            setTimeout(() => resolve(import('./ArticleDetailsPage')), 500);
        })
);
