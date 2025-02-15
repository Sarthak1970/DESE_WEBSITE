const Footer = () => {
  return (
    <footer className="bg-[#0a192f] border-t border-[#00b4d8]/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            We are committed to providing world-class education and research opportunities in engineering and technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#research" className="text-gray-300 hover:text-[#00b4d8] transition-colors">Research</a></li>
            <li><a href="#event-highlights" className="text-gray-300 hover:text-[#00b4d8] transition-colors">Events</a></li>
            <li><a href="#schedule" className="text-gray-300 hover:text-[#00b4d8] transition-colors">Schedule</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#00b4d8] transition-colors">Admissions</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-center gap-2">
              <i className="ri-map-pin-line text-[#00b4d8]"></i>
              <span>123 University Road, Tech City</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="ri-phone-line text-[#00b4d8]"></i>
              <span>+1 (234) 567-890</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="ri-mail-line text-[#00b4d8]"></i>
              <span>info@university.edu</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/share/14oVQcUGjD/" className="text-gray-300 hover:text-[#00b4d8] transition-colors">
              <i className="ri-facebook-fill text-2xl"></i>
            </a>
            {/* <a href="#" className="text-gray-300 hover:text-[#00b4d8] transition-colors">
              <i className="ri-twitter-fill text-2xl"></i>
            </a> */}
            <a href="https://www.linkedin.com/company/dese-iisc" className="text-gray-300 hover:text-[#00b4d8] transition-colors">
              <i className="ri-linkedin-fill text-2xl"></i>
            </a>
            <a href="https://www.instagram.com/openday_dese_iisc/" className="text-gray-300 hover:text-[#00b4d8] transition-colors">
              <i className="ri-instagram-line text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#00b4d8]/10 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-300 text-sm">
          © {new Date().getFullYear()} 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
