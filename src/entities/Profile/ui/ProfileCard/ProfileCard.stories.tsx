import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'Андрей',
        lastname: 'Петров',
        age: 21,
        city: 'Moscow',
        currency: Currency.RUB,
        country: Country.Russia,
        username: 'mrandrushik',
        avatar: 'https://news.artnet.com/app/news-upload/2021/09/Yuga-Labs-Bored-Ape-Yacht-Club-4466.jpg',
    },
};

export const WithErrors = Template.bind({});
WithErrors.args = {
    error: 'errors',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
