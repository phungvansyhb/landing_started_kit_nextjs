import React, { useRef } from 'react'

type Props = {}

export const HambugerMenu = (props: Props) => {
    const menuIconRef = useRef<HTMLDivElement>(null)

    const handleMenuIconClick = () => {
        if (menuIconRef.current) {
            menuIconRef.current.classList.toggle('active');
            const childDivs = menuIconRef.current.querySelectorAll('div');
            childDivs.forEach((div) => div.classList.remove('no-animation'));
        }
    };

    return (
        <div className="menu-icon" ref={menuIconRef} onClick={handleMenuIconClick}>
            <div className="line-1 no-animation"></div>
            <div className="line-2 no-animation"></div>
            <div className="line-3 no-animation"></div>
        </div>
    )
}