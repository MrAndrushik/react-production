import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { EditArticleComponent } from './EditArticleComponent';

export default {
    title: 'features/EditArticleComponent',
    component: EditArticleComponent,
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof EditArticleComponent>;

const Template: ComponentStory<typeof EditArticleComponent> = (args) => (
    <EditArticleComponent {...args} />
);

export const Default = Template.bind({});
Default.args = { id: '1' };
