import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      message: "I had the pleasure of working with Ismail on my website, and I am truly amazed by his work ethic and dedication. He delivered exactly what was needed, on time, and even ahead of schedule. His commitment to quality is unmatched!",
      name: "LoveKush Tak",
      company: "BharatMaker"
    },
    {
      message: "Ismail is an exceptional developer! He anticipated every need for my website and delivered a product that exceeded my expectations. He went above and beyond by adding features I hadn’t even considered. I’m thrilled with the outcome and will definitely collaborate with him again!",
      name: "Ranvijay",
      company: "RRT Educational Group"
    },
    {
      message: "Working with Ismail was a fantastic experience! He made sure to address all aspects of my website and delivered a smooth, responsive design. His ability to complete tasks efficiently, even ahead of the deadline, has made a significant impact on my business. Highly recommend!",
      name: "Sanchit",
      company: "HCL Healthcare"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-black pt-24 pb-20 " id='testimonial'>
      {/* <h2 className="flex items-center justify-center text-white text-4xl font-bold text-center mb-12 border-2 p-2 w-fit">What my clients are saying?</h2> */}
      <h2 className="flex items-center justify-center text-white text-4xl font-bold text-center mb-12 border-4 p-4 bg-gradient-to-r from-[#1595b6] to-[rgba(31,38,103,0.9)] rounded-lg shadow-lg w-fit mx-auto">
  What My Clients Are Saying?
</h2>
      {/* <div className="flex flex-col items-center gap-8 md:flex-row md:gap-6 md:flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-80 md:w-96 bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-700 mb-4">{`"${testimonial.message}"`}</p>
            <div className="text-sm text-gray-500">
              <p className="font-bold">{testimonial.name}</p>
              <p>{testimonial.company}</p>
            </div>
          </div>
        ))}
          from-[#a2c2f3] to-[#8ecae6]
      </div> */}
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-6 md:flex-wrap justify-center">
  {testimonials.map((testimonial, index) => (
    <div key={index} className="w-full sm:w-80 md:w-96 bg-gradient-to-r bg-white text-black shadow-xl rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl">
      <p className=" mb-4 italic">"{testimonial.message}"</p>
      <div className="text-sm">
        <p className="font-bold text-lg">{testimonial.name}</p>
        <p className="text-gray-600">{testimonial.company}</p>
      </div>
    </div>
  ))}
</div>


    </div>
  );
};

export default Testimonials;
