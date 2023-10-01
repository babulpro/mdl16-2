 
import getData from "./ApiCallFunc";



const Testimonial =async  () => {
    const data = await getData('TestimonialList')
   
   
    return (
        <div>
            <section>
                <div className="py-20 bg-gray-50 radius-for-skewed overflow-hidden">
                    <div className="max-w-6xl mx-auto px-4 pb-6 lg:pb-16">
                        
                            <div className="w-full lg:w-4/5 mb-4 lg:mb-0">
                                <h2 className="text-xl font-bold font-heading">
                                    Testimonials list
                                </h2>
                                <span className="text-green-600 text-4xl font-bold">
                                     Better Agency/SEO Solution At<br/> Your FingerTips
                                </span>
                            </div>
                        
                    </div>

                    <div className="relative flex">
                        <div className="flex flex-wrap max-w-6xl px-2 mx-auto">
                            {data.map((value)=>{
                                return(
                                    <div className="mb-4 w-full lg:w-1/3 px-3">
                                <div className="p-8 bg-white rounded shadow text-center">

                                    <div className="bg-no-repeat bg-left-top" style={{backgroundImage: 'url("atis-assets/elements/quote-grey.svg")'}}>

                                          <img className="mb-2 mx-auto w-12 h-12 rounded-lg object-cover" src={value.image} alt=""/>

                                        <p className="mb-8 text-gray-500 leading-loose">
                                           {value.msg}
                                        </p>
                                       
                                        <h4 className="mb-1 text-2xl font-bold font-heading">
                                           {value.name}
                                        </h4>
                                        <p className="text-gray-500">{value.designation}</p>
                                    </div>
                                </div>

                            </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Testimonial;