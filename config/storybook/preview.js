import { addDecorator } from '@storybook/react';
import { SuspenseDecorator } from 'shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider/index';
import { RouteDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export const parameters = {
    action: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            data: /Date$/,
        },
    },
};

addDecorator(RouteDecorator);
addDecorator(StyleDecorator);
addDecorator(SuspenseDecorator);
addDecorator(ThemeDecorator(Theme.DARK));
