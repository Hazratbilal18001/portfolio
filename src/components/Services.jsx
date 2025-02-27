import React from "react";
import { RiGlobalFill } from "react-icons/ri";
import { RiQuillPenFill } from "react-icons/ri";
import { RiPantoneFill } from "react-icons/ri";


const Services = () => {
    return (
        // Paarent dev 
        <div className="bg-[#ECF3F1] px-20  ">
            <div className="bg-white rounded-2xl h-[33rem]  ">
                {/* text */}
                <div className="text-center pt-9">
                    <p className="text-gray-500">Services</p>
                    <h1 className="pt-3 text-5xl font-semibold">Quality Services</h1>
                </div >

                <div className="px-10 flex justify-center gap-5 py-10">

                    {/* first card */}
                    <div className="border border-[#E4E4E5] rounded-2xl w-[30%] px-8 py-10 hover:border-[#448C74] ">
                        {/* icons */}
                        <div className="">
                            <RiGlobalFill className="w-13 h-13" />
                        </div>
                        {/* title */}
                        <h1 className=" text-xl text-[#444444] font-semibold pt-1" >Brand Identity Design</h1>
                        {/* text */}
                        <p className="text-gray-500 pt-3 text-lg">Dorbesh gives you the blocks & kits you need to create a true website within minutes.</p>
                    </div>

                    {/* second card */}
                    <div className="border border-[#E4E4E5] rounded-2xl w-[30%] px-8 py-10 hover:border-[#448C74] ">
                        {/* icons */}
                        <div className="">
                            <RiQuillPenFill className="w-13 h-13" />
                        </div>
                        {/* title */}
                        <h1 className=" text-xl text-[#444444] font-semibold pt-1" >Website Design</h1>
                        {/* text */}
                        <p className="text-gray-500 pt-3 text-lg">Dorbesh gives you the blocks & kits you need to create a true website within minutes.</p>
                    </div>

                    {/* third card */}
                    <div className="border border-[#E4E4E5] rounded-2xl w-[30%] px-8 py-10 hover:border-[#448C74] ">
                        {/* icons */}
                        <div className="">
                            <RiPantoneFill className="w-13 h-13" />
                        </div>
                        {/* title */}
                        <h1 className=" text-xl text-[#444444] font-semibold pt-1" >Application Design</h1>
                        {/* text */}
                        <p className="text-gray-500 pt-3 text-lg">Dorbesh gives you the blocks & kits you need to create a true website within minutes.</p>
                    </div>
                </div>
            </div >

            {/*nexts card */}
            <div>
                {/* Experience Card */}
                <div>

                </div>

                {/* Education Card */}
                <div></div>
            </div>



        </div >
    );
};

export default Services;





