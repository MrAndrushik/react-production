/* eslint-disable */
import { Article } from '../../../src/entities/Article';
import { cy } from 'local-cypress';

const defaultArticle = {
    title: 'Python news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '4',
    type: ['SCIENCE'],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    return cy
        .request({
            method: 'POST',
            url: `http://localhost:8000/articles`,
            headers: { Authorization: 'asd' },
            body: article ?? defaultArticle,
        })
        .then((res) => res.body);
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'asd' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
