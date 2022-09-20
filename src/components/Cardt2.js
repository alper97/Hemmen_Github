import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';

function App() {
    return (
        <div className="object-cover w-full rounded-lg shadow-lg hover:shadow-xl opacity-80 hover:opacity-100 hover:bg-indigo-500 hover:text-primarywhite bg-slate-50 text-primarygray">
            <a href="/" className="">
                <img src="pdata/img/dcategory/4.jpg" alt="" className="h-28 w-96 fill rounded-t-lg blur-[1px]" />
                <div className="rounded-b-xl p-1 pl-4 ">
                    <h6 className="font-bold">Lorem, ipsum.</h6>
                    <div className="font-normal text-xs ">
                        <p><PersonIcon sx={{ fontSize: 17 }} className="mb-[3px]"/> Lorem, ipsum.</p>
                        <p><StarIcon sx={{ fontSize: 17 }} className="mb-[3px]"/> 1Lorem, ipsum.</p>
                    </div>
                </div>
            </a>

        </div>
    );
}

export default App;