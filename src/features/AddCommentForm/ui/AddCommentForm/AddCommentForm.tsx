import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCoomentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch]
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text ?? '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div data-testid='AddCommentForm' className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    data-testid='AddCommentForm.Input'
                    className={cls.input}
                    value={text}
                    onChange={onCommentTextChange}
                    placeholder={t('Введите текст комментария')}
                />
                <Button data-testid='AddCommentForm.Button' onClick={onSendHandler}>
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
