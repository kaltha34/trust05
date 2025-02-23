import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Newsletter = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    const serviceID = "service_6zg9emj"; 
    const templateID = "template_fqbaiye"; 
    const publicKey = "4dkjh2DZBDn6F_yFB"; 

    const templateParams = {
      email: data.email, 
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Thank You Email Sent:", response);
        toast.success("Subscription successful! Check your email for confirmation.");
        e.target.reset();
      })
      .catch((error) => {
        console.error("Email Sending Failed:", error);
        toast.error("Subscription failed. Try again.");
      });
  };

  return (
    <div data-aos="fade-down" className="text-[#1E1E1E]">
      <ToastContainer />
      <h1 className="text-3xl font-semibold text-center">
        Subscribe to Trustify
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-blue-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 p-3 md:p-0">
        Stay updated with **Trustify’s blockchain-powered identity solutions**. Subscribe to receive the latest security insights & updates!
      </p>

      {/* Subscription Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col md:flex-row justify-center items-center gap-3"
      >
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="Enter your email"
          className="md:w-1/2 w-11/12 px-6 py-3 rounded-3xl outline-none border border-gray-300 focus:border-blue-600"
        />
        <button className="px-4 py-[10px] bg-blue-600 hover:bg-blue-500 rounded-3xl text-white text-lg hover:shadow hover:shadow-blue-500 transition-all duration-300">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
