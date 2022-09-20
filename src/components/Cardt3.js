import React from "react";
import './ana.css';

import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RoomIcon from '@mui/icons-material/Room';
import StarIcon from '@mui/icons-material/Star';
import { RiSendPlaneFill } from 'react-icons/ri';
import { FaRegCommentDots } from 'react-icons/fa';

function App() {
    return (
        <div className="object-cover w-full h-40 border border-rounded-lg rounded-lg shadow-lg hover:shadow-xl  hover:opacity-95 bg-slate-50 text-primarygray">
            <a href="/" className="grid grid-cols-8 h-full">
                <div className="relative col-span-3 grid items-stretch ">
                    <FavoriteIcon className="absolute m-2 text-red-600" />
                    <CheckCircleIcon className="absolute self-end m-2 text-green-600" />
                    <img src="pdata/img/dcategory/4.jpg" alt="" className=" w-96 fill rounded-l-lg " />
                </div>
                <div className="rounded-b-xl p-2 col-span-5 max-h-40 grid items-stretch">
                    <h6 className="font-semibold text-sm ">Lorem, ipsum.</h6>
                    <div className="font-normal text-xs">
                        <p className="-ml-1 mb-1 text-[11px]"><RoomIcon sx={{ fontSize: 17 }} className="opacity-50 text-primarygray" />Kadıköy/İstanbul</p>
                        <p className="text-sm">Lorem, ipsum. Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="flex justify-around row-end-auto  self-end gap-2">
                        <p className="text-xs text-gray-400 !flex items-center gap-1"><StarIcon sx={{ fontSize: 23 }} className="text-yellow-300" />4,5</p>
                        
                        <p className="text-xs text-gray-400 !flex items-center tooltip gap-1"><FaRegCommentDots className="text-purple-500 text-[18px]" />135
                        <span class="tooltiptext opacity-90">Lorem, ipsum.</span></p>

                        <p className="text-xs text-gray-400 !flex items-center tooltip gap-1"><RiSendPlaneFill className="text-green-500 text-[18px]" />1232
                        <span class="tooltiptext opacity-90">Lorem, ipsum.</span></p>
                    </div>
                </div>
            </a>

        </div>
    );
}

export default App;