import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
const ForbiddenPage = () => {
    const { t } = useTranslation('admin');

    return <Page>{t('У вас нет прав')}</Page>;
};

export default ForbiddenPage;
