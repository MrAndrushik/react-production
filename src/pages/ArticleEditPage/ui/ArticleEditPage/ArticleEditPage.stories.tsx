import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleEditPage from './ArticleEditPage';

export default {
    title: 'shared/ArticleEditPage',
    component: ArticleEditPage,
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => (
    <ArticleEditPage {...args} />
);

export const Default = Template.bind({});
Default.args = {};
