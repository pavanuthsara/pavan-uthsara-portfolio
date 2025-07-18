import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-slate-50 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Pavan Uthsara
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
