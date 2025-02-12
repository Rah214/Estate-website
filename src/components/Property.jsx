import Image from 'next/image';

const properties = [
    {
        id: 1,
        price: "$2,095",
        perMonth: "/month",
        title: "Palm Harbor",
        address: "2699 Green Valley, Highland Lake, FL",
        imgSrc: "/card.png",
        beds: "3 Beds",
        baths: "2 Bathrooms",
        size: "5x7 m²"
    },
    {
        id: 2,
        price: "$2,700",
        perMonth: "/month",
        title: "Beverly Springfield",
        address: "2821 Lake Sevilla, Palm Harbor, TX",
        imgSrc: "/card2.png",
        beds: "4 Beds",
        baths: "2 Bathrooms",
        size: "6x7.5 m²"
    },
    {
        id: 3,
        price: "$4,550",
        perMonth: "/month",
        title: "Faulkner Ave",
        address: "909 Woodland St, Michigan, IN",
        imgSrc: "/card3.png",
        beds: "4 Beds",
        baths: "3 Bathrooms",
        size: "8x10 m²"
    },
    {
        id: 4,
        price: "$2,400",
        perMonth: "/month",
        title: "St. Crystal",
        address: "210 US Highway, Highland Lake, FL",
        imgSrc: "/card4.png",
        beds: "4 Beds",
        baths: "2 Bathrooms",
        size: "6x8 m²"
    },
    {
        id: 5,
        price: "$1,500",
        perMonth: "/month",
        title: "Cove Red",
        address: "243 Curlew Road, Palm Harbor, TX",
        imgSrc: "/card5.png",
        beds: "2 Beds",
        baths: "1 Bathroom",
        size: "5x7.5 m²"
    },
    {
        id: 6,
        price: "$1,600",
        perMonth: "/month",
        title: "Tarpon Bay",
        address: "103 Lake Shores, Michigan, IN",
        imgSrc: "/card6.png",
        beds: "3 Beds",
        baths: "1 Bathroom",
        size: "5x7 m²"
    }
];

const Property = () => {
    return (
        <>
        <div className='w-full ' style={{ background: 'linear-gradient(to bottom, white, #F0EFFB)' }} >

        
        <section className=' max-w-[1440px] lg:px-[160px] md:py-[80px] py-[40px] px-[24px] font-sans m-auto' >
            <div className=' m-auto'>



                <div className='flex lg:justify-between gap-6 justify-center flex-wrap items-center'>
                    <div className='text-center'>
                        <h1 className='font-bold text-[40px] leading-[56px] text-[#000929]'>Based on your location</h1>
                        <p className='mt-[16px] font-normal leading-[25.6px] text-[#000929] opacity-[70%]'>Some of our picked property near your location.</p>
                    </div>
                    <div className='lg:block hidden'>
                        <button className="bg-[#7065F0] text-white lg:text-[16px] text-[12px] lg:leading-[24px] leading-[12px] font-bold lg:px-8 lg:py-4 px-6 py-3 rounded-[8px] hover:bg-purple-600 transition">
                            Browse more Properties
                        </button>
                    </div>
                </div>

                <div className='flex gap-[24px] md:justify-around justify-center lg:justify-between flex-wrap'>
                    {properties.map(property => (
                        <div key={property.id} className="max-w-[350px] mt-[48px] max-h-[424px] bg-white rounded-2xl shadow-lg overflow-hidden">
                            <img className="w-full h-48 object-cover" src={property.imgSrc} alt={property.title} />
                            <div className="flex flex-col gap-2 py-[32px] px-[24px] relative">
                                <h2 className="text-[24px] font-extrabold leading-[36px] text-[#7065F0]">{property.price}<span className="text-[#000929] opacity-[50%] leading-[24px] text-[16px]"> {property.perMonth}</span></h2>
                                <h3 className="text-[24px] leading-[36px] font-bold text-[#000929]">{property.title}</h3>
                                <p className="text-[#000929] opacity-[50%] leading-[24px] text-[16px]">{property.address}</p>

                                <div className='border-[1.5px] max-w-[48px] max-h-[48px] rounded-[100%] border-[#E8E6F9] py-[16px] px-[15px] absolute left-[250px]'>
                                    <Image src={'/heart.png'} width={24} height={24} alt='Heart' />
                                </div>

                                <div className="flex items-center justify-between mt-4 text-gray-600 text-sm">
                                    <div className="flex items-center">
                                        <Image src={'/icon1.png'} width={20} height={20} alt='Bed' />
                                        <span className="ml-1 text-[14px] leading-[19.6px] text-[#000929] opacity-[70%]">{property.beds}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Image src={'/icon2.png'} width={20} height={20} alt='Bath' />
                                        <span className="ml-1 text-[14px] leading-[19.6px] text-[#000929] opacity-[70%]">{property.baths}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Image src={'/icon3.png'} width={20} height={20} alt='Size' />
                                        <span className="ml-1 text-[14px] leading-[19.6px] text-[#000929] opacity-[70%]">{property.size}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='lg:hidden mt-[48px] flex justify-center'>
                    <button className="bg-[#7065F0] text-white text-[12px] leading-[12px] font-bold px-6 py-3 rounded-[8px] hover:bg-purple-600 transition">
                        Browse more Properties
                    </button>
                </div>

            </div>
        </section>
        </div>
        </>
    );
};

export default Property;
