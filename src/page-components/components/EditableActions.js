import React from "react";
import Tooltip from "../common-components/Tooltip";
import { FiCrop, FiRotateCw } from "react-icons/fi";
import { RiFlipHorizontalFill, RiFlipVerticalLine } from "react-icons/ri";
import { MdFindReplace } from "react-icons/md";

const EditableActions = ({
  performAction = () => {},
  handleReplaceImage = () => {},
}) => {
  return (
    <div className=" flex bg-gray-800 rounded rounded-t-none items-center text-white flex-col flex-shrink-0 justify-end">
      <Tooltip content="Crop" placement="left">
        <button onClick={() => performAction("crop")} className="p-2">
          <FiCrop size={20} />
        </button>
      </Tooltip>
      <Tooltip content="Rotate" placement="left">
        <button onClick={() => performAction("rotate")} className="p-2">
          <FiRotateCw size={20} />
        </button>
      </Tooltip>
      <Tooltip content="Flip Horizontal" contentWidth="w-28" placement="left">
        <button
          onClick={() => performAction("flip-horizontal")}
          className="p-2"
        >
          <RiFlipHorizontalFill size={20} />
        </button>
      </Tooltip>
      <Tooltip contentWidth="w-24" content="Flip Vertical" placement="left">
        <button onClick={() => performAction("flip-vertical")} className="p-2">
          <RiFlipVerticalLine size={20} />
        </button>
      </Tooltip>
      <Tooltip content="Replace" placement="left">
        <button onClick={() => performAction("replace")} className="p-2">
          <MdFindReplace size={20} />
        </button>
        <input
          id="replace-input"
          type="file"
          accept="image/*"
          onChange={handleReplaceImage}
          className="hidden"
        />
      </Tooltip>
    </div>
  );
};

export default EditableActions;
