import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlePageFilters } from './ArticlePageFilters';

export default {
    title: 'pages/Article/ArticlePageFilters',
    component: ArticlePageFilters,
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticlePageFilters>;

const Template: ComponentStory<typeof ArticlePageFilters> = (args) => (
    <ArticlePageFilters {...args} />
);

export const Default = Template.bind({});
Default.args = {};
