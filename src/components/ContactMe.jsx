import React, { useState } from "react";
import toast from "react-hot-toast";

import { Clipboard } from "lucide-react";

const ContactMe = () => {
  const [copyEmailStatus, setCopyEmailStatus] = useState(false);
  const [copyMobileStatus, setCopyMobileStatus] = useState("");

  const emailToCopy = "uthsarapavan@gmail.com";
  const mobileToCopy = "+94714169537";

  const handleClipboardEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailToCopy);
      setCopyEmailStatus(true);
      toast.success("Email copied to clipboard", { position: "bottom-right" });
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
    } catch (error) {
      console.error("Failed to copy mobile number:", error);
      setCopyMobileStatus(false);
      toast.error("Failed to copy mobile number");
    }
  };

  return (
    <>
      <section id="contactme">
        <div className="mt-4 pt-6">
          <div className="text-center my-3">
            <p className="text-2xl font-medium my-1">Contact Me</p>

            <div className="flex justify-center gap-5 py-4">
              <div className="flex-none w-2/5 h-auto bg-slate-50 p-4 rounded-2xl ">
                <p className="font-medium text-lg">Let's Chat!</p>
                <p className="text-sm text-slate-600 py-2">
                  Got a quick question or want to discuss a project on the go?
                  Feel free to call or drop me a WhatsApp message. I'm usually
                  quick to respond!
                </p>
                <div className="flex flex-row justify-center align-middle gap-2 mt-2 ">
                  <p>Mobile / WhatsApp: +94 71 4169 537</p>
                  <Clipboard
                    onClick={handleClipboardMobile}
                    className="cursor-pointer w-6 motion-safe:animate-bounce"
                  />
                </div>
              </div>
              <div className="flex-none w-6  my-auto font-medium text-xl">
                OR
              </div>
              <div className="flex-none w-2/5 h-auto bg-slate-50 p-4 rounded-2xl ">
                <p className="font-medium text-lg">Send an Email</p>
                <p className="text-sm text-slate-600 py-2">
                  For more detailed inquiries, collaboration proposals, or
                  professional discussions, please use the email below. I'll get
                  back to you as soon as possible.
                </p>
                <div className="flex flex-row justify-center align-middle gap-2 mt-2">
                  {/* <div className="rounded-3xl bg-base-200 p-1"></div> */}
                  <p>uthsarapavan@gmail.com</p>
                  <Clipboard
                    onClick={handleClipboardEmail}
                    className="cursor-pointer w-6 motion-safe:animate-bounce"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMe;
