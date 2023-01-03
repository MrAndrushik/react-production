import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StarRating } from './StarRating';

export default {
    title: 'shared/StarRating',
    component: StarRating,
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 30,
};
