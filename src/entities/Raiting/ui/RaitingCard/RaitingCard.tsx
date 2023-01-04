import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RaitingCard.module.scss';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/Drawer';

interface RaitingCardProps {
    className?: string;
    title: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RaitingCard = memo((props: RaitingCardProps) => {
    const { className, title, feedbackTitle, hasFeedback, onCancel, onAccept, rate } = props;
    const { t } = useTranslation('raiting');

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate ?? 0);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
        (selectedStars: number) => {
            setStarsCount(selectedStars);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStars);
            }
        },
        [hasFeedback, onAccept]
    );

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const canceltHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <VStack max gap='32'>
            <Text title={feedbackTitle} />
            <Input value={feedback} onChange={setFeedback} placeholder={t('Ваш отзыв')} />
            <HStack gap='16' justify='end'>
                <Button onClick={canceltHandle} theme={ThemeButton.OUTLINE_RED}>
                    {t('Закрыть')}
                </Button>
                <Button onClick={acceptHandle} className={cls.sendBtn}>
                    {t('Отправить')}
                </Button>
            </HStack>
        </VStack>
    );

    return (
        <Card className={classNames('', {}, [className])}>
            <VStack align='center' gap='16'>
                <Text title={starsCount ? t('Спасибо!') : title} />
                <StarRating selectedStars={starsCount} size={30} onSelect={onSelectStars} />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    {modalContent}
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer onClose={canceltHandle} isOpen={isModalOpen} lazy>
                    {modalContent}
                </Drawer>
            </MobileView>
        </Card>
    );
});
