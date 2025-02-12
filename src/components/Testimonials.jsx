import React from 'react';
import Image from 'next/image';

const testimonialsData = [
  {
    quote:
      "Estatery is the platform I go to on almost a daily basis for 2nd home and vacation condo shopping, or to just look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Estatery!",
    name: "Mira Culos",
    role: "Renter",
  }
];

const Testimonials = () => {
  return (
    <section
      className="w-full  md:pt-[64px] pt-[32px] md:pb-[100px] pb-[50px] font-sans px-[24px]"
      style={{ background: 'linear-gradient(to top, white, #F0EFFB)' }}
    >
      <div className="flex m-auto max-w-[1440px] flex-col md:gap-[64px] gap-[38px] justify-center items-center">
        <div className="flex flex-col gap-4 justify-center text-center items-center">
          <h1 className="text-[#000929] font-bold text-[40px] leading-[56px]">
            Testimonials
          </h1>
          <p className="max-w-[406px] text-[#000929] leading-[25.6px] opacity-[70%]">
            See what our property managers, landlords, and tenants have to say
          </p>
        </div>

        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="max-w-[736px]">
            <p className="text-[20px] leading-[32px] text-[#000929] text-center font-normal">
              “{testimonial.quote}”
            </p>
            <p className="font-bold leading-6 text-center mt-8">
              {testimonial.name},
              <span className="font-normal leading-6 opacity-[50%]"> {testimonial.role}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center pt-[56px]">
        <Image src={'/Frame.png'} height={72} width={256} alt="Frame" />
      </div>
    </section>
  );
};

export default Testimonials;

