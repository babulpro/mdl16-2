import img1 from  "../../public/Like.png"
import img2 from  "../../public/happy.png"
import img3 from  "../../public/Scan3.png"
import img4 from  "../../public/Group3.png"

import Image from "next/image"
import getData from "./ApiCallFunc";

 


const Stats = async () => {
    let data = await getData('StatList')

    return (
        <section className="py-20 bg-[#F9FAFB]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">

                    <div className="mb-8 w-full text-center  shadow-xl py-8">
                        <span className="mb-6 inline-block p-4 rounded bg-green-100">
                             <Image src={img2} width={70} heigh={60}/>
                        </span>
                        <h3 className="font-semibold text-[#000000] text-[30px] mb-3">{data.followers}</h3>
                        <p className="font-semibold text-[#000000] mb-4">Followers</p>
                    </div>
                    <div className="mb-8 w-full text-center  shadow-2xl py-8">
                        <span className="mb-6 inline-block p-4 rounded bg-green-100">
                        <Image src={img1} width={70} heigh={60}/>

                        </span>
                        <h3 className="font-semibold text-[#000000] text-[30px] mb-3">{data.solved}</h3>
                        <p className="font-semibold text-[#000000] mb-4">Solved Problems</p>
                    </div>
                    <div className="mb-8 w-full text-center  shadow-2xl py-8">
                        <span className="mb-6 inline-block p-4 rounded bg-green-100">
                        <Image src={img3} width={70} heigh={60}/>

                        </span>
                        <h3 className="font-semibold text-[#000000] text-[30px] mb-3">{data.customers}</h3>
                        <p className="font-semibold text-[#000000] mb-4">Happy Customers</p>
                    </div>
                    <div className="mb-8 w-full text-center  shadow-2xl py-8">
                        <span className="mb-6 inline-block p-4 rounded bg-green-100">
                        <Image src={img4} width={70} heigh={60}/>

                        </span>
                        <h3 className="font-semibold text-[#000000] text-[30px] mb-3">{data.projects}</h3>
                        <p className="font-semibold text-[#000000] mb-4">Projects</p>
                    </div>

                </div>
            </div>
        </section>
    );
};
export default Stats;