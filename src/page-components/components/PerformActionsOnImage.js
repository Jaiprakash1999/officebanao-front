import React, { useRef, useState } from "react";
import Drawer from "../common-components/Drawer";
import { FiUpload } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { Cropper } from "react-cropper";
import { MdOutlineEdit } from "react-icons/md";
import EditableActions from "./EditableActions";
import { toast } from "react-toastify";

const PerformActionsOnImage = ({
  setIsDrawerOpen = () => {},
  handleReplaceImage = () => {},
  setAssetsList = () => {},
  selectedImage = null,
  setSelectedImage = () => {},
}) => {
  const [isEditable, setIsEditable] = useState(false);

  const cropperRef = useRef(null);
  const performAction = (action) => {
    const cropper = cropperRef.current.cropper;
    if (!cropper) return;

    switch (action) {
      case "crop":
        const croppedImage = cropper.getCroppedCanvas().toDataURL();
        setSelectedImage(croppedImage);
        break;
      case "rotate":
        cropper.rotate(90);
        break;
      case "flip-horizontal":
        cropper.scaleX(cropper.getData().scaleX === 1 ? -1 : 1);
        break;
      case "flip-vertical":
        cropper.scaleY(cropper.getData().scaleY === 1 ? -1 : 1);
        break;
      case "replace":
        document.getElementById("replace-input").click();
        break;
      default:
        break;
    }
  };

  const saveImage = () => {
    setAssetsList((prev) => [...prev, selectedImage]);
    setSelectedImage(null);
    setIsDrawerOpen(false);
    setIsEditable(false);
    toast.success("asset added");
  };

  return (
    <div>
      <Drawer drawerWidth="w-1/2">
        <div className="flex -mt-2 items-center justify-between">
          <h2 className="text-lg text-gray-600 mb-4 font-semibold">
            Add Asset
          </h2>
          <button className="-mt-2" onClick={() => setIsDrawerOpen(false)}>
            <RxCross2 size={25} color="#6B7280" />
          </button>
        </div>
        <div className=" relative">
          <Cropper
            src={selectedImage}
            style={{ height: 600, width: "100%" }}
            guides={false}
            ref={cropperRef}
          />
          <div className=" absolute top-3 right-3">
            <button
              className={`bg-gray-800 rounded ${
                isEditable ? "rounded-b-none" : ""
              } text-white p-2`}
              onClick={() => setIsEditable((prev) => !prev)}
            >
              {isEditable ? (
                <RxCross2 size={20} />
              ) : (
                <MdOutlineEdit size={20} />
              )}
            </button>
            {isEditable ? (
              <EditableActions
                handleReplaceImage={handleReplaceImage}
                performAction={performAction}
              />
            ) : null}
          </div>
        </div>

        <div className="flex justify-end mt-4 text-base">
          <button
            onClick={saveImage}
            className="bg-blue-500 flex items-center gap-2 text-white px-4 py-2 rounded"
          >
            <FiUpload /> Upload Image
          </button>
        </div>
      </Drawer>
    </div>
  );
};

export default PerformActionsOnImage;
