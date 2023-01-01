import { DropDownDirection } from '../../../types/ui';
import cls from './popup.module.scss';

export const mapDirectionClass: Record<DropDownDirection, string> = {
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft,
    'bottom right': cls.optionsBottomRight,
    'bottom left': cls.optionsBottomLeft,
};
