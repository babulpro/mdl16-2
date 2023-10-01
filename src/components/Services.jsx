import getData from "./ApiCallFunc";




const Services =async () => {
    const data = await getData('AllService')
   
    return (
        <div>
            <section className="bg-white">
                <div className="skew skew-top mr-for-radius">
                    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                        <polygon fill="currentColor" points="0 0 10 10 0 10" />
                    </svg>
                </div>
                <div className="skew skew-top ml-for-radius">
                    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                        <polygon fill="currentColor" points="0 10 10 0 10 10" />
                    </svg>
                </div>

                <div className="container m-auto bg-white">
                    <div>
                        <h1>our all services</h1>
                        <p>We provide  best web design <span>Services</span></p>
                    </div>


                 
                    <div className="grid lg:grid-cols-2 gap-5  px-8">


                          {
                            data.map((value)=>{
                                return(
                                    <div className="p-10 shadow-2xl radius-[20px]">
                            <div className="container mx-auto px-4">
                              <div className="items-center -mx-4 ">

                                  <div className="mb-12 lg:mb-0 w-full px-4">
                                     <div className="max-w-md">
                                         
                                         <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading">
                                                {value.tag}
                                          </h2>
                                         <div className="mb-6 max-w-sm">
                                               <p className="text-gray-500 leading-loose">
                                                   {value.des}
                                              </p>
                                         </div>
                                     </div>
                                 </div>

                                  
                                    <div className="w-full">
                                     <div className="mb-4 flex flex-wrap items-end">
                                            <div className="mb-4 lg:mb-0 w-full lg:w-2/3 px-3">
                                              <img className="w-full h-32 lg:h-48 object-cover rounded" src={value.image1}/>
                                          </div>
                                           <div className="w-full lg:w-1/3 px-3">
                                             <img className="w-full h-32 object-cover rounded" src={value.image2} alt=""/>
                                          </div>
                                      </div>

                                      <div className="flex flex-wrap items-start">
                                         <div className="mb-4 lg:mb-0 w-full lg:w-1/3 px-3">
                                                <img className="w-full h-32 object-cover rounded" src={value.image3} alt=""/>
                                         </div>
                                         <div className="w-full lg:w-2/3 px-3">
                                             <img className="w-full h-32 lg:h-48 object-cover rounded" src={value.image4}alt=""/>
                                         </div>
                                     </div>
                                 </div>
                                 </div>
                             </div>
                           </div>
 
                                )
                            })
                          }

                       </div>

                    </div>
            </section>
        </div>
    );
};

export default Services;