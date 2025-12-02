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
  <section className="relative z-0 mt-20 bg-sky-200/20 border border-slate-500 rounded-2xl backdrop-blur-lg mx-2 flex flex-col overflow-hidden">
    <h2 className="text-3xl font-bold text-center text-white uppercase mt-4">Get In Touch</h2>
    <div className="bg-slate-950/30 border border-slate-950/20 rounded-2xl p-4 mx-4 my-4">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-6"
      >

        {/* NAME INPUT */}
        <div className="relative group">
          <label className="absolute -top-3 -left-2 bg-slate-950/5 shadow-black/40 shadow-sm rounded-2xl border-2 border-white/5 px-2 text-white text-sm tracking-wide">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Type your name..."
            className="
              bg-slate-950/5 p-2 shadow-black/40 shadow-md rounded-2xl border-2 border-white/5
              text-white
              placeholder:text-white/60 
              mt-4
              py-6 px-6 
              outline-none
              transition-all
              w-full
            "
            required
          />
        </div>

        {/* EMAIL INPUT */}
        <div className="relative group">
          <label className="absolute -top-3 -left-2 bg-slate-950/5 shadow-black/40 shadow-sm rounded-2xl border-2 border-white/5 px-2 text-white text-sm tracking-wide">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Type your email..."
            className="
              bg-slate-950/5 p-2 shadow-black/40 shadow-md rounded-2xl border-2 border-white/5
              text-white
              placeholder:text-white/60 
              mt-4
              py-6 px-6 
              outline-none
              transition-all
              w-full
            "
            required
          />
        </div>

        {/* MESSAGE INPUT */}
        <div className="relative group">
          <label className="absolute -top-3 -left-2 bg-slate-950/5 shadow-black/40 shadow-sm rounded-2xl border-2 border-white/5 px-2 text-white text-sm tracking-wide">
            Message
          </label>
          <textarea
            rows={7}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Type your message..."
            className="
              bg-slate-950/5 p-2 shadow-black/40 shadow-md rounded-2xl border-2 border-white/5
              text-white
              placeholder:text-white/60 
              mt-4
              py-6 px-6 
              outline-none
              transition-all
              w-full
            "
            required
          />
        </div>
        <div className="flex justify-center -mt-4 mb-0">
          {/* SEND BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="
              mx-auto 
              shadow-lg
              disabled:opacity-60 
              disabled:cursor-not-allowed
              justify-center
              w-[30%] md:w-[15%]
              flex items-center space-x-2 text-white font-bold bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-full hover:from-purple-500 hover:to-blue-500 transition
            "
          >
            {loading ? (
              <span className="animate-pulse tracking-widest">SENDING...</span>
            ) : (
              "SEND"
            )}
          </button>
        </div>
      </form>
    </div>
  </section>
  );
};

export default SectionWrapper(Contact, "contact");
