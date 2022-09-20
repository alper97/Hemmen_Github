import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import SidePro from "../components/SidePro";
import MainPro from "../components/MainPro";




function App() {
    return (
        <div>
            <section class="bg-gray-100  w-full flex flex-col">
                <div className="h-44 w-full rounded-xl shadow-lg relative flex items-center justify-center">
                    <img src="pdata/img/dcategory/4.jpg" alt="" className="shadow-md h-full w-full fill brightness-50 blur-[1px] opacity-90" />
                </div>
                <div className="w-full p-3 grid grid-cols-12 gap-6">
                    <div className="col-span-3 ">
                        <SidePro/>
                    </div>
                    <div className="col-span-9 ">
                        <Breadcrumbs />
                        <MainPro/>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default App;