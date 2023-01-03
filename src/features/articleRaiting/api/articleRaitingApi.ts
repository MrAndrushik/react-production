import { Raiting } from '@/entities/Raiting';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetArticleRaitingArg {
    userId: string;
    articleId: string;
}

interface RateArticleArg {
    userId: string;
    articleId: string;
    rate: number;
    feedback?: string;
}

const articleRaitingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRaiting: build.query<Raiting[], GetArticleRaitingArg>({
            query: ({ articleId, userId }) => ({
                url: '/article-raitings',
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        rateArticle: build.mutation<void, RateArticleArg>({
            query: (arg) => ({
                url: '/article-raitings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const useGetArticleRaiting = articleRaitingApi.useGetArticleRaitingQuery;
export const userRateArticle = articleRaitingApi.useRateArticleMutation;
