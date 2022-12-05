import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '../../../app/providers/ThemeProvider';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';

import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Both = Template.bind({});
Both.args = {
    title: 'Our special Title',
    text: 'asfasf sfa sosfksdfs sdfpskfksmdfoksmd',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Our special Title',
    text: 'asfasf sfa sosfksdfs sdfpskfksmdfoksmd',
    theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Our special Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'asfasf sfa sosfksdfs sdfpskfksmdfoksmd',
};

export const BothLight = Template.bind({});
BothLight.args = {
    title: 'Our special Title',
    text: 'asfasf sfa sosfksdfs sdfpskfksmdfoksmd',
};
BothLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OnlyTitleLight = Template.bind({});
OnlyTitleLight.args = {
    title: 'Our special Title',
};
OnlyTitleLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OnlyTextLight = Template.bind({});
OnlyTextLight.args = {
    text: 'asfasf sfa sosfksdfs sdfpskfksmdfoksmd',
};
OnlyTextLight.decorators = [ThemeDecorator(Theme.LIGHT)];
