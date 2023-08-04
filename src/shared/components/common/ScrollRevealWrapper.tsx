import React, { useRef, useEffect, FC, CSSProperties } from 'react';
import scrollReveal from 'scrollreveal';

interface Props {
  style?: CSSProperties;
  children: React.ReactNode;
  revealConfig?: object; 
}

const ScrollRevealWrapper: FC<Props> = ({ children, style, revealConfig }) => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (sectionRef.current) {
      scrollReveal().reveal(sectionRef.current, {
        reset: false,
        delay: 200,
        ...revealConfig,
      });
    }
  }, [revealConfig]);

  return (
    <section ref={sectionRef} style={style} data-testid='section'>
      {children}
    </section>
  );
};

export default ScrollRevealWrapper;
