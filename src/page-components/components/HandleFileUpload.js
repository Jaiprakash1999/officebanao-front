import React, { useRef } from "react";
import { IoMdAdd } from "react-icons/io";

const HandleFileUpload = ({
  onChange = () => {},
  showButton = true,
  className = "flex py-2 text-semibold text-base text-white bg-blue-700 items-center gap-2 px-3 border rounded",
}) => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <div onClick={handleClick}>
      <input
        type="file"
        className="hidden"
        accept="image/*"
        ref={inputRef}
        onChange={onChange}
      />
      {showButton ? (
        <button className={className}>
          <IoMdAdd />
          Add
        </button>
      ) : null}
    </div>
  );
};

export default HandleFileUpload;
