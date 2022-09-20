import React from "react";
import './ana.css';

function App() {
    return (
        <div className="flex mx-6 my-5 max-h-24">
            <div >
                <img src="pdata/img/dcategory/1.jpg" alt="" className="max-h-24 w-96 fill  rounded-xl blur-[1px]" />
            </div>
            <div className="px-4 max-h-24">
                <h4 className="text-xl font-bold text-primarygray -mt-1"><a href="/">Lorem, ipsum.</a></h4>
                <ul className="text-base font-light text-gray-900 flex flex-wrap gap-x-7 mx-4">
                    <li><a href="/">Lorem, ipsum.</a></li>
                    <li><a href="/">Lorem, ipsum.</a></li>
                    <li><a href="/">Lorem, ipsum.</a></li>
                    <li><a href="/">Lorem, ipsum.</a></li>
                    <li><a href="/">Lorem, ipsum.</a></li>
                    <li><a href="/">Lorem, ipsum.</a></li>
                    <li><a href="/">Lorem, ipsum.</a></li>
                    <li><a href="/">Lorem, ipsum.</a></li>
                </ul>
            </div>
        </div>
    );
}

export default App;
