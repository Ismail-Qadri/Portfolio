import React from 'react';

function Contact() {
  return (
    <div className="w-full h-screen bg-white flex justify-center items-center p-6" id="contact" name="contact">
      <form
        action="https://getform.io/f/bdrnjvlb"
        method="POST"
        className="w-full max-w-lg bg-white shadow-xl rounded-xl p-8"
      >
        <div className="text-center mb-10">
          <p className="text-gray-900 font-semibold text-3xl border-b-4 inline border-indigo-600 pb-2">
            Contact
          </p>
        </div>
        <input
          type="text"
          className="w-full p-4 mb-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Your Name"
          name="name"
        />
        <input
          type="email"
          className="w-full p-4 mb-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Your Email"
          name="email"
        />
        <textarea
          className="w-full p-4 mb-6 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          name="message"
          rows="6"
          placeholder="Your Message"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-gradient-to-l from-[#1595b6] to-[rgba(31,38,103,0.9)] text-white py-3 px-6 rounded-lg transition duration-300 font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;

        // <button className="text-white bg-gradient-to-l from-[#1595b6] to-[rgba(31,38,103,0.9)] border-2 py-3 px-6 my-4 mx-auto flex items-center rounded-lg font-bold">
        