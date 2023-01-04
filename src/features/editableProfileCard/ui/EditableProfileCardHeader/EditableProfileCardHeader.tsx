import { getUserAuthData } from '@/entities/User';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import cls from './EditableProfileCardHeader.module.scss';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo(
    (props: EditableProfileCardHeaderProps) => {
        const { className } = props;
        const { t } = useTranslation('profile');
        const authData = useSelector(getUserAuthData);
        const profileData = useSelector(getProfileData);
        const canEdit = authData?.id === profileData?.id;
        const readonly = useSelector(getProfileReadonly);
        const dispatch = useAppDispatch();

        const onEdit = useCallback(() => {
            dispatch(profileActions.setReadonly(false));
        }, [dispatch]);

        const onCancelEdit = useCallback(() => {
            dispatch(profileActions.cancelEdit());
        }, [dispatch]);

        const onSave = useCallback(() => {
            dispatch(updateProfileData());
        }, [dispatch]);

        return (
            <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
                <Text title={t('Профиль')} />
                {canEdit && (
                    <div className={cls.btnWrapper}>
                        {readonly ? (
                            <Button
                                className={classNames(cls.editBtn)}
                                theme={ThemeButton.OUTLINE}
                                onClick={onEdit}
                                data-testid={
                                    'EditableProfileCardHeader.EditBtn'
                                }
                            >
                                {t('Редактировать')}
                            </Button>
                        ) : (
                            <HStack gap='16'>
                                <Button
                                    className={classNames(cls.editBtn)}
                                    theme={ThemeButton.OUTLINE}
                                    onClick={onCancelEdit}
                                    data-testid={
                                        'EditableProfileCardHeader.CancelBtn'
                                    }
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    className={classNames(cls.editBtn)}
                                    theme={ThemeButton.OUTLINE_RED}
                                    onClick={onSave}
                                    data-testid={
                                        'EditableProfileCardHeader.SaveBtn'
                                    }
                                >
                                    {t('Сохранить')}
                                </Button>
                            </HStack>
                        )}
                    </div>
                )}
            </div>
        );
    }
);
