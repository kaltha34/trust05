import React, { useEffect } from "react";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import CtaButton from "./CtaButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    const serviceID = "service_6zg9emj"; // Replace with your EmailJS Service ID
    const templateID = "template_kygg2lr"; // Replace with your EmailJS Template ID
    const publicKey = "4dkjh2DZBDn6F_yFB"; // Replace with your EmailJS Public Key

    const templateParams = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Message sent successfully:", response);
        toast.success("Message sent successfully!");
        e.target.reset();
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        toast.error("Message failed to send. Try again.");
      });
  };

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="text-[#1E1E1E]">
      <ToastContainer />
      
      {/* Section Title */}
      <h1 data-aos="fade-right" className="text-3xl font-semibold text-center">
        Get in Touch with Trustify
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-blue-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Have questions about **secure digital identity verification**? Contact us today!
      </p>

      <div className="lg:flex gap-6">
        {/* Contact Information */}
        <div
          data-aos="fade-up"
          className="lg:w-[40%] px-10 py-5 shadow-xl border-t-[3px] border-b-[3px] border-blue-600 mb-7 lg:mb-0"
        >
          {/* Address */}
          <div className="flex gap-3 mt-3 mb-10">
            <div className="rounded-full bg-blue-100 p-3 text-blue-600 text-xl">
              <IoLocationOutline />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Headquarters</h2>
              <p className="text-sm text-gray-700">
                Bambalapitiya,Sri Lanka
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-3 mb-10">
            <div className="rounded-full bg-blue-100 p-3 text-blue-600 text-xl">
              <IoCallOutline />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Support & Inquiries</h2>
              <p className="text-sm text-gray-700">+94 72 59 50 375</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-3 mb-10">
            <div className="rounded-full bg-blue-100 p-3 text-blue-600 text-xl">
              <TfiEmail />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Email Us</h2>
              <p className="text-sm text-gray-700">trustify05@gmail.com</p>
            </div>
          </div>

          {/* Google Map */}
          <div className="lg:w-full lg:h-72">
            <iframe
              width="100%"
              height="100%"
              src="https://www.google.com/maps/embed?..."
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div
          data-aos="fade-up"
          data-aos-duration="1600"
          className="lg:w-[60%] px-10 py-5 shadow-xl border-t-[3px] border-b-[3px] border-blue-600"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name & Email */}
            <div className="md:flex gap-6">
              <div className="md:w-[50%]">
                <label htmlFor="name">Full Name</label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className="w-full h-10 px-3 my-3 rounded border border-gray-300 focus:border-blue-600 outline-none"
                />
              </div>

              <div className="md:w-[50%]">
                <label htmlFor="email">Email</label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full h-10 px-3 my-3 rounded border border-gray-300 focus:border-blue-600 outline-none"
                />
              </div>
            </div>

            {/* Subject */}
            <label htmlFor="subject">Subject</label>
            <input
              {...register("subject", { required: true })}
              type="text"
              id="subject"
              placeholder="What is your inquiry about?"
              className="w-full h-10 px-3 my-3 rounded border border-gray-300 focus:border-blue-600 outline-none"
            />

            {/* Message */}
            <label htmlFor="message">Message</label>
            <textarea
              {...register("message", { required: true })}
              id="message"
              placeholder="Write your message here..."
              className="w-full h-40 p-3 my-3 rounded border border-gray-300 focus:border-blue-600 outline-none resize-none"
            ></textarea>

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <CtaButton name={"Send Message"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
