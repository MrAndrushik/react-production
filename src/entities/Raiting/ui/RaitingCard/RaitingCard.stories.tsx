import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RaitingCard } from './RaitingCard';

export default {
    title: 'shared/RaitingCard',
    component: RaitingCard,
} as ComponentMeta<typeof RaitingCard>;

const Template: ComponentStory<typeof RaitingCard> = (args) => <RaitingCard {...args} />;

export const Default = Template.bind({});
Default.args = {};