import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../styles/const';
import popupCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropDownDirection;
    children: ReactNode;
}

export const Popover = (props: PopoverProps) => {
    const { className, direction = 'bottom right', trigger, children } = props;

    return (
        <HPopover
            className={classNames(cls.Popover, {}, [className, popupCls.popup])}
        >
            <HPopover.Button className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>
            <HPopover.Panel
                className={classNames(cls.panel, {}, [
                    mapDirectionClass[direction],
                ])}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
};
