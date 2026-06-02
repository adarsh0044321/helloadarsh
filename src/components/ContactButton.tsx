import React from "react";

interface ContactButtonProps {
  className?: string;
  onClick?: () => void;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  className = "",
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    // Default action: scroll to contact/email link
    window.location.href = "mailto:adarshkumarsingh004@gmail.com";
  };

  return (
    <button
      onClick={handleClick}
      className={`rounded-full relative font-medium uppercase tracking-widest text-white transition-transform hover:scale-105 active:scale-95 cursor-pointer ${className}`}
      style={{
        background:
          "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow:
          "0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1",
        outline: "2px solid #FFFFFF",
        outlineOffset: "-3px",
      }}
    >
      Contact Me
    </button>
  );
};
