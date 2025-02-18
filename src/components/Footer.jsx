import DeseLogo from "../assets/DeseLogo.svg"

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] border-t border-[#00b4d8]/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        {/* <div> */}
        {/*   <h3 className="text-xl font-bold text-white mb-4">About Us</h3> */}
        {/*   <p className="text-gray-300 text-sm leading-relaxed"> */}
        {/*     */}
        {/*   </p> */}
        {/* </div> */}

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#research"
                className="text-gray-300 hover:text-[#00b4d8] transition-colors"
              >
                Research
              </a>
            </li>
            <li>
              <a
                href="#event-highlights"
                className="text-gray-300 hover:text-[#00b4d8] transition-colors"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#schedule"
                className="text-gray-300 hover:text-[#00b4d8] transition-colors"
              >
                Schedule
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-[#00b4d8] transition-colors"
              >
                Admissions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <div className="mt-5">
              <img src={DeseLogo} alt="Logo" className="mx-auto [filter:invert(48%)_sepia(79%)_saturate(2476%)_hue-rotate(1deg)_brightness(118%)_contrast(119%)]" />
            </div>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <i className="ri-map-pin-line text-[#00b4d8]"></i>
                <span>
            Department of Electronic Systems Engineering, Indian Institute
            of Science, Bangalore-560012
                </span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-phone-line text-[#00b4d8]"></i>
                <div>Phone: +91-80-2360 0810 +91-80-2293 2246</div>
                <div>Fax: +91-80-2293 2290</div>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-mail-line text-[#00b4d8]"></i>
                <span>office@dese.iisc.ernet.in</span>
              </li>
            </ul>

            {/* Logo */}

        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.facebook.com/share/14oVQcUGjD/"
              className="text-gray-300 hover:text-[#00b4d8] transition-colors"
            >
              <i className="ri-facebook-fill text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/dese-iisc"
              className="text-gray-300 hover:text-[#00b4d8] transition-colors"
            >
              <i className="ri-linkedin-fill text-2xl"></i>
            </a>
            <a
              href="https://www.instagram.com/openday_dese_iisc/"
              className="text-gray-300 hover:text-[#00b4d8] transition-colors"
            >
              <i className="ri-instagram-line text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#00b4d8]/10 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-300 text-sm">
          © {new Date().getFullYear()} All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
