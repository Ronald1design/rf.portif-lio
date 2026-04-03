import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const mousePos = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        const offset = isHovering ? 8 : 5;
        cursorRef.current.style.transform = `translate(${e.clientX - offset}px, ${e.clientY - offset}px)`;
      }
    };

    document.addEventListener('mousemove', onMouseMove);

    let animationFrameId: number;
    const animateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.13;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.13;
      
      if (ringRef.current) {
        const offset = isHovering ? 26 : 18;
        ringRef.current.style.transform = `translate(${ringPos.current.x - offset}px, ${ringPos.current.y - offset}px)`;
      }
      animationFrameId = requestAnimationFrame(animateRing);
    };
    animateRing();

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .bento-card, .skill-chip, .contact-row, .project-card, input, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovering]);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] top-0 left-0 rounded-full transition-[width,height,background-color] duration-200 will-change-transform ${
          isHovering ? 'w-4 h-4 bg-accent' : 'w-2.5 h-2.5 bg-accent'
        }`}
      />
      <div
        ref={ringRef}
        className={`fixed pointer-events-none z-[9998] top-0 left-0 rounded-full border-[1.5px] border-accent transition-[width,height,opacity] duration-200 will-change-transform ${
          isHovering ? 'w-[52px] h-[52px] opacity-30' : 'w-[36px] h-[36px] opacity-50'
        }`}
      />
    </>
  );
}
