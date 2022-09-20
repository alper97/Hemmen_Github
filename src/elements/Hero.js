import React from "react";





function App() {
    return (
        <div class="py-16 ">
            <section class="bg-gray-100  w-full ">
                <div class="lg:flex lg:max-w-full lg:shadow-2xl bg-gradient-to-r from-[#E96443] to-[#904E95] via-[#700e7775] shadow-2xl">
                    <div class="max-w-xl px-12 py-12 lg:max-w-5xl lg:w-3/5 flex flex-col items-center gap-3 ">
                        <h2 class="text-2xl font-bold text-primarywhite  md:text-3xl">Lorem ipsum dolor sit.</h2>
                        <p class="mt-4 text-primarywhite flex flex-col text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum.</p>
                        <div class="mt-8">
                            <a href="/" class="px-5 py-2 font-semibold text-primarygray transition-colors duration-300 transform bg-primarywhite rounded-md hover:bg-primarygray hover:text-primarywhite">İletişim</a>
                        </div>
                    </div>
                    <div class="lg:w-2/5 ">
                        <div class="bg-cover lg:rounded-lg lg:h-full" >
                            <img src="pdata/img/detay/Mektup.png" alt="" className="max-w-sm -mt-11 h-auto absolute"/>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default App;
