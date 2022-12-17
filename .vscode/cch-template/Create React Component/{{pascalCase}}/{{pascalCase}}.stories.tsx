import { ComponentMeta, ComponentStory } from '@storybook/react';
import { {{pascalCase}} } from './{{pascalCase}}';

export default {
    title: 'shared/{{pascalCase}}',
    component: {{pascalCase}},
} as ComponentMeta<typeof {{pascalCase}}>;

const Template: ComponentStory<typeof {{pascalCase}}> = (args) => <{{pascalCase}} {...args} />;

export const Default = Template.bind({});
Default.args = {};