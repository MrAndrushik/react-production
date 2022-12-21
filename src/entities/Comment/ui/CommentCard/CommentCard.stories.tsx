import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/CommentCard',
    component: CommentCard,
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
    comment: {
        id: '3',
        text: 'some comment 3',
        user: {
            id: '1',
            username: 'mrand',
            avatar: 'https://dgbijzg00pxv8.cloudfront.net/10148489-ca80-4911-b76a-878da46e1eba/000000-0000000002/15377113736242044468441686163017542525599537000685968960702751402001230352437/ITEM_PREVIEW1.jpeg',
        },
    },
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
