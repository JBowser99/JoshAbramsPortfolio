import React, { useState, useEffect } from "react";
import { SectionWrapper } from "../utils";
import { FaGithub, FaSearchPlus, FaArrowLeft, FaArrowRight, FaHome } from "react-icons/fa";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/image8.jpg";
import image9 from "../../assets/image9.jpg";
import image10 from "../../assets/image10.jpg";
import image11 from "../../assets/image11.jpg";
import image12 from "../../assets/image12.jpg";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});

  const images = [
    { src: image1, title: "Login Screen", description: "Regular login screen with role base authentication setup to safely route regular users to point A and admin users to point B, for admin only functions." },
    { src: image2, title: "Signup Screen", description: "Every user signs up the same way and gets directed to the dashboard screen, where user can interact with the applications secure storage" },
    { src: image3, title: "Dashboard Screen", description: "Here users can upload files or photos into the application and store it securley and persistantly in the applications self storage feature. On the other hand users have the option to send their data to a coldline non-public GCP Bucket for a more secure environment. Its a offsite storage soultion that users can retrive anytime from the bucket."},
    { src: image4, title: "Dashboard Screen", description: "Here you can see the user uploaded a screenshot into the applications persistante self storage " },
    { src: image5, title: "Dashboard Screen", description: "Here the user has sent the data they uploaded into the application self storage and sent it to the GCP bucket for a secure storage offsite from the public application." },
    { src: image6, title: "GCP Bucket Environment", description: "You can now see the screenshot the user sent to the GCP bucket and it is safely stored in real time persistantly." },
    { src: image7, title: "Firebase Storage Environment", description: "Since the user has sent the data they uploaded to the GCP bucket, any data sent to the bucket gets removed from the applications in real time. The data is removed from the frontend and backend so its fully offsite from the applications storage." },
    { src: image8, title: "Cloud Firestore Environment", description: "When a user sends any data to the gcp bucket the application stores a database collection of each file or files. This is so the application can show each user what data they have stored in the GCP bucket in real time, fetching from firebase database. This collection also allows the application to retreive this data at any time due to a collection or refrence stored securly in the backend." },
    { src: image9, title: "GCP Bucket Environment", description: "The user has decided to retrive the screenschot they sent to the GCP bucket and get it back into the application to use from there. Here you can see the bucket is now empty and the data removed." },
    { src: image10, title: "Firebase Storage Environment", description: "The screenshot is properly being stored persistantly in real time now in the applications self storage." },
    { src: image11, title: "Dashboard Screen", description: "Here you can see the screenshot moved back into the applications storage section." },
    { src: image12, title: "Admin Screen", description: "Lastly this is where all signed up user accounts will be be displayed. Once the admin logs in the backend fetches emails that where used to sign up users. Using admin sdk cloud functions the application is ready for special role based acess. Once an admin is created they can click the three dots to delete the user, update passwords, or just temporarily or forever disable a uses account from being able to login." },
  ];

  const preloadImage = (src) => {
    if (!loadedImages[src]) {
      const img = new Image();
      img.src = src;
      img.onload = () => setLoadedImages((prev) => ({ ...prev, [src]: true }));
    }
  };

  const handleSlideChange = (newIndex) => {
    preloadImage(images[newIndex].src);
    setCurrentIndex(newIndex);
  };

  const goToHomeSlide = () => {
    handleSlideChange(0);
  };

  useEffect(() => {
    const handleResize = () => setIsZoomed(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

return (
  <section className="relative z-0 mt-20 bg-sky-200/20 border border-slate-500 rounded-2xl backdrop-blur-xl flex flex-col overflow-hidden">
    <div>
      <h2 className="mt-2 text-4xl font-extrabold text-center text-white uppercase tracking-wider">
        First Project
      </h2>
      <h2 className="my-2 text-2xl font-semibold text-center text-white">
        Double Edge Storage
      </h2>
    </div>
      {/* Project Display */}
      <div
        className={`relative bg-slate-950/30 border border-slate-950/20 rounded-2xl mx-4 flex flex-col items-center ${
          isZoomed ? "cursor-pointer" : ""
        }`}
        onClick={() => isZoomed && setIsZoomed(false)}
      >
        <div className="relative w-full flex flex-col items-center transition-all duration-300">
          
{/* Image Wrapper */}
<div className="relative flex justify-center items-center overflow-hidden p-0.5">
  <img
    src={images[currentIndex].src}
    alt={images[currentIndex].title}
    className="w-full max-w-[100vw] max-h-[70vh] border border-white/60 rounded-xl object-fit"
    style={{
      transform: isZoomed ? "scale(1.2)" : "scale(1)", // Slight zoom (1.2x)
      transition: "transform 0.4s ease-in-out",
    }}
  />
</div>


{/* Modern Progress Bar */}
<div className="relative w-[50vw] max-w-4xl mx-auto my-2 border border-slate-950/20 rounded-xl">
  <div className="w-full h-2 bg-slate-950/10 rounded-full overflow-hidden">
    <div
      className="h-2 bg-blue-500 transition-all duration-300"
      style={{
        width: `${(currentIndex / (images.length - 1)) * 100}%`
      }}
    >
    </div>
  </div>
</div>

          {/* Button Layout */}
          <div className="hidden md:flex flex-col absolute mt-[8vh] right-0 gap-4 bg-gray-900/60 backdrop-blur-md py-2 px-4 rounded-lg shadow-lg">
            {currentIndex > 0 && (
              <>
                <button
                  onClick={goToHomeSlide}
                  className="p-2 sm:p-3 bg-gray-800/70 text-gray-300 rounded-full hover:bg-gray-700 transition"
                >
                  <FaHome className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <button
                  onClick={() => handleSlideChange(currentIndex - 1)}
                  className="p-2 sm:p-3 bg-gray-800/70 text-gray-300 rounded-full hover:bg-gray-700 transition"
                >
                  <FaArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </>
            )}
            {currentIndex < images.length - 1 && (
              <button
                onClick={() => handleSlideChange(currentIndex + 1)}
                className="p-2 sm:p-3 bg-gray-800/70 text-gray-300 rounded-full hover:bg-gray-700 transition"
              >
                <FaArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            )}
            <button
              onClick={() => setIsZoomed((prev) => !prev)}
              className="p-2 sm:p-3 bg-gray-800/70 text-gray-300 rounded-full hover:bg-gray-700 transition"
            >
              <FaSearchPlus className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Button Layout */}
        <div className="flex md:hidden justify-center gap-4 bg-gray-900/60 backdrop-blur-md px-4 rounded-lg shadow-lg">
          {currentIndex > 0 && (
            <>
              <button
                onClick={goToHomeSlide}
                className="p-2 bg-gray-800/70 text-gray-300 rounded-full hover:bg-gray-700 transition"
              >
                <FaHome className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleSlideChange(currentIndex - 1)}
                className="p-2 bg-gray-800/70 text-gray-300 rounded-full hover:bg-gray-700 transition"
              >
                <FaArrowLeft className="h-5 w-5" />
              </button>
            </>
          )}
          {currentIndex < images.length - 1 && (
            <button
              onClick={() => handleSlideChange(currentIndex + 1)}
              className="p-2 bg-gray-800/70 text-gray-300 rounded-full hover:bg-gray-700 transition"
            >
              <FaArrowRight className="h-5 w-5" />
            </button>
          )}
          <button
            onClick={() => setIsZoomed((prev) => !prev)}
            className="p-2 bg-gray-800/70 text-gray-300 rounded-full hover:bg-gray-700 transition"
          >
            <FaSearchPlus className="h-5 w-5" />
          </button>
        </div>

        {/* Image Title and Description */}
        <div className="text-center text-white mt-2 m-4 p-2 shadow-black/40 shadow-md rounded-2xl border-2 border-white/5">
          <h3 className="text-lg font-bold">{images[currentIndex].title}</h3>
          <p className="text-gray-300 text-sm">{images[currentIndex].description}</p>
        </div>
      </div>

      {/* Project Summary */}
      <div className="bg-slate-950/30 border border-slate-950/20 rounded-xl flex flex-col sm:p-6 lg:p-8 mx-4 mt-2">
        <div className="text-center text-white m-4 p-2 shadow-black/40 shadow-md rounded-2xl border-2 border-white/5">
          <h3 className="text-xl font-bold text-white">Project Summary</h3>
          <p className="text-gray-300">
            A modern React + Firebase application featuring secure authentication, GCP Coldline bucket integration, and an admin control dashboard. The dual-layer storage system provides real-time, in-app file management while also enabling seamless transfer of files to a secure Coldline bucket for off-site, long-term storage. This architecture enhances data durability and security by isolating off-site storage from the primary application environment. Used Terraform for a secure infrastructure as code tool to deploy the coldline GCP bucket in google cloud products.
          </p>
        </div>
      </div>

      {/* GitHub Link */}
      <div className="flex justify-center mt-4 mb-4">
        <a
          href="https://github.com/JBowser99/DoubleEdgeStorage/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-white font-bold bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-full hover:from-purple-500 hover:to-blue-500 transition"
        >
          <FaGithub size={24} />
          <span>View on GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Projects, "projects");
