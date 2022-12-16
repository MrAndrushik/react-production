import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Avatar } from './Avatar';
import avatar from 'shared/assets/icons/avatar.jpeg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: avatar,
    size: 200,
};
