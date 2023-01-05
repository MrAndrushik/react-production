import { Counter } from '@/entities/Counter';
import { Page } from '@/widgets/Page';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <Page>
            <div>{t('Главная страница')}</div>
            <Counter />
        </Page>
    );
};

export default MainPage;
