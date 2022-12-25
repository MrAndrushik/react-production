import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

export default {
    title: 'pages/Article/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => (
    <ArticleDetailsPageHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {};
