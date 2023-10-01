 import getData from "./ApiCallFunc";
 



const Team =async () => {
    const data =await getData('TeamList')
    return (
        <div className="   bg-[#FFFFFF]">
            <div className="ml-10">
            <h2 className="font-medium text-[20px] text-[#20B15A]">our team member</h2>
            <p className="font-semibold text-[30px] text-[#20B15A]">Meet our awesome team members</p>

            </div>
            <div className=' grid md:grid-cols-2 gap-10'>

                {
                    data.map((value)=>{
                        return(
                            <div className="mt-5">
                                <div className="w-2/3 m-auto px-10 ">
                                <img className="w-full " src={value.image}/>
                                 <h1>{value.name}</h1>
                                 <p>{value.bio}</p>
                                </div>
                          </div>
                        )
                    })
                }

            </div>

        </div>
    );
};
export default Team;




