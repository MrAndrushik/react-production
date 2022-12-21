import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleView } from '../../model/types/article';
import { ArticleList } from './ArticleList';

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => (
    <ArticleList {...args} />
);

export const isLoadingBig = Template.bind({});
isLoadingBig.args = {
    isLoading: true,
    articles: [],
    view: ArticleView.BIG,
};

export const isLoadingSmall = Template.bind({});
isLoadingSmall.args = {
    isLoading: true,
    articles: [],
    view: ArticleView.SMALL,
};
