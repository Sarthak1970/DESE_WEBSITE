import DeseLogo from "../assets/DeseLogo.svg"

const Footer = () => {
  return (
    <footer className="bg-[#030418] border-t border-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Quick Links */}
        <div className="bg-[#0a0b2e]/80 p-4 sm:p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
          <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 mb-3 sm:mb-4 text-center sm:text-left">Quick Links</h3>
          <ul className="space-y-2 text-center sm:text-left">
            <li>
              <a
                href="#research"
                className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
              >
                Research
              </a>
            </li>
            <li>
              <a
                href="#event-highlights"
                className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#schedule"
                className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
              >
                Schedule
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
              >
                Admissions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="bg-[#0a0b2e]/80 p-4 sm:p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
          <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 mb-3 sm:mb-4 text-center sm:text-left">Contact Us</h3>
          <div className="mt-4">
            <img 
              src={DeseLogo} 
              alt="Logo" 
              className="mx-auto h-12 sm:h-16 transition-all duration-300 hover:scale-110 hover:brightness-125"
              style={{
                filter: "brightness(0) invert(1)",
              }}
            />
          </div>
          <ul className="text-gray-300 space-y-3 mt-4 text-sm sm:text-base">
            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
              <i className="ri-map-pin-line text-blue-400 mt-1"></i>
              <span className="text-center sm:text-left">
                Department of Electronic Systems Engineering, Indian Institute
                of Science, Bangalore-560012
              </span>
            </li>
            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
              <i className="ri-phone-line text-blue-400 mt-1"></i>
              <div className="text-center sm:text-left">
                <div>Phone: +91-80-2360 0810</div>
                <div>+91-80-2293 2246</div>
                <div>Fax: +91-80-2293 2290</div>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
              <i className="ri-mail-line text-blue-400 mt-1"></i>
              <span>office@dese.iisc.ernet.in</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="bg-[#0a0b2e]/80 p-4 sm:p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
          <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 mb-3 sm:mb-4 text-center sm:text-left">Follow Us</h3>
          <div className="flex justify-center sm:justify-start gap-6">
            <a
              href="https://www.facebook.com/share/14oVQcUGjD/"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <i className="ri-facebook-fill text-xl sm:text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/dese-iisc"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <i className="ri-linkedin-fill text-xl sm:text-2xl"></i>
            </a>
            <a
              href="https://www.instagram.com/openday_dese_iisc/"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <i className="ri-instagram-line text-xl sm:text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-4 sm:py-6 bg-[#0a0b2e]/50">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-300 text-xs sm:text-sm">
          © {new Date().getFullYear()} Department of Electronic Systems Engineering. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;