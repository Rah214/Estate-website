import Hero from "@/components/Hero";
import Landlords from "@/components/Landlords";
import RealEstateSection from "@/components/Finds_home";
import PropertyCard from "@/components/PropertyCard";
import Property from "@/components/Property";


export default function Home() {
  return (
    <>
   <Hero/>
   <Landlords/>
   <RealEstateSection/>
   <Property/>
   {/* <PropertyCard/> */}

    </>
  );
}
