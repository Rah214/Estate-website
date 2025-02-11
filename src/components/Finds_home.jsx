'use client';

import Image from 'next/image';
// import { Image } from 'lucide-react';

export default function RealEstateSection() {
    return (
        <section className=" p-6 md:p-12 rounded-lg shadow-lg font-sans">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center py-[20px] md:pl-[64px] px-7 bg-[#F7F7FD] ">
                {/* Text Content */}
                <div>

                    <div className='max-w-[379px]'>
                        <h2 className="md:text-[35px] text-[32px] leading-[56px] font-bold text-[#100A55]">
                            The new way to find your new home
                        </h2>


                        <div className='max-w-[276px]'>
                            <p className="mt-4 text-[#6C727F] text-[16px] leading-[25.6px]">
                                Find your dream place to live in with more than 10k+ properties listed.
                            </p>

                        </div>
                    </div>
                    <div className="mt-[40px] flex   gap-[32px]">
                        {/* Stats Items */}
                        <div className="text-center flex gap-[5px] flex-col">
                            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-white shadow-md rounded-full">
                                {/* <span className="text-indigo-600 text-2xl">💹</span> */}
                                <Image src={'/houseicon.png'} alt='house icons' height={64} width={64}></Image>
                            </div>
                            <p className="text-2xl font-bold text-gray-900 mt-2">7.4%</p>
                            <p className="text-gray-600 text-sm">Property Return Rate</p>
                        </div>
                        <div className="text-center flex gap-[5px] flex-col">
                            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-white shadow-md rounded-full">
                                {/* <span className="text-indigo-600 text-2xl">🔍</span> */}
                                <Image src={'/houseicon1.png'} alt='house icons' height={64} width={64}></Image>
                            </div>
                            <p className="text-2xl font-bold text-gray-900 mt-2">3,856</p>
                            <p className="text-gray-600 text-sm">Property in Sell & Rent</p>
                        </div>
                        <div className="text-center flex gap-[5px] flex-col">
                            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-white shadow-md rounded-full">
                                {/* <span className="text-indigo-600 text-2xl">💰</span> */}
                                <Image src={'/houseicon2.png'} alt='house icons' height={64} width={64}></Image>
                            </div>
                            <p className="text-2xl font-bold text-gray-900 mt-2">2,540</p>
                            <p className="text-gray-600 text-sm">Daily Transactions</p>
                        </div>
                    </div>
                </div>
                {/* Image Content */}
                <div className="flex justify-center w-full">
                    <Image
                        src="/house.png"
                        alt="House Illustration"
                        width={500}
                        height={400}
                        className="w-full max-w-md md:max-w-lg"
                    />
                </div>
            </div>
        </section>
    );
}
