import React, { useState } from "react";
import { Clipboard } from "lucide-react";

// Mock toast for demonstration (replace with actual react-hot-toast in your project)
const toast = {
  success: (message, options) => console.log('Success:', message, options),
  error: (message, options) => console.log('Error:', message, options)
};

const ContactMe = () => {
  const [copyEmailStatus, setCopyEmailStatus] = useState(false);
  const [copyMobileStatus, setCopyMobileStatus] = useState(false);

  const emailToCopy = "uthsarapavan@gmail.com";
  const mobileToCopy = "+94714169537";

  const handleClipboardEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailToCopy);
      setCopyEmailStatus(true);
      toast.success("Email copied to clipboard", { position: "bottom-right" });
      // Reset status after animation
      setTimeout(() => setCopyEmailStatus(false), 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
      setCopyEmailStatus(false);
      toast.error("Failed to copy email");
    }
  };

  const handleClipboardMobile = async () => {
    try {
      await navigator.clipboard.writeText(mobileToCopy);
      setCopyMobileStatus(true);
      toast.success("Mobile number copied to clipboard", {
        position: "bottom-left",
      });
      // Reset status after animation
      setTimeout(() => setCopyMobileStatus(false), 2000);
    } catch (error) {
      console.error("Failed to copy mobile number:", error);
      setCopyMobileStatus(false);
      toast.error("Failed to copy mobile number");
    }
  };

  return (
    <section id="contactme">
      <div className="mt-4 pt-6 px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center my-6 lg:my-8">
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium my-1">
            Contact Me
          </p>
        </div>

        {/* Contact Options Container */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-4 lg:gap-5 py-4 max-w-6xl mx-auto">
          
          {/* Mobile/WhatsApp Card */}
          <div className="flex-1 lg:flex-none lg:w-2/5 bg-slate-50 p-4 lg:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center lg:text-left">
            <p className="font-medium text-lg mb-2">Let's Chat!</p>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              Got a quick question or want to discuss a project on the go?
              Feel free to call or drop me a WhatsApp message. I'm usually
              quick to respond!
            </p>
            
            {/* Mobile Contact Info */}
            <div className="flex justify-center items-center gap-2 mt-2">
              <p className="text-sm sm:text-base">
                Mobile / WhatsApp: +94 71 4169 537
              </p>
              <Clipboard
                onClick={handleClipboardMobile}
                className={`cursor-pointer w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 hover:text-blue-600 flex-shrink-0 ${
                  copyMobileStatus ? 'text-green-600 scale-110' : 'motion-safe:animate-bounce'
                }`}
                title="Copy mobile number"
              />
            </div>
          </div>

          {/* OR Divider */}
          <div className="flex justify-center items-center">
            <div className="flex-none px-4 py-2 font-medium text-lg lg:text-xl text-gray-500">
              OR
            </div>
          </div>

          {/* Email Card */}
          <div className="flex-1 lg:flex-none lg:w-2/5 bg-slate-50 p-4 lg:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center lg:text-left">
            <p className="font-medium text-lg mb-2">Send an Email</p>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              For more detailed inquiries, collaboration proposals, or
              professional discussions, please use the email below. I'll get
              back to you as soon as possible.
            </p>
            
            {/* Email Contact Info */}
            <div className="flex justify-center items-center gap-2 mt-2">
              <p className="text-sm sm:text-base break-all sm:break-normal">
                uthsarapavan@gmail.com
              </p>
              <Clipboard
                onClick={handleClipboardEmail}
                className={`cursor-pointer w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 hover:text-blue-600 flex-shrink-0 ${
                  copyEmailStatus ? 'text-green-600 scale-110' : 'motion-safe:animate-bounce'
                }`}
                title="Copy email address"
              />
            </div>
          </div>
        </div>

        {/* Additional Contact Methods (Optional) */}
        <div className="text-center mt-8 mb-4">
          <p className="text-sm text-gray-500">
            You can also find me on{" "}
            <a 
              href="https://www.linkedin.com/in/pavanuthsara/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;