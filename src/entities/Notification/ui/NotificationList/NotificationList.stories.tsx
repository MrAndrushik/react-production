import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationList } from './NotificationList';

export default {
    title: 'entities/NotificationList',
    component: NotificationList,
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
    <NotificationList {...args} />
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Уведомление 1',
                    description: 'Произошло какое-то событие',
                    userId: '1',
                },
                {
                    id: '2',
                    title: 'Уведомление 2',
                    description: 'Произошло какое-то событие',
                    userId: '1',
                    href: 'http://localhost:3000/admin',
                },
                {
                    id: '3',
                    title: 'Уведомление 3',
                    description: 'Произошло какое-то событие',
                    userId: '1',
                    href: 'http://localhost:3000/admin',
                },
                {
                    id: '4',
                    title: 'Уведомление 4',
                    description: 'Произошло какое-то событие',
                    userId: '1',
                },
                {
                    id: '5',
                    title: 'Уведомление 1',
                    description: 'Произошло какое-то событие',
                    userId: '2',
                },
            ],
        },
    ],
};
