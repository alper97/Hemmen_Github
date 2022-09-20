import React from "react";
import PersonIcon from '@mui/icons-material/Person';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';

import Card from "../components/Cardt3";
import VillageBut from "../components/VillageBut";




function App() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div>
            <hr className="p-1 bg-slate-200 mx-3 rounded-lg" />
            <div className="flex justify-between mx-5 mt-4 text-lg text-primarygray font-bold items-center">
                <div className="flex items-center gap-2">
                    <PersonIcon />
                    <p>Lorem, ipsum.</p>
                </div>
                <div>
                    <Button
                        id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >

                        <div className="rounded-lg text-base text-primarygray font-semibold border-spacing-1 border p-2 px-3 gap-3 flex bg-white">

                            Sıralama
                            <KeyboardArrowDownIcon />
                        </div>
                    </Button>
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={handleClose}>Lorem, ipsum.</MenuItem>
                        <MenuItem onClick={handleClose}>Lorem, ipsum.</MenuItem>
                    </Menu>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-3 mx-3">
                <div className="border rounded-lg p-3 w-full col-span-3 flex flex-col gap-2">
                    <div>
                        <h3 className="text-lg text-primarygray font-bold">Lorem, ipsum.</h3>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                    <div>
                        <h3 className="text-lg text-primarygray font-bold">Lorem, ipsum.</h3>
                        <div>
                            <Stack spacing={-1}>
                                <a href="/" className="flex items-center"><Checkbox size="small"/><Rating name="half-rating-read" defaultValue={1} precision={0.5} readOnly /></a>
                                <a href="/" className="flex items-center"><Checkbox size="small"/><Rating name="half-rating-read" defaultValue={2} precision={0.5} readOnly /></a>
                                <a href="/" className="flex items-center"><Checkbox size="small"/><Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly /></a>
                                <a href="/" className="flex items-center"><Checkbox size="small"/><Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly /></a>
                                <a href="/" className="flex items-center"><Checkbox size="small"/><Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly /></a>                            
                            </Stack>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-lg text-primarygray font-bold">Adres</h3>
                        <VillageBut/>
                        <VillageBut/>
                    </div>
                </div>
                <div className="w-full h-full col-span-9 p-7 grid grid-cols-3 gap-5 grid-flow-row auto-rows-max">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                   
                </div>
            </div>

        </div>
    );
}

export default App;