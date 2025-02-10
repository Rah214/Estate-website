"use client";
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';

const Landlords = () => {
    const [activeTab, setActiveTab] = useState("tenants");
    return (
        <>
            <section className='max-w-[1440px] font-sans w-full flex items-center justify-center lg:justify-between bg-white m-auto py-[100px] px-[160px] flex-shrink-0 '>

                <div className='relative'>

                    <Image src={'/mask.png'} className='relative' height={600} width={544} alt='Mask Image' />

                </div>



                <div className='absolute m-auto left-[265px] top-[1515px]'>
                    <div className="flex items-center max-w-[411px] justify-between bg-white shadow-md rounded-[8px] border border-gray-200 m-auto relative">
                        <div className="absolute -top-4 right-[25px] flex items-center justify-center w-12 h-12 bg-purple-200 rounded-full">

                            <Image src={'/icon.png'} width={64} height={64} alt='Home Icon'></Image>
                        </div>


                        <div className='pl-8 pr-[136px] py-4'>
                            <h2 className="text-[20px] leading-8 font-bold text-[#100A55]">Find the best deal</h2>
                            <p className="text-[14px] leading-[25.6px] text-[#4D5461]">Browse thousands of properties</p>
                        </div>
                    </div>
                </div>


                <div className='max-w-[444px] max-h-[416px]  flex flex-col gap-8'>

                    <div className="flex items-center justify-center max-h-[64px] max-w-[280px]">
                        <div className="flex items-center border-[2px] bg-[#EFEFFB] border-[#DEDEF7]  p-2 shadow-md">
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
                        <h1 className='font-bold text-[40px] leading-[56px] text-[#000929] '>
                            We make it easy for tenants and landlords.
                        </h1>
                    </div>
                    <div className='max-w-[444px]'>
                        <p className='text-[#6C727F] leading-[25.6px] font-normal '>
                            Whether it’s selling your current home, getting financing, or buying a new home, we make it easy  and efficient. The best part? you’ll save a bunch of money and time with our services.
                        </p>
                    </div>


                    <div className=''>

                        <button className="bg-[#7065F0] text-white lg:text-[16px] text-[12px] lg:leading-[24px] leading-[12px] font-bold lg:px-[38px] lg:py-[12px] px-6 py-3 rounded-[8px]  hover:bg-purple-600 transition ">
                            See more
                        </button>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Landlords

