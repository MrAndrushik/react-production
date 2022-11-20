import { Suspense, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import '../styles/index.scss';
import { classNames } from './helpers/classNames/classNames';
import { AboutPage } from './pages/AboutPage/AboutPage.async';
import { MainPage } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Тема</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};
