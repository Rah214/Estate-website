export default function PropertyCard() {
    return (
        <div className="max-w-[350px] bg-white rounded-2xl shadow-lg overflow-hidden">
            <img
                className="w-full h-48 object-cover"
                src="/card.png"
                alt="House"
            />
            <div className="p-4">
                <span className="inline-block bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                </span>
                <h2 className="text-2xl font-bold text-gray-800 mt-2">$2,095<span className="text-gray-600 text-sm"> /month</span></h2>
                <h3 className="text-lg font-semibold text-gray-700 mt-1">Palm Harbor</h3>
                <p className="text-gray-500 text-sm">2699 Green Valley, Highland Lake, FL</p>
                <div className="flex items-center justify-between mt-4 text-gray-600 text-sm">
                    <div className="flex items-center">
                        <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 10H5m14 0a2 2 0 002-2V6a2 2 0 00-2-2M5 10a2 2 0 01-2-2V6a2 2 0 012-2m14 0V4a2 2 0 00-2-2H7a2 2 0 00-2 2v2M5 10v10m14-10v10m-7-10v10"></path>
                        </svg>
                        <span className="ml-1">3 Beds</span>
                    </div>
                    <div className="flex items-center">
                        <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 16L18 16M6 12L18 12M6 8L18 8M6 4L18 4"></path>
                        </svg>
                        <span className="ml-1">2 Bathrooms</span>
                    </div>
                    <div className="flex items-center">
                        <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h11m-1 0a2 2 0 002-2V4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2m10 0v10m-6-10v10m10-10v10"></path>
                        </svg>
                        <span className="ml-1">5x7 m²</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
