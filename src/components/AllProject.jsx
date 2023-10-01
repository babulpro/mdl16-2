import getData from "./ApiCallFunc";




const AllProject = async () => {
    const data = await getData('AllProject')
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
                        <h1>all project</h1>
                        <p>better Agency/SEO solution At <span>Your FingerTips</span></p>
                    </div>


                 
                    <div className="grid lg:grid-cols-2 gap-5  px-8">


                          {
                            data.map((value)=>{
                                return(
                                    <div className="p-10  shadow-2xl radius-[20px]">
                            <div className="container mx-auto px-4">
                              <div className="items-center -mx-4 ">
 
                                    <div className="w-full">
                                     <div className="mb-4">
                                            <div className="mb-4 lg:mb-0 w-full  px-3">
                                              <img className="w-full h-32 lg:h-48 object-cover rounded" src={value.image}/>
                                          </div>
                                           <div className="w-full mt-8 px-3">
                                             <a className="py-3" href={value.live}>
                                                    <h1 className="hover:text-red-500">{value.title}</h1>
                                             </a>
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

export default AllProject;