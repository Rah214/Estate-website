"use client";
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';

const Landlords = () => {
    const [activeTab, setActiveTab] = useState("tenants");
    return (
        <>
            <section className='max-w-[1440px] font-sans w-full flex items-center justify-center 2xl:justify-between bg-white m-auto md:py-[100px] py-[70px] md:px-[160px] px-[30px] flex-shrink-0 flex-wrap'>

                {/* Image Container */}
                <div className="relative w-full flex justify-center mb-7 md:mb-0 items-center max-w-[544px]">
                    <Image src="/mask.png" height={600} width={544} className="min-w-[327px] h-auto" alt="Mask Image" />

                    {/* Floating Card */}
                    <div className="absolute inset-x-0 bottom-[-30px] mx-6 flex items-center justify-center">
                        <div className="flex items-center max-w-[411px] w-full bg-white shadow-md rounded-[8px] border border-gray-200 md:p-4 p-2 relative">
                            <div className="absolute -top-4 right-6 flex items-center justify-center w-12 h-12">
                                <Image src="/icon.png" width={32} height={32} alt="Home Icon" />
                            </div>

                            <div className="pl-6 pr-12">
                                <h2 className="md:text-[20px] text-[16px] md:leading-8 font-bold text-[#100A55]">Find the best deal</h2>
                                <p className="md:text-[14px] text-[12px] md:leading-[25.6px] text-[#4D5461]">Browse thousands of properties</p>
                            </div>
                        </div>
                        {/* <Image src={'/Group (2).png'} height={411} width={144} alt='Image'/> */}
                    </div>
                </div>




                <div className='max-w-[444px] mt-[80px] 2xl:mt-0 md:ml-[40px] max-h-[416px] md:items-start items-center justify-center flex flex-col gap-8'>

                    <div className="flex items-center justify-center max-h-[64px] max-w-[327px]">
                        <div className="flex items-center justify-center border-[2px] bg-[#EFEFFB] border-[#DEDEF7]  px-2 py-2 shadow-md">
                            {/* Tenants Button */}
                            <button
                                onClick={() => setActiveTab("tenants")}
                                className={`px-6 py-2 text-[16px] font-bold leading-6 focus:outline-none transition ${activeTab === "tenants"
                                    ? "bg-white text-[#7065F0] shadow"
                                    : "bg-transparent text-[#6C727F]"
                                    }`}
                            >
                                Fortenants
                            </button>
                            {/* Landlords Button */}
                            <button
                                onClick={() => setActiveTab("landlords")}
                                className={`px-6 py-2 text-[16px] font-bold focus:outline-none transition ${activeTab === "landlords"
                                    ? "bg-white text-[#7065F0] shadow"
                                    : "bg-transparent text-[#6C727F]"
                                    }`}
                            >
                                Forlandlords
                            </button>
                        </div>
                    </div>

                    <div className='max-w-[444px]'>
                        <h1 className='font-bold text-[40px] md:text-left text-center leading-[56px] text-[#000929] '>
                            We make it easy for tenants and landlords.
                        </h1>
                    </div>
                    <div className='max-w-[444px]'>
                        <p className='text-[#6C727F] md:text-left text-center leading-[25.6px] font-normal '>
                            Whether it’s selling your current home, getting financing, or buying a new home, we make it easy  and efficient. The best part? you’ll save a bunch of money and time with our services.
                        </p>
                    </div>


                    <div className='text-center md:text-left w-full'>

                        <button className="bg-[#7065F0] text-white text-[14px] lg:text-[16px] font-bold px-6 py-3 lg:px-[38px] lg:py-[12px] rounded-md hover:bg-purple-600 transition">
                            See more
                        </button>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Landlords

// set the absolute image is always bottom and center to the image no matter what screen size and make this component responsive