import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './{{pascalCase}}.module.scss';
 
interface {{pascalCase}}Props {
    className?: string;
}

export const {{pascalCase}} = (props: {{pascalCase}}Props) => {
    const { className } = props;
    const { t } = useTranslation();
 
    return (
        <div className={classNames(cls.{{pascalCase}}, {}, [className])}>
 
        </div>
    );
};