"use client"
const Contacts = () => {
    return (
        <section className="py-20 bg-[#FFFFFF] h-[500px] flex  text-center justify-center">
          
   
  <form>
    <header className="mb-10 uppercase text-[#20B15A] text-[20px]" >Subscribe</header> 
    <fieldset className=" w-2/3 m-auto">
      <label className="label">
        <span className="  text-center mb-4 font-semibold text-[30px] text-[#000000]">Subscribe to get the latest news about us</span>
      </label> 
        <span className="text-sm">Please drop your email below to get daily update about what we to do</span>
      <div className="relative mt-10">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </fieldset>
  </form>
 
        </section>

    );
};

export default Contacts;