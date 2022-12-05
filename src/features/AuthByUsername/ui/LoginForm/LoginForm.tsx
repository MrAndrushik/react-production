import { loginActions } from '../../model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(function LoginForm({
    className,
}: LoginFormProps) {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password, isLoading, error } = useSelector(getLoginState);

    const onChangeUsername = useCallback(
        function onChangeEmail(value: string) {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );

    const onChangePassword = useCallback(
        function onChangeEmail(value: string) {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && (
                <Text text={t('User not found')} theme={TextTheme.ERROR} />
            )}
            <Input
                onChange={onChangeUsername}
                autoFocused={true}
                placeholder='email'
                type='text'
                value={username}
            />
            <Input
                onChange={onChangePassword}
                placeholder='password'
                type='text'
                value={password}
            />
            <Button
                disabled={isLoading}
                onClick={onLoginClick}
                className={cls.btn}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
