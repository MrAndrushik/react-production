import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleInfiniteList } from './ArticleInfiniteList';

export default {
    title: 'pages/Article/ArticleInfiniteList',
    component: ArticleInfiniteList,
} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => (
    <ArticleInfiniteList {...args} />
);

export const Default = Template.bind({});
Default.args = {};
