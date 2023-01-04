import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '@/shared/ui/Button';
import { Popover } from './Popover';

export default {
    title: 'shared/Popover',
    component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
    <Popover {...args} />
);

export const Default = Template.bind({});
Default.args = {
    trigger: <Button>++++++</Button>,
    children: <p>235523523602396023692</p>,
};
