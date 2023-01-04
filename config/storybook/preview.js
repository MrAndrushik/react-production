import { addDecorator } from '@storybook/react';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { RouteDecorator } from '../../src/shared/config/storybook/RouteDecorator/RouteDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/shared/const/theme';

export const parameters = {
    action: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            data: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: {
        default: 'dark',
        list: [
            { name: 'dark', class: Theme.DARK, color: '#00aced' },
            { name: 'light', class: Theme.LIGHT, color: '#3b5998' },
        ],
    },
};

addDecorator(RouteDecorator);
addDecorator(StyleDecorator);
addDecorator(SuspenseDecorator);
addDecorator(ThemeDecorator(Theme.DARK));
