import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleRaiting from './ArticleRaiting';

export default {
    title: 'shared/ArticleRaiting',
    component: ArticleRaiting,
} as ComponentMeta<typeof ArticleRaiting>;

const Template: ComponentStory<typeof ArticleRaiting> = (args) => <ArticleRaiting {...args} />;

export const Default = Template.bind({});
Default.args = {};
