import React from "react";
import "../components/ana.css"
import Searchbar from "../components/Searchbar"
import Breadcrumbs from "../components/Breadcrumbs";




function App() {
    return (
        <div>
            <section class="bg-gray-100  w-full flex flex-col">
                <div className="h-44 w-full rounded-xl shadow-lg relative flex items-center justify-center">
                    <img src="pdata/img/dcategory/4.jpg" alt="" className="h-full w-full fill brightness-50 blur-[1px]" />
                    <p class="text-3xl font-semibold absolute flex items-center w-full pl-16 h-full bg-[#0000ff25]">
                        Lorem, ipsum dolor.
                    </p>
                    <div class="absolute flex w-full justify-end pr-16">
                        <Searchbar />
                    </div>
                </div>
                <div className="w-full m-4">
                <Breadcrumbs />
                </div>
            </section>

        </div>
    );
}

export default App;