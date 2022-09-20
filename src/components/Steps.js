import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import { MdOutlineLibraryBooks } from "react-icons/md";
import { HiOutlineThumbUp } from "react-icons/hi";


export const Step = () => {
    return (
        <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-xl font-bold leading-none tracking-tight text-gray-900 sm:text-2xl md:mx-auto">
                    Lorem ipsum dolor sit.?
                </h2>
            </div>
            <div className="grid gap-8 row-gap-8 lg:grid-cols-3 px-8">
                <div className="sm:text-center">
                    <div className="flex items-center justify-center w-24 h-24 my-5 font-extrabold rounded-full text-deep-purple-accent-400 sm:mx-auto border-4 border-primarygray shadow-md">
                        <MdOutlineLibraryBooks className='text-5xl text-primarygray ' />
                    </div>
                    <h6 className="my-5 font-bold leading-5 text-primarygray text-lg mt-7">Lorem ipsum dolor sit.</h6>
                    <p className="max-w-md mb-3 text-base font-light text-gray-900 sm:mx-auto">
                        Lorem ipsum dolor sit amet consectetur. <br />
                         Lorem, ipsum dolor..
                    </p>
                </div>
                <div className="sm:text-center">
                    <div className="flex text-primarygray items-center justify-center w-24 h-24 my-5 font-extrabold rounded-full text-deep-purple-accent-400 sm:mx-auto border-4 border-primarygray shadow-md">
                        <HowToRegOutlinedIcon sx={{ fontSize: 50 }} />
                    </div>
                    <h6 className="my-5 font-bold leading-5 text-primarygray text-lg mt-7">Lorem ipsum dolor sit.</h6>
                    <p className="max-w-md mb-3 text-base font-light text-gray-900 sm:mx-auto">
                        Lorem ipsum dolor sit amet consectetur. <br />
                        Lorem ipsum dolor sit..
                    </p>
                </div>
                <div className="sm:text-center">
                    <div className="flex  items-center justify-center w-24 h-24 my-5 font-extrabold rounded-full text-deep-purple-accent-400 sm:mx-auto border-4 border-primarygray shadow-md">
                        <HiOutlineThumbUp className='text-5xl text-primarygray ' />
                    </div>
                    <h6 className="my-5 font-bold leading-5 text-primarygray text-lg mt-7">Lorem, ipsum.</h6>
                    <p className="max-w-md mb-3 text-base font-light text-gray-900 sm:mx-auto">
                    Lorem ipsum dolor sit amet consectetur.<br />
                     Lorem ipsum dolor sit..
                    </p>
                </div>
            </div>
        </div>
    );
};