import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
 
import FeaturedProject from "@/components/FeaturedProject";
import Contacts from "@/components/Contacts";
 
import WorksList from './../components/works';
import SiteFooter from "@/components/SiteFooter";

const Page = () => {
    return (
        <>
            <Hero/>
            <WorksList/>
            <Stats/>
            <FeaturedProject/>
            <Contacts/>
            

        </>
    );
};

export default Page;