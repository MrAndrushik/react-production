import { afterEach, beforeEach, cy, describe, it } from 'local-cypress';

let currentArticleId = '';

describe('Пользователь заходит на страницу articleDetails', () => {
    beforeEach(() => {
        cy.login('testuser', '123');
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`/articles/${currentArticleId}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it('Отображение статьи', () => {
        cy.getByTestId('ArticleDetails').should('exist');
    });
    it('Отображение списка рекомендаций', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it('Отправка комментария', () => {
        cy.getByTestId('ArticleDetails');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('exist');
    });
    it('Оценка статьи', () => {
        cy.getByTestId('ArticleDetails');
        cy.getByTestId('RaitingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
