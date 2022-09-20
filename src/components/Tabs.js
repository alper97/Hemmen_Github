import React from "react";
import './ana.css';
import Card from "../components/Cardt1";



const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="grid grid-cols-12">
                <div className="col-span-5">

                    <div className="w-full">
                        <div className="pb-11">
                            <h3 className="text-4xl font-bold pb-3 text-primarygray">
                                Kategoriler
                            </h3>
                            <p className="text-base font-light text-gray-900">Lorem, ipsum dolor..</p>
                        </div>
                        <ul
                            className="flex mb-0 list-none flex-col gap-7 pr-8"
                            role="tablist"
                        >
                            <li className="last:mr-0  flex-auto text-center li">

                                <a
                                    className={
                                        "block leading-normal " +
                                        (openTab === 1
                                            ? "text-white bg-" + color + "-600"
                                            : "text-" + color + "-600 ")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(1);
                                    }}
                                    data-toggle="tab"
                                    href="#link1"
                                    role="tablist"
                                >
                                    <div className=" rounded-xl shadow-lg w-full h-28 relative flex items-center justify-center">
                                        <img src="pdata/img/category/img6.jpg" alt="" className="w-full h-full rounded-xl fill blur-[2px]" />
                                        <p class="text-2xl font-bold absolute w-full bg-[#00000060] hover:bg-[#0000001e] h-full pt-10 rounded-xl">
                                            Lorem, ipsum dolor.
                                        </p>
                                    </div>

                                </a>
                            </li>
                            <li className="last:mr-0  flex-auto text-center li">

                                <a
                                    className={
                                        "block leading-normal " +
                                        (openTab === 2
                                            ? "text-white bg-" + color + "-600"
                                            : "text-" + color + "-600 ")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(2);
                                    }}
                                    data-toggle="tab"
                                    href="#link2"
                                    role="tablist"
                                >
                                    <div className=" rounded-xl shadow-lg w-full h-28 relative flex items-center justify-center">
                                        <img src="pdata/img/category/img5.jpg" alt="" className="w-full h-full rounded-xl fill blur-[2px]" />
                                        <p class="text-2xl font-bold absolute w-full bg-[#00000060] hover:bg-[#0000001e] h-full pt-10 rounded-xl">
                                            Lorem, ipsum dolor.
                                        </p>
                                    </div>

                                </a>
                            </li>
                            <li className="last:mr-0  flex-auto text-center li">

                                <a
                                    className={
                                        "block leading-normal " +
                                        (openTab === 3
                                            ? "text-white bg-" + color + "-600"
                                            : "text-" + color + "-600 ")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(3);
                                    }}
                                    data-toggle="tab"
                                    href="#link3"
                                    role="tablist"
                                >
                                    <div className=" rounded-xl shadow-lg w-full h-28 relative flex items-center justify-center ">
                                        <img src="pdata/img/category/img8.jpg" alt="" className="w-full h-full rounded-xl fill blur-[2px]" />
                                        <p class="text-2xl font-bold absolute w-full  bg-[#00000060] hover:bg-[#0000001e] h-full pt-10 rounded-xl">
                                            Lorem, ipsum.
                                        </p>
                                    </div>

                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="col-span-7 ml-3    ">
                    <p className="text-primarygray text-2xl font-bold pt-2 pb-3 ml-9">Tadilat inşaat hizmetleri</p>
                    <div className=" overflow-auto h-[461px] rounded-xl -webkit-scrollbar -webkit-scrollbar-track -webkit-scrollbar-thumb -webkit-scrollbar-thumb:hover">

                        <div className="relative break-words text-primarygray shadow-lg rounded ">

                            <div className="px-4  flex-auto gap-3 flex flex-col justify-start self-start items-start content-start ">

                                <div className="tab-content tab-space ">
                                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                        <div className="bg-red-400"><Card /></div>
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                    </div>
                                    <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                        <div className="bg-green-400"><Card /></div>
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                    </div>
                                    <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                        <div className="bg-blue-400"><Card /></div>
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mr-10">
                    <button className="text-primarywhite text-2xl font-bold mx-9 mt-12 w-full p-3 rounded-2xl flex justify-center bg-gradient-to-r from-[#E96443] via-[#904E95] to-[#904e9575]">Tüm kategorileri görüntüle</button>

                    </div>
                </div>
            </div>
        </>
    );
};

export default function TabsRender() {
    return (
        <>

            <Tabs color="pink" />;
        </>
    );
}