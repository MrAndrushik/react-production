import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleBlockType } from 'entities/Article/model/types/article';
import { UserRole } from 'entities/User';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/Article/ArticlesPage',
    component: ArticlesPage,
    decorators: [
        StoreDecorator({
            articlesPage: {
                entities: {
                    1: {
                        id: '1',
                        title: 'Javascript news',
                        subtitle: 'Что нового в JS за 2022 год?',
                        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
                        views: 123,
                        createdAt: '26.02.2022',
                        blocks: [
                            {
                                id: '8',
                                type: ArticleBlockType.IMAGE,
                                src: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-tw.jpg?w=960&cbr=1&q=90&fit=max',
                                title: 'Рисунок 1 - скриншот сайта',
                            },
                            {
                                id: '9',
                                type: ArticleBlockType.TEXT,
                                title: 'Заголовок этого блока',
                                paragraphs: [
                                    'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                                ],
                            },
                        ],
                        user: {
                            id: '1',
                            username: 'admin',
                            role: [UserRole.ADMIN],
                            avatar: 'https://dgbijzg00pxv8.cloudfront.net/10148489-ca80-4911-b76a-878da46e1eba/000000-0000000002/15377113736242044468441686163017542525599537000685968960702751402001230352437/ITEM_PREVIEW1.jpeg',
                        },
                    },
                },
            },
        }),
    ],
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
    <ArticlesPage {...args} />
);

export const Default = Template.bind({});
Default.args = {};
