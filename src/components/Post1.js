import React from "react";
import '../components/ana.css';
import { BiHeart } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';
import { HiDotsCircleHorizontal } from 'react-icons/hi';
import { FiShare2 } from 'react-icons/fi';


function App() {
    return (
        <div className="object-cover border rounded-xl shadow-lg hover:shadow-xl bg-slate-50 text-primarygray w-full">
            <div className="max-h-[500px] w-full">
                <div className=" absolute m-4 w-full">
                    <div className="flex items-center justify-between w-full font-semibold text-white gap-4">
                        <div className="flex items-center gap-4 cursor-pointer">
                            <img src="pdata/img/dcategory/6.jpg" alt="/" className="h-24 w-24 fill rounded-full border-4" />
                            <p>Lorem, ipsum.</p>
                        </div>
                        <HiDotsCircleHorizontal size={32} className="text-zinc-600 hover:opacity-100 cursor-pointer opacity-40 mr-28" />
                    </div>
                </div>
                <img src="pdata/img/dcategory/5.jpeg" alt="/" className="fill rounded-t-xl max-h-[500px] w-full fill" />
            </div>
            <div className="flex flex-col text-primarygray opacity-70 m-5 gap-4">
                <div className="flex justify-between ">
                    <p className="font-semibold">Lorem, ipsum.</p>
                    <p>26 gün önce</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquam quam molestiae ab tempore dolorem aliquid fugiat laudantium obcaecati ratione.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo veritatis libero obcaecati ipsa perferendis dolore vero neque quos explicabo eos?
                    </p>

                </div>
                <div>
                    <div className="flex gap-8 justify-evenly">
                        
                        
                        
                        <div className="tooltip"><BiHeart size={22} className="text-zinc-600 hover:text-red-600 cursor-pointer" /><span class="tooltiptext opacity-90">Lorem, ipsum.</span></div>
                        <div className="tooltip"><FaRegComment size={20} className="text-zinc-600 hover:text-yellow-600 cursor-pointer" /><span class="tooltiptext opacity-90">Lorem, ipsum.</span></div>
                        <div className="tooltip"><FaMapMarkerAlt size={20} className="text-zinc-600 hover:text-red-600 cursor-pointer" /><span class="tooltiptext opacity-90">Lorem, ipsum.</span></div>
                        <div className="tooltip"><FiShare2 size={20} className="text-zinc-600 hover:text-blue-600 cursor-pointer" /><span class="tooltiptext opacity-90">Lorem, ipsum.</span></div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;