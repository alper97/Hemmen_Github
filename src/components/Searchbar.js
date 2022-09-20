import React from "react";
import EastIcon from '@mui/icons-material/East';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';



function App() {
    return (
        <form action="" method="post" id="revue-form" name="revue-form" target="_blank" class="p-1 transition duration-500 ease-in-out transform border2 bg-gray-50 rounded-full sm:max-w-lg sm:flex">
            <div class="flex-1 min-w-0 revue-form-group relative">
                <SearchRoundedIcon class="absolute w-8 ml-3 mt-2 "/>
                <label for="gsearch" class="sr-only">Aradığın hizmeti gir</label>
                <input id="gsearch" type="search" class="block w-full px-5 py-3 pl-11 text-base text-zinc-500 font-bold placeholder-slate-400 placeholder:font-light transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-l-full focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Aradığını hizmeti gir.  "></input>
            </div>
            <div class="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
                <button type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" class="block w-full px-5 h-full text-base font-medium text-white bg-pbutton border border-transparent rounded-l-sm rounded-r-full shadow hover:bg-phbutton focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10"><EastIcon fontSize="large" color="primarywhite"/></button>
            </div>
        </form>
    );
}

export default App;
