import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../utils";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_kx9fc3y",
        "template_mw1nunr",
        {
          from_name: form.name,
          to_name: "Joshua",
          from_email: form.email,
          to_email: "joshabrams40@gmail.com",
          message: form.message,
        },
        "ZoaoiDKdkNvKWVFPV"
      )
      .then(() => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <section className='relative z-0 mt-20 bg-sky-200/20 border border-slate-950/20 rounded-xl backdrop-blur-lg mx-2 flex flex-col overflow-hidden'>
        <h2 className="text-4xl font-extrabold text-center text-white uppercase tracking-wider mt-4">
          Get in Touch
        </h2>
        
        {/* Card Container (matches Projects.jsx style) */}
        <div className="bg-slate-950/30 border border-slate-950/20 rounded-xl p-4 mx-4 my-4">
          <form 
            ref={formRef} 
            onSubmit={handleSubmit} 
            className="flex flex-col"
          >
            <div className="flex flex-col">
              <label 
                htmlFor="name" 
                className="text-white font-medium mb-2 text-center md:text-left"
              >
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Type your name"
                className="bg-sky-200/60 backdrop-blur-sm py-4 px-6 placeholder:text-black rounded-lg outline-none border-none font-medium text-center md:text-left"
              />
            </div>

            <div className="flex flex-col mt-4">
              <label 
                htmlFor="email" 
                className="text-white font-medium mb-2 text-center md:text-left"
              >
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Type your email"
                className="bg-sky-200/60 backdrop-blur-sm py-4 px-6 placeholder:text-black rounded-lg outline-none border-none font-medium text-center md:text-left"
              />
            </div>

            <div className="flex flex-col mt-4">
              <label 
                htmlFor="message" 
                className="text-white font-medium mb-2 text-center md:text-left"
              >
                MESSAGE
              </label>
              <textarea
                rows={7}
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Type your message"
                className="bg-sky-200/60 backdrop-blur-sm py-4 px-6 placeholder:text-black rounded-lg outline-none border-none font-medium resize-none text-center md:text-left"
              />
            </div>

            <button 
              type="submit" 
              className="mt-4 w-[15vw] mx-auto text-center text-white font-bold bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-4 rounded-full hover:from-purple-500 hover:to-blue-500 transition"
              disabled={loading}
            >
              {loading ? "SENDING..." : "SEND"}
            </button>
          </form>
        </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
