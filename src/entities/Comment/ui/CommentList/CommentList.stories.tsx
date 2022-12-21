import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/CommentList',
    component: CommentList,
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const Default = Template.bind({});
Default.args = {
    comments: [
        {
            id: '1',
            text: 'some comment 3',
            user: {
                id: '1',
                username: 'mrand',
                avatar: 'https://dgbijzg00pxv8.cloudfront.net/10148489-ca80-4911-b76a-878da46e1eba/000000-0000000002/15377113736242044468441686163017542525599537000685968960702751402001230352437/ITEM_PREVIEW1.jpeg',
            },
        },
        {
            id: '2',
            text: 'some comment 3',
            user: {
                id: '1',
                username: 'mrand',
                avatar: 'https://dgbijzg00pxv8.cloudfront.net/10148489-ca80-4911-b76a-878da46e1eba/000000-0000000002/15377113736242044468441686163017542525599537000685968960702751402001230352437/ITEM_PREVIEW1.jpeg',
            },
        },
        {
            id: '3',
            text: 'some 3',
            user: {
                id: '2',
                username: 'mrand',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiy-pcZfujBApRKxJaz6D_hZmPX_sKBjQdPBHJzYU&s',
            },
        },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
