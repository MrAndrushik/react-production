import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
    items: [
        { value: '1234', content: 'lorem ipsum' },
        { value: '1334', content: 'lorem ipsum' },
        { value: '1344', content: 'lorem ipsum', disabled: true },
        { value: '1354', content: 'lorem ipsum' },
    ],
    value: undefined,
    onChange: (value: string) => {},
    defaultValue: 'Выберите значение',
};
