import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


import { AiFillStar } from 'react-icons/ai';
import { RiSendPlaneFill } from 'react-icons/ri';
import { FaRegCommentDots } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';

function App() {
    return (
        <div className="flex mx-2 my-5 flex-col">
            <div className="flex w-full justify-center ">
                <img src="pdata/img/dcategory/6.jpg" alt="" className="w-56 h-56 fill -mt-40 absolute rounded-lg" />
                <div><CheckCircleIcon className="absolute w-full content-start ml-10 mt-6 text-green-400 hover:text-green-700 cursor-pointer" /></div>
                <div className="w-full gap-3 flex flex-col">
                    <div className="border p-4 mt-20 bg-zinc-50 rounded-lg text-lg font-semibold bg-opacity-70 text-primarygray gap-2 flex flex-col w-full">
                        <p>Lorem, ipsum.</p>
                        <p className="text-sm text-gray-400 !flex items-center gap-1 justify-start"><AiFillStar className="text-yellow-300 text-[19px] w-7" />4,5 Yorum Puanı</p>
                        <p className="text-sm text-gray-400 !flex items-center gap-1 justify-start"><FaRegCommentDots className="text-purple-500 text-[18px] w-7" />Lorem, ipsum.</p>
                        <p className="text-sm text-gray-400 !flex items-center gap-1 justify-start"><RiSendPlaneFill className="text-green-500 text-[18px] w-7" />1232 Yorum</p>
                    </div>
                    <div className="border p-4 bg-zinc-50 rounded-lg text-lg font-semibold bg-opacity-70 text-primarygray gap-2 flex flex-col w-full">
                        <p>Lorem, ipsum.</p>
                        <p className="text-sm text-gray-400 !flex items-center gap-1 justify-start"><FaMapMarkerAlt className="text-red-500 text-[19px] w-7" />Lorem, ipsum. </p>
                        <p className="text-sm text-gray-400 !flex items-center gap-1 justify-start"><BsFillTelephoneFill className="text-green-500 text text-[18px] w-7" />Lorem, ipsum.</p>
                        <p className="text-sm text-gray-400 !flex items-center gap-1 justify-start"><HiMail className="text-yellow-500 text-[18px] w-7" />Lorem, ipsum.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default App;