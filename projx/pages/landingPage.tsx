import React from 'react'
import TaskSummary from './components/TaskSummary';
import QuickAddTask from './components/QuickAddTask';
import Notifications from './components/Notifications';
import { Button, TextField, Typography, Box, Container, Grid, Link, AppBar, Toolbar, IconButton } from '@mui/material';


function LandingPage({ show }: { show: Boolean }) {

    const [name, setName] = React.useState('');
    const [photo, setPhoto] = React.useState('');  // State to hold the profile photo URL

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/user/profile');  // Ensure the endpoint is correct
                const data = await response.json();
                if (data.name) {
                    setName(data.name);
                }
                if (data.image) {
                    console.log("here");
                    setPhoto(data.image);  // Set the profile photo URL
                }
                else{
                    console.log('not here');
                }
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <>

            {/* <div className='flex items-center justify-center py-4 font-helvetica text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'> Task Manager</div> */}
            <Typography component="h1" variant="h4" sx={{ mb: 3 }} color={'white'} paddingTop={5} fontFamily={'cursive'} textAlign={'center'}>
                Welcome, {name}! {photo}
            </Typography>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 p-4 shadow-lg rounded-lg w-full max-w-6xl px-10">
                {/* <TaskSummary />
                <QuickAddTask />
                <Notifications /> */}
            </div>

        </>
    )
}

export default LandingPage
