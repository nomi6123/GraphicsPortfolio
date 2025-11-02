import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black/95 border-t border-white/10 py-10 px-6 ">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white/60 text-sm text-center md:text-left">
              © 2025 Graphics Portfolio. All rights reserved. | Designed with ❤️
            </div>
            <div className="flex gap-8">
              <a href="/PrivacyPolicy">
                <button className="text-white/70 cursor-pointer hover:text-white text-sm transition-colors">
                  Privacy Policy
                </button>
              </a>
              <a href="/TermsofServices">
                <button
                  // onClick={() => alert("Terms of Service page")}
                  className="text-white/70 cursor-pointer hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </button>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
