"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";
import Image  from "next/image";
import logo from "../../public/Frame.png"

const SiteNavBar = () => {


    const current=usePathname();

    return (
        <div className="navbar bg-[#D7F5DC] text-[#000000] text-[16px]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/team'}>Team</Link></li>
        <li><Link href={'/project'}>Project</Link></li>
        <li><Link href={'/service'}>Service</Link></li>
        <li><Link href={'/testimonial'}>Testimonial</Link></li>
      </ul>
    </div>
    <a className="ml-2"> 
    <Image  src={logo}/>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[16px] text-[#000000] font-medium">
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/team'}>Team</Link></li>
        <li><Link href={'/services'}>Service</Link></li>
        <li><Link href={'/projects'}>Project</Link></li>
        <li><Link href={'/testimonials'}>Testimonial</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="hover:bg-[#20B15A] w-[105px] h-[44px] rounded-[10px] p-[10px] text-center border-[2px] hover:text-white">LogIn</a>
  </div>
  <div className="mx-4 bg-[#D7F5DC]">
  <a className="hover:bg-[#20B15A] w-[105px] h-[44px] rounded-[10px] p-[10px] text-center hover:text-white">Register</a>
  </div>
</div>
    );
};
export default SiteNavBar;