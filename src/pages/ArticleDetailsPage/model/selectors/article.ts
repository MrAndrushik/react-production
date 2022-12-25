import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsData } from 'entities/Article';
import { getUserAuthData } from 'entities/User';

export const getCanEditArticle = createSelector(
    getArticleDetailsData,
    getUserAuthData,
    (article, user) => {
        if (!article || !user) {
            return false;
        }

        console.log('article', article);
        console.log('user', user);

        return article.user.id === user.id;
    }
);
