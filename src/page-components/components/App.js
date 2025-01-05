import { useState } from "react";
import "cropperjs/dist/cropper.css";
import Masonry from "react-masonry-css";
import "./app.css";
import HandleFileUpload from "./HandleFileUpload";
import { IoSearchSharp } from "react-icons/io5";
import { LuArrowDownUp } from "react-icons/lu";
import PerformActionsOnImage from "./PerformActionsOnImage";
import { ToastContainer } from "react-toastify";

function App() {
  const [assetsList, setAssetsList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
        setIsDrawerOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="text-sm ">
      <ToastContainer />
      <div className="flex w-full fixed z-50 bg-white p-3 border-b justify-between">
        <div className="flex w-full">
          <div className="relative w-1/2 me-4">
            <input
              type="search"
              placeholder="Type to search ..."
              className="border w-full ps-8 outline-none pe-2 py-2.5 rounded"
            />
            <IoSearchSharp
              size={20}
              color="#6B7280"
              className="absolute bottom-2.5 left-2"
            />
          </div>
          <button className="text-[#6B7280] flex gap-2 rounded border items-center px-3 py-2">
            Newest First <LuArrowDownUp />
          </button>
        </div>
        <HandleFileUpload onChange={handleInputChange} />
      </div>

      {isDrawerOpen && (
        <PerformActionsOnImage
          setIsDrawerOpen={setIsDrawerOpen}
          handleReplaceImage={handleInputChange}
          setAssetsList={setAssetsList}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
      <Masonry
        breakpointCols={{ default: 3, 768: 2, 500: 1 }}
        className="my-masonry-grid pt-20 px-3"
        columnClassName="my-masonry-grid_column"
      >
        {assetsList.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Uploaded ${index}`}
            className="mb-4 rounded"
          />
        ))}
      </Masonry>
    </div>
  );
}

export default App;
