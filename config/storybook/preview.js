import { addDecorator } from '@storybook/react';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider/index';
import { RouteDecorator } from '../../src/shared/config/storybook/RouteDecorator/RouteDecorator';

export const parameters = {
    action: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            data: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.DARK));
addDecorator(RouteDecorator);
