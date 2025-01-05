import React, { useState } from "react";

const Tooltip = ({
  content,
  contentWidth = "w-fit",
  placement = "top",
  children,
  arrow = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const placementStyles = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
  };

  const arrowStyles = {
    top: "top-full -mt-1 left-1/2 transform -translate-x-1/2 border-t-0 border-l-transparent border-r-transparent border-b-transparent",
    right:
      "right-full -mr-1 top-1/2 transform -translate-y-1/2 border-r-0 border-t-transparent border-b-transparent border-l-transparent",
    bottom:
      "bottom-full -mb-1 left-1/2 transform -translate-x-1/2 border-b-0 border-l-transparent border-r-transparent border-t-transparent",
    left: "left-full -ml-1 top-1/2 transform -translate-y-1/2 border-l-0 border-t-transparent border-b-transparent border-r-transparent",
  };

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}

      {isVisible && (
        <div
          className={`absolute ${contentWidth} z-50 px-2 py-1.5 bg-white text-[#6B7280] text-sm rounded shadow-lg ${placementStyles[placement]}`}
        >
          {content}

          {arrow && (
            <div
              className={`absolute w-2 h-2 bg-white transform rotate-45 ${arrowStyles[placement]}`}
            ></div>
          )}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
