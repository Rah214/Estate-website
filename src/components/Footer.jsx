import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const footerData = [
    {
        title: 'SELL A HOME',
        links: [
            { name: 'Request an offer', href: '/request-an-offer' },
            { name: 'Pricing', href: '/pricing' },
            { name: 'Reviews', href: '/reviews' },
            { name: 'Stories', href: '/stories' }
        ]
    },
    {
        title: 'BUY A HOME',
        links: [
            { name: 'Buy', href: '/buy' },
            { name: 'Finance', href: '/finance' }
        ]
    },
    {
        title: 'BUY, RENT AND SELL',
        links: [
            { name: 'Buy and sell properties', href: '/buy-and-sell-properties' },
            { name: 'Rent home', href: '/rent-home' },
            { name: 'Builder trade-up', href: '/builder-trade-up' }
        ]
    },
    {
        title: 'TERMS & PRIVACY',
        links: [
            { name: 'Trust & Safety', href: '/trust-and-safety' },
            { name: 'Terms of Services', href: '/terms-of-services' },
            { name: 'Privacy Policy', href: '/privacy-policy' }
        ]
    },
    {
        title: 'ABOUT',
        links: [
            { name: 'Company', href: '/company' },
            { name: 'How it works', href: '/how-it-works' },
            { name: 'Contact', href: '/contact' },
            { name: 'Investors', href: '/investors' }
        ]
    },
    {
        title: 'RESOURCES',
        links: [
            { name: 'Blog', href: '/blog' },
            { name: 'Guides', href: '/guides' },
            { name: 'FAQ', href: '/faq' },
            { name: 'Help Center', href: '/help-center' }
        ]
    }
];

const socialLinks = [
    { href: 'https://facebook.com', icon: <FaFacebookF /> },
    { href: 'https://linkedin.com', icon: <FaLinkedinIn /> },
    { href: 'https://twitter.com', icon: <FaTwitter /> },
    { href: 'https://instagram.com', icon: <FaInstagram /> }
];

const Footer = () => {
    return (
        <section className='w-full m-auto font-sans'>
            <div className='max-w-[1140px] lg:justify-stretch justify-between px-6 md:py-[80px] py-[40px] m-auto gap-5 flex-wrap flex'>
                <div className='w-[151px] h-[40px]'>
                    <Image src={'/logo.png'} height={40} width={151} alt='logo' />
                </div>

                <div className='flex flex-wrap mt-[38px] sm:mt-[0px] lg:gap-[150px] md:gap-[100px] sm:gap-[50px] gap-[30px]'>
                    {[0, 2, 4].map((startIndex) => (
                        <div key={startIndex} className='flex flex-col gap-[48px]'>
                            {footerData.slice(startIndex, startIndex + 2).map((section) => (
                                <div key={section.title} className='flex flex-col '>
                                    <h1 className='font-bold leading-[24px] mb-4 text-[#000929]'>{section.title}</h1>
                                    {section.links.map((link) => (
                                        <Link href={link.href} key={link.href} className='text-[#000929] opacity-[70%] font-normal leading-[38px] hover:underline'>
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className='border-t-[#E8E6F9] border-[1.5px] w-full'>
                <div className='max-w-[1140px] m-auto py-8 px-6 flex md:flex-row flex-col md:gap-0 gap-[24px] items-center justify-between'>
                    <h1 className='text-[#000929] opacity-[50%] font-normal leading-[25.6px]'>&copy; 2021 Estatery, All rights reserved</h1>
                    <div className='flex gap-4'>
                        {socialLinks.map((social, index) => (
                            <Link href={social.href} key={index} target='_blank' rel='noopener noreferrer' className='text-[#000929] opacity-[50%] text-xl hover:text-[#000929] hover:opacity-100'>
                                {social.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
