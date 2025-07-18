import React from "react";

import { Construction } from "lucide-react";

const ContactMe = () => {
  return (
    <>
      <div className="mt-4 pt-6">
        <div className="text-center my-3">
          <p className="text-2xl font-medium ">Contact Me</p>

          <div className="flex justify-center gap-5 py-4">
            <div className="flex-none w-2/5 h-auto bg-slate-100">
              <p>Let's Chat!</p>
              <p>
                Got a quick question or want to discuss a project on the go?
                Feel free to call or drop me a WhatsApp message. I'm usually
                quick to respond!
              </p>
              <p>Mobile/WhatsApp: +94 71 4169 537</p>
            </div>
            <div className="flex-none w-6 bg-slate-100 my-auto">OR</div>
            <div className="flex-none w-2/5 h-auto bg-slate-100">
              <p>Send an Email</p>
              <p>
                For more detailed inquiries, collaboration proposals, or
                professional discussions, please use the contact form below.
                I'll get back to you as soon as possible.
              </p>
              <p>uthsarapavan@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
