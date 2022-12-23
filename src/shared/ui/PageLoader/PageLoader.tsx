import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { Page } from '../../../widgets/Page/Page';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
