import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
    async () =>
        await new Promise((resolve) => {
            setTimeout(() => resolve(import('./AddCommentForm')), 500);
        })
);
