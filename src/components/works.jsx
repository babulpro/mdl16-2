'use client'

import activeImage from "../../public/activity.png"
import Image from "next/image"
import Link from "next/link"



 

export default function WorksList(){

    return (
       
          <section className="bg-[#FFFFFF] text-black">
            <div className="container m-auto py-10">
                <div className ="uppercase mb-2">
                    <h1 className="text-[20px] text-[#20B15A]">work List</h1>
                </div>
                <div className="mb-5">
                    <p className="text-[30px] text-[#000000] font-semibold leading-[45px">We provide the Perfect Solutin <br/> to yout business growth</p>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 mt-10">
                    <div className='grid-rows-3 p-3 text-left shadow-sm hover:shadow-xl  py-10'> 
                         <div className="mb-7">
                         <Image  src={activeImage} width={60} height={50}/>
                         </div>
                        <div className="mb-10">
                             <h1 className="mb-4">Grow Your Business</h1>
                             <p>we help identify the best ways to<br/> improve your business</p>
                        </div>

                        <div className="ml-3" >
                             <Link className="" href={"/"}>Learn Mour </Link>
                        </div>

                    </div>
                    <div className='grid-rows-3 p-3 text-left shadow-sm hover:shadow-xl   py-10'> 
                         <div className="mb-7">
                         <Image  src={activeImage} width={60} height={50}/>
                         </div>
                        <div className="mb-10">
                             <h1 className="mb-4">Grow Your Business</h1>
                             <p>we help identify the best ways to<br/> improve your business</p>
                        </div>

                        <div className="ml-3" >
                             <a href="#">Learn More</a>
                        </div>

                    </div>
                    <div className='grid-rows-3 p-3 text-left shadow-sm hover:shadow-xl   py-10'> 
                         <div className="mb-7">
                         <Image  src={activeImage} width={60} height={50}/>
                         </div>
                        <div className="mb-10">
                             <h1 className="mb-4">Grow Your Business</h1>
                             <p>we help identify the best ways to<br/> improve your business</p>
                        </div>

                        <div className="ml-3" >
                             <Link className="hover:bg-red-300 px-5 py-2 rounded-lg bold" href="#">Learn More</Link>
                        </div>

                    </div> 

                </div>


            </div>

          </section>
       
    )
}