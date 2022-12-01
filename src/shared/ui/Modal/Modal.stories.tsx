import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    isOpen: true,
    portalElement: document.body,
    children:
        'lorem20, lorem50lorem20, lorem50lorem20, lorem50lorem20, lorem50 lorem20, lorem50 lorem20, lorem50',
};
