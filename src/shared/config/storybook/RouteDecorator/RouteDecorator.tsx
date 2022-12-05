import { Story } from '@storybook/react';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouteDecorator = (StoryComponent: Story) => {
    return (
        <BrowserRouter>
            <Suspense fallback=''>
                <StoryComponent />
            </Suspense>
        </BrowserRouter>
    );
};
