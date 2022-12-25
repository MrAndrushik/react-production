import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EditArticleComponent } from './EditArticleComponent';

export default {
    title: 'features/EditArticleComponent',
    component: EditArticleComponent,
} as ComponentMeta<typeof EditArticleComponent>;

const Template: ComponentStory<typeof EditArticleComponent> = (args) => (
    <EditArticleComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {};
