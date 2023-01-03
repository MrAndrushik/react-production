import { Page } from '@/widgets/Page';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <Page>
            <div>{t('Главная страница')}</div>
        </Page>
    );
};

export default MainPage;
