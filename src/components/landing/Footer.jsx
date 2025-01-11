import { FaInstagram, FaLinkedin, FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 h-fit">
      <div className="lg:container lg:mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-9 md:gap-6">
          <div className="md:w-1/2">
            <h2 className="text-lg font-bold mb-2">Reckon IO</h2>
            <p className="text-sm">
              &copy; 2024 Reckon IO. All rights reserved.
            </p>
          </div>
          <div className="md:w-1/3 flex md:flex-row flex-col justify-between items-center">
            <div className="md:w-1/3">
              <p className="text-sm mb-2">+234 0 911 508 3790</p>
              <p className="text-sm">hello@reckonio.com</p>
            </div>

            <div className="md:w-1/3 hidden md:flex flex-col justify-center md:justify-end items-center gap-4">
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="text-white hover:text-gray-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-400 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-400 transition-colors"
                  aria-label="Email"
                >
                  <FaX />
                </a>
              </div>
              <span className="text-sm">Lagos, Nigeria</span>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-600"></div>

        <div className="mt-6 text-center">
          <p className="text-sm">
            Powered by <span className="font-bold text-white">thinktech</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
