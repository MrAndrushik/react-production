import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { Text, TextTheme } from '@/shared/ui/Text';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency?: Currency) => void;
    onChangeCountry?: (country?: Country) => void;
    readOnly?: boolean;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    const {
        className,
        data,
        error,
        isLoading,
        onChangeFirstname,
        onChangeLastname,
        onChangeCity,
        onChangeAge,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
        readOnly,
    } = props;

    if (isLoading) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.error,
                ])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошбка при загрузке профиля')}
                    text={t('Обновите страницу')}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} alt='avatar' />
                    </div>
                )}
                <Input
                    onChange={onChangeFirstname}
                    placeholder={t('Ваше имя')}
                    value={data?.first}
                    readOnly={readOnly}
                    data-testid={'ProfileCard.First'}
                />
                <Input
                    onChange={onChangeLastname}
                    placeholder={t('Ваше фамилия')}
                    value={data?.lastname}
                    readOnly={readOnly}
                    data-testid={'ProfileCard.Second'}
                />
                <Input
                    onChange={onChangeAge}
                    placeholder={t('Ваше возраст')}
                    value={data?.age}
                    readOnly={readOnly}
                />
                <Input
                    onChange={onChangeCity}
                    placeholder={t('Город')}
                    value={data?.city}
                    readOnly={readOnly}
                />
                <Input
                    onChange={onChangeUsername}
                    placeholder={t('Имя пользователя')}
                    value={data?.username}
                    readOnly={readOnly}
                />
                <Input
                    onChange={onChangeAvatar}
                    placeholder={t('Аватар')}
                    value={data?.avatar}
                    readOnly={readOnly}
                />
                <CurrencySelect
                    className={cls.select}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readOnly}
                />
                <CountrySelect
                    className={cls.select}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readOnly}
                />
            </div>
        </div>
    );
};
