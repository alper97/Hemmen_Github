import React from "react";
import '../components/ana.css';
import Card from "../components/Cardt2";



const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="flex flex-col">
                <div className="col-span-5">

                    <div className="w-full px-8">
                        <ul
                            className="grid grid-cols-3 list-none gap-7 "
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
                                        <img src="pdata/img/dcategory/1.jpg" alt="" className="w-full h-full rounded-xl fill blur-[2px]" />
                                        <p class="text-2xl font-bold absolute w-full bg-[#00000060] hover:bg-[#0000001e] h-full pt-10 rounded-xl">
                                            Lorem, ipsum.
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
                                        <img src="pdata/img/dcategory/4.jpg" alt="" className="w-full h-full rounded-xl fill blur-[2px]" />
                                        <p class="text-2xl font-bold absolute w-full bg-[#00000060] hover:bg-[#0000001e] h-full pt-10 rounded-xl">
                                        Lorem, ipsum.
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
                                        <img src="pdata/img/dcategory/5.jpeg" alt="" className="w-full h-full rounded-xl fill blur-[2px]" />
                                        <p class="text-2xl font-bold absolute w-full  bg-[#00000060] hover:bg-[#0000001e] h-full pt-10 rounded-xl">
                                        Lorem, ipsum.
                                        </p>
                                    </div>

                                </a>
                            </li>
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
                                        <img src="pdata/img/dcategory/3.jpg" alt="" className="w-full h-full rounded-xl fill blur-[2px]" />
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
                                    <div className=" rounded-xl shadow-lg w-full h-28 relative flex items-center justify-center">
                                        <img src="pdata/img/category/img5.jpg" alt="" className="w-full h-full rounded-xl fill blur-[2px]" />
                                        <p class="text-2xl font-bold absolute w-full bg-[#00000060] hover:bg-[#0000001e] h-full pt-10 rounded-xl">
                                        Lorem, ipsum.
                                        </p>
                                    </div>

                                </a>
                            </li>
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
                                        <img src="pdata/img/category/img5.jpg" alt="" className="w-full h-full rounded-xl fill blur-[2px]" />
                                        <p class="text-2xl font-bold absolute w-full bg-[#00000060] hover:bg-[#0000001e] h-full pt-10 rounded-xl">
                                           Lorem, ipsum dolor.
                                        </p>
                                    </div>

                                </a>
                            </li>
                        </ul>

                    </div>
                    <div className=" mt-8 justify-center flex w-full">
                        <button className="text-primarywhite text-xl font-bold  w-1/4 p-3 rounded-2xl flex justify-center bg-gradient-to-r from-[#E96443] via-[#904E95] to-[#904e9575]">Tüm kategorileri görüntüle</button>

                    </div>
                </div>
                <div className="flex flex-col  ">
                    <p className="text-primarygray text-2xl font-bold pt-2 pb-3 ml-9">Lorem, ipsum dolor.</p>
                    <div className=" overflow-auto h-[461px] rounded-xl -webkit-scrollbar -webkit-scrollbar-track -webkit-scrollbar-thumb -webkit-scrollbar-thumb:hover">

                        <div className="relative break-words text-primarygray shadow-lg rounded ">

                            <div className="px-4">

                                <div className="tab-content tab-space  ">
                                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                        <hr className="h-6 m-3 bg-blue-300" />
                                        <div className="grid grid-cols-4 gap-8 mx-4">
                                            <Card class="hover:bg-slate-800" />
                                            <Card />
                                            <Card />
                                            <Card />
                                            <Card />
                                            <Card />
                                            <Card />
                                            <Card />
                                            <Card />
                                            <Card />
                                        </div>


                                    </div>
                                    <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                        <hr className="h-6 m-3 bg-red-600" />
                                        <div className="grid grid-cols-4 gap-8 mx-4">
                                            <Card class="hover:bg-slate-800" />
                                            <Card />
                                            <Card />
                                            <Card />
                                            <Card />
                                            <Card />
                                            <Card />
                                            <Card />
                                            <Card />
                                            <Card />
                                        </div>
                                    </div>
                                    <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                        <hr className="h-6 m-3 bg-green-500" />
                                        <div className="grid grid-cols-4 gap-8 mx-4">
                                            <Card class="hover:bg-slate-800" />
                                            <Card />
                                            <Card />
                                            <Card />
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
                    </div>
                    <div className=" mt-8 justify-center flex w-full">
                        <button className="text-primarywhite text-xl font-bold  w-1/4 p-3 rounded-2xl flex justify-center bg-gradient-to-r from-[#E96443] via-[#904E95] to-[#904e9575]">Tüm kategorileri görüntüle</button>

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