import {
    LocationMarkerIcon,
    MailIcon,
    PhoneIcon,
  } from "@heroicons/react/solid";
  import React, { useRef } from "react";
  import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            "emailService",
            "template_1xvuqqc",
            form.current,
            "9w8Ld1rQ81hxL4m4M"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        e.target.reset();
      };
    return (
        <div  className="bg-accent px-4 md:px-24  text-white">
        <div className="container  py-16">
          <div className="text-center pb-4 md:pb-16">
            <h1 className="text-5xl  font-bold  text-secondary">
              Contact Me</h1>
            <p className="ml-1 mt-2 text-gray-400">Get in touch with me</p>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-5/12 space-y-5">
              <div className="text-white flex gap-4">
                <span>
                  <MailIcon className="w-8 text-primary" />
                </span>
                <div>
                  <h2 className="text-xl font-semibold">Have a question?</h2>
                  <p className="text-gray-400">I am here to help</p>
                  <p className="text-primary">
                    Email me at ashrafalicitp@gmail.com
                  </p>
                </div>
              </div>
              <div className="text-white flex gap-4">
                <span>
                  <LocationMarkerIcon className="w-8 text-primary" />
                </span>
                <div>
                  <h2 className="text-xl font-semibold">Current Location</h2>
                  <p className="text-gray-400">Dhaka,Bangladesh.</p>
                  <p className="text-primary">Serving clients worldwide</p>
                </div>
              </div>
              <div className="text-white flex gap-4">
                <span>
                  <PhoneIcon className="w-8 text-primary" />
                </span>
                <div>
                  <h2 className="text-xl font-semibold">Contact with me</h2>
                  <p className="text-gray-400">Email: muntasirahmeed@gmail.com</p>
                  <p className="text-primary">Phone : +880-1639465255</p>
                </div>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:w-7/12 text-black">
              <form ref={form} onSubmit={sendEmail}>
                <div className="flex gap-4 w-full">
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name "
                    className="block bg-[#EFEFEF] p-3 h-14 rounded  w-full focus:outline-none"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="block bg-[#EFEFEF] h-14 p-3 rounded  w-full focus:outline-none"
                  />
                </div>
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className="block bg-[#EFEFEF] p-3 h-14 rounded  w-full mt-5 focus:outline-none"
                />
                <textarea
                  name="message"
                  className="h-36 bg-[#EFEFEF] resize-none p-3 rounded block w-full mt-5 focus:outline-none"
                  placeholder="Type Your Message"
                ></textarea>
                <button
                  type="submit"
                  className="bg-primary py-3 px-8 mt-5 text-white font-bold rounded-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;