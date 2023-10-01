import Image from "next/image";
import maskImage from "../../public/Mask.png"
import Link from "next/link";
 import getData from "./ApiCallFunc";



 


const FeaturedProject =async () => {
    const data =await  getData('FeaturedProject')
    return (
        <section className="">
     
            <div className="py-20 bg-[#F0FDF4] radius-for-skewed">
                <div className="container px-4 mx-auto">
                    <div className="mb-16 flex flex-wrap justify-center md:justify-between items-center">
                        <div className="text-center lg:text-left">
                            <span className="text-[#20B15A] font-medium uppercase text-[20px]">
                            Featured Project
                            </span>
                            <h2 className="text-2xl mb-[30px] mt-[30px]  lg:text-[30px] text-[#000000] font-semibold font-heading">
                            We provide the Perfect Solution <br/> to your business growth
                            </h2>
                        </div>
                         
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                      
                        <div>

                           <div className="w-full">
                            
                            <Link href="#">
                                <Image className=" w-full mx-auto object-cover rounded mb-5" src={maskImage} alt=""/>
                            </Link>
                            <h4 className="mb-2 text-[14px] font-normal capitalize text-[#2E3E5C]">app redasign- {new Date().getFullYear()}</h4>
                            <p className="mb-3 pb-3 text-[24px] font-bold text-[#1E1F4B]">app redesign</p>
                           </div>

                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-3 ">

                                  {data.map((value)=>{
                                    return(
                                        <div className=" px-2">
                                    <div className="h-30 mb-5 mx-auto rounded-lg">
                                              <img className=" w-full relative rounded-lg object-cover" src={value.image}alt=""/>

                                                        <p className="text-[12px] mt-1 text-[#2E3E5C]">{value.updated_at}</p>
                                                   <p className="mb-3 pb-3 text-[18px] mt-1 font-semibold text-[#1E1F4B]">
                                                      {value.title}
                                                      </p>

                                               
                                                     
                                                 </div>
                                 </div>
                                    )
                                  })}
                                               
                                            
                             </div>

                    </div>
                    <div className="text-center">
                        <a className="md:hidden inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200" href="#">
                            View More Projects
                        </a>
                    </div>
                </div>
            </div>
             
             
        </section>
    );
};

export default FeaturedProject;