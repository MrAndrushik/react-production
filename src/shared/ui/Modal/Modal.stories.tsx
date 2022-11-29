import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
    isOpen: true,
    children:
        'lorem20, lorem50lorem20, lorem50lorem20, lorem50lorem20, lorem50 lorem20, lorem50 lorem20, lorem50',
};
