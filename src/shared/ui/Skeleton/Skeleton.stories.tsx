import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
    <Skeleton {...args} />
);

export const Default = Template.bind({});
Default.args = {
    width: '100%',
    height: '200px',
};

export const Circle = Template.bind({});
Circle.args = {
    border: '50%',
    width: '100px',
    height: '100px',
};

export const DefaultLight = Template.bind({});
DefaultLight.args = {
    width: '100%',
    height: '200px',
};
DefaultLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const CircleLight = Template.bind({});
CircleLight.args = {
    border: '50%',
    width: '100px',
    height: '100px',
};
CircleLight.decorators = [ThemeDecorator(Theme.LIGHT)];
