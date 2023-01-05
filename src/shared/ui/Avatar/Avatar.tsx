import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import { Skeleton } from '../Skeleton';
import { useTranslation } from 'react-i18next';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({ className, src, size, alt }: AvatarProps) => {
    const { t } = useTranslation();
    const styles = useMemo<CSSProperties>(
        () => ({
            width: size ?? 100,
            height: size ?? 100,
        }),
        [size]
    );

    const errorFalback = (
        <div style={{ width: `${size ?? 100}px`, height: `${size ?? 100}px` }} className={cls.errorFallback}>
            {t('error')}
        </div>
    );

    return (
        <AppImage
            fallback={<Skeleton width={size ?? 100} height={size ?? 100} border='50%' />}
            errorFallback={errorFalback}
            alt={alt}
            style={styles}
            src={src}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
};
