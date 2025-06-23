"use client";
import { RiArrowRightUpLine } from "react-icons/ri";

const ButtonDark = ({ text, targetId }) => {
  const scrollToSection = (element) => {
    const startPosition = window.scrollY;
    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000; // duración total en milisegundos
    let startTime = null;

    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutQuad(progress);
      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleClick = () => {
    const section = document.getElementById(targetId);
    if (section) {
      scrollToSection(section);
    }
  };
  return (
    <button
      onClick={handleClick}
      className="w-[150px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex items-center rounded-full justify-between min-w-[120px] group bg-primary"
    >
      <div className=" rounded-full flex-1 text-center tracking-[1.2px] font-primary font-bold text-accent text-sm uppercase">
        {text}
      </div>
      <div className="w-11 h-11 rounded-full flex items-center justify-center">
        <RiArrowRightUpLine className="text-accent text-xl group-hover:rotate-45 transition-all duration-200" />
      </div>
    </button>
  );
};

export default ButtonDark;
