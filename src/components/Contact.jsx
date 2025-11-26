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
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Joshua",
          from_email: form.email,
          to_email: "joshabrams40@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        alert("Thank you! I will get back to you as soon as possible.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error("EmailJS Error:", error);
        alert("Something went wrong sending the message. Please try again.");
      });
  };

  return (
  <section className="relative z-0 mt-20 bg-sky-200/20 border border-slate-950/20 rounded-xl backdrop-blur-lg mx-2 flex flex-col overflow-hidden py-10">
    
    <h2 className="text-4xl font-extrabold text-center text-white uppercase tracking-wider mb-6">
      Get in Touch
    </h2>

    <div className="bg-slate-950/40 border border-slate-950/30 rounded-2xl p-6 mx-4 shadow-xl backdrop-blur-xl">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-6"
      >

        {/* NAME INPUT */}
        <div className="relative group">
          <label className="absolute -top-3 left-5 bg-slate-950/40 px-2 text-white text-sm tracking-wide rounded-md">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Type your name..."
            className="
              bg-sky-200/25 
              text-white
              placeholder:text-white/60 
              backdrop-blur-sm
              mt-4
              py-6 px-6 
              rounded-xl 
              outline-none 
              border border-white/10
              focus:border-sky-300/60
              transition-all
              w-full
            "
            required
          />
        </div>

        {/* EMAIL INPUT */}
        <div className="relative group">
          <label className="absolute -top-3 left-5 bg-slate-950/40 px-2 text-white text-sm tracking-wide rounded-md">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Type your email..."
            className="
              bg-sky-200/25 
              text-white
              placeholder:text-white/60 
              backdrop-blur-sm
              mt-4
              py-4 px-6 
              rounded-xl 
              outline-none 
              border border-white/10
              focus:border-sky-300/60
              transition-all
              w-full
            "
            required
          />
        </div>

        {/* MESSAGE INPUT */}
        <div className="relative group">
          <label className="absolute -top-3 left-5 bg-slate-950/40 px-2 text-white text-sm tracking-wide rounded-md">
            Message
          </label>
          <textarea
            rows={7}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Type your message..."
            className="
              bg-sky-200/25 
              text-white
              placeholder:text-white/60 
              backdrop-blur-sm
              mt-4
              py-4 px-6 
              rounded-xl 
              outline-none 
              border border-white/10
              focus:border-sky-300/60
              transition-all
              w-full
              resize-none
            "
            required
          />
        </div>

        {/* SEND BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="
            mt-2 mx-auto 
            text-white font-bold 
            bg-gradient-to-r from-blue-500 to-purple-500 
            px-10 py-4 
            rounded-full 
            hover:from-purple-500 hover:to-blue-500 
            transition-all
            shadow-lg
            disabled:opacity-60 
            disabled:cursor-not-allowed
            flex items-center justify-center
            w-[50%] md:w-[25%]
          "
        >
          {loading ? (
            <span className="animate-pulse tracking-widest">SENDING...</span>
          ) : (
            "SEND"
          )}
        </button>
      </form>
    </div>
  </section>
  );
};

export default SectionWrapper(Contact, "contact");
