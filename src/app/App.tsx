import { AppRouter } from '@/app/providers/router';
import { useTheme } from '@/app/providers/ThemeProvider';
import { getUserInited, userActions } from '@/entities/User';
import { FC, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

export const App: FC = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div id='app' className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar />
                <div className={'content-page'}>
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};
