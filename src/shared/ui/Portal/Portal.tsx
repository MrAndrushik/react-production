import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal = ({
    children,
    element = document.getElementById('app') as HTMLElement,
}: PortalProps) => {
    return createPortal(children, element);
};
