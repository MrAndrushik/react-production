import { Skeleton } from '@/shared/ui/Skeleton';
import { lazy, Suspense } from 'react';
import { ArticleRaitingProps } from './ArticleRaiting';

const ArticleRaitingLazy = lazy(async () => await import('./ArticleRaiting'));

export const ArticleRaitingAsync = (props: ArticleRaitingProps) => {
    return (
        <Suspense fallback={<Skeleton width='100%' height={120} />}>
            <ArticleRaitingLazy {...props} />
        </Suspense>
    );
};
