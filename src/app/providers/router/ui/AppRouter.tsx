import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
    AppRoutesProps,
    routeConfig,
} from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { RequireAuth } from './RequireAuth';

export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth>
                            <>{route.element}</>
                        </RequireAuth>
                    ) : (
                        route.element
                    )
                }
            />
        );
    }, []);

    return (
        <div className='page-wrapper'>
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    {Object.values(routeConfig).map(renderWithWrapper)}
                </Routes>
            </Suspense>
        </div>
    );
};
