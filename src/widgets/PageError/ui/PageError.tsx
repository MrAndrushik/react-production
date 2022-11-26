import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

const reloadPage = () => {
    location.reload();
};

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p className={cls.text}>{t('Произошла ошибка')}</p>
            <Button
                theme={ThemeButton.OUTLINE}
                className={cls.button}
                onClick={reloadPage}
            >
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
