import { lazy } from 'react';

const MainPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            //@ts-ignore
            setTimeout(() => resolve(import('./MainPage')), 500);
        })
);

export { MainPageAsync as MainPage };
