'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const Motion = () => {
    const [activeTab, setActiveTab] = useState('Rent');

    const tabs = [
        { name: 'Rent', href: '/rent' },
        { name: 'Buy', href: '/buy' },
        { name: 'Sell', href: '/sell' }
    ];

    return (
        <>
            <div className="flex justify-between m-auto md:m-0 w-full max-w-[297px] rounded-t-[8px] bg-white py-[15px] px-[25px] sm:w-auto">
                {tabs.map((tab) => (
                    <Link
                        key={tab.name}
                        href={tab.href}
                        className="relative px-4 cursor-pointer text-lg font-medium text-gray-700"
                        onClick={() => setActiveTab(tab.name)}
                    >
                        {tab.name}
                        {activeTab === tab.name && (
                            <motion.div
                                className="absolute bottom-0 left-0 right-0 h-[2px] text-[#7065F0] bg-[#7065F0]"
                                layoutId="underline"
                            />
                        )}
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Motion;