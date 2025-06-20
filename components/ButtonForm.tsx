import { RiArrowRightUpLine, RiCheckLine } from "react-icons/ri"; // ← agrega RiCheckLine
import React from "react";

interface ButtonFormProps {
  text: string;
  disabled?: boolean;
  success?: boolean; // ← nuevo prop
}

const ButtonForm: React.FC<ButtonFormProps> = ({
  text,
  disabled = false,
  success = false,
}) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`rounded-xl w-[210px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex items-center justify-between min-w-[200px] group transition-all bg-accent duration-300 ${
        disabled ? "bg-accent/60 cursor-not-allowed" : "bg-magenta/70"
      }`}
    >
      <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary text-sm uppercase transition-all duration-300">
        {text}
      </div>
      <div
        className={`w-11 h-11 bg-primary flex items-center justify-center rounded-xl transition-all duration-300 ${
          success ? "bg-green-500" : ""
        }`}
      >
        {success ? (
          <RiCheckLine className="text-white text-xl" />
        ) : (
          <RiArrowRightUpLine
            className={`text-white text-xl transition-all duration-200 ${
              disabled ? "" : "group-hover:rotate-45"
            }`}
          />
        )}
      </div>
    </button>
  );
};

export default ButtonForm;
