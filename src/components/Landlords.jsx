"use client";
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';

const Landlords = () => {
    const [activeTab, setActiveTab] = useState("tenants");
    return (
        <>
            <section className='max-w-[1440px] w-full bg-white m-auto py-[100px] px-[160px] '>

                <div>

                    <Image src={'/mask.png'} height={600} width={544} alt='Mask Image' />

                </div>



                <div>

                    <div className="flex items-center justify-center min-h-screen bg-gray-100">
                        <div className="flex items-center bg-gray-200 rounded-full p-1 shadow-md">
                            {/* Tenants Button */}
                            <button
                                onClick={() => setActiveTab("tenants")}
                                className={`px-6 py-2 text-sm font-medium rounded-full focus:outline-none transition ${activeTab === "tenants"
                                        ? "bg-white text-blue-500 shadow"
                                        : "bg-transparent text-gray-500"
                                    }`}
                            >
                                Fortenants
                            </button>
                            {/* Landlords Button */}
                            <button
                                onClick={() => setActiveTab("landlords")}
                                className={`px-6 py-2 text-sm font-medium rounded-full focus:outline-none transition ${activeTab === "landlords"
                                        ? "bg-white text-blue-500 shadow"
                                        : "bg-transparent text-gray-500"
                                    }`}
                            >
                                Forlandlords
                            </button>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Landlords