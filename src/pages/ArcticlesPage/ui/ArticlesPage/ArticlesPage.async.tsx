import { lazy } from 'react';

export const ArticlesPageAsync = lazy(
    async () =>
        await new Promise((resolve) => {
            // @ts-expect-error
            setTimeout(() => resolve(import('./ArticlesPage')), 500);
        })
);
