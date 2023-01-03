import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleRaiting from './ArticleRaiting';

export default {
    title: 'features/ArticleRaiting',
    component: ArticleRaiting,
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                },
            },
        }),
    ],
} as ComponentMeta<typeof ArticleRaiting>;

const Template: ComponentStory<typeof ArticleRaiting> = (args) => <ArticleRaiting {...args} />;

export const WithRate = Template.bind({});
WithRate.args = {
    articleId: '1',
};
WithRate.parameters = {
    mockData: [
        {
            url: `${__API__}/article-raitings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 4,
                },
            ],
        },
    ],
};

export const WithoutRate = Template.bind({});
WithoutRate.args = {
    articleId: '1',
};
WithoutRate.parameters = {
    mockData: [
        {
            url: `${__API__}/article-raitings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
