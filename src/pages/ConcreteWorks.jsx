import { useState, useRef, useEffect } from "react";
import ImageUpload from "@/assets/Image/upload-02.png";

const ConcreteWorks = () => {
  const [image, setImage] = useState(null);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });

  // Effect to load the image from localStorage on component mount
  useEffect(() => {
    const storedImage = localStorage.getItem("uploadedImage");
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          imageRef.current = img;
          const canvas = canvasRef.current;
          if (canvas) {
            canvas.width = canvas.offsetWidth;
            canvas.height = (img.height / img.width) * canvas.offsetWidth;
            const imageDataUrl = event.target.result;
            setImage(imageDataUrl); // Store the image data URL in state
            localStorage.setItem("uploadedImage", imageDataUrl); // Store it in localStorage
            setZoom(1);
            setPan({ x: 0, y: 0 });
          }
        };
        img.src = event.target.result; // Set img src to the result from FileReader
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="border-r flex-grow">
        <div className="flex border-b p-4 items-center justify-between">
          <p className="font-semibold">Building Plan</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
            id="fileInput"
          />
          <label
            htmlFor="fileInput"
            className="cursor-pointer flex gap-3 w-[180px] h-10 border items-center justify-center rounded-xl font-medium text-[#777777]"
          >
            Upload Building Image
            <img src={ImageUpload} alt="upload icon" width={12} />
          </label>
        </div>
      </div>
      <div>
        {image ? (
          <img
            src={image}
            alt="uploaded building"
            style={{ cursor: "pointer", display: "block" }}
          />
        ) : (
          <p>No image uploaded yet.</p>
        )}
      </div>
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>{" "}
      {/* Optional: hide canvas if not in use */}
      <button
        onClick={() => {
          setCalibrationMode(true);
          setCalibrationPoints([]);
        }}
        className="px-4 py-2 bg-secondary text-white rounded hover:bg-"
      >
        Calibrate
      </button>
    </div>
  );
};

export default ConcreteWorks;
