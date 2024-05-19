import React from 'react'
import TaskSummary from './components/TaskSummary';
import QuickAddTask from './components/QuickAddTask';
import Notifications from './components/Notifications';
import { Button, TextField, Typography, Box, Container, Grid, Link, AppBar, Toolbar, IconButton } from '@mui/material';


function LandingPage({ show }: { show: Boolean }) {

    const [name, setName] = React.useState('');
    const [photo, setPhoto] = React.useState('');  // State to hold the profile photo URL
    const [suggestion, setSuggestion] = React.useState('');  // State to hold the suggestion input

    const handleInputChange = (event: any) => {
        setSuggestion(event.target.value);  // Update state with input
    };
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
                else {
                    console.log('not here');
                }
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();
    }, []);


    function handleSubmit(event: any): void {
        throw new Error('Function not implemented.');
    }

    return (
        <>

            <AppBar position="static" color="default" elevation={0} sx={{ background: 'transparent', boxShadow: 'none' }}>
                <Toolbar sx={{ justifyContent: 'center', paddingTop: 10 }}>
                    <img src="/golden-ratio.png" alt="Website Logo" style={{ height: '70px', alignItems: 'center', justifyItems: 'center' }} />
                </Toolbar>
            </AppBar>

            {/* <div className='flex items-center justify-center py-4 font-helvetica text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'> Task Manager</div> */}
            <Typography component="h1" variant="h4" sx={{ mb: 3 }} color={'white'} paddingTop={5} fontFamily={'cursive'} textAlign={'center'}>
                Welcome, {name}! {photo}
            </Typography>



            <Box sx={{
                display: 'flex',
                flexDirection: 'column', // Align children in a column
                alignItems: 'center', // Center children horizontally
                justifyContent: 'center', // Center children vertically

                padding: 2,
                backgroundColor: 'black', // Optional: Background color
            }}>                <Typography
                component="h1"
                variant="h4"
                sx={{
                    mb: 3, // margin-bottom
                    color: 'white', // text color
                    pt: 5, // padding-top
                    fontFamily: 'cursive', // font family
                    textAlign: 'center' // text alignment
                }}
            >
                    Enter Suggestions for a projx software as a service (Saas)
                </Typography>

                <TextField

                    label={'type here'}
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                    sx={{
                        width: '50%', // Restrict width to 50% of its parent container
                        maxWidth: '500px', // Maximum width can also be set for larger screens
                        backgroundColor: 'white',
                        borderRadius: 1,
                        mb: 3

                    }}
                />

            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                
                sx={{
                    width: '200px', // Specific width for the button
                    height: '40px', // Set height for better click area
                    paddingTop: '20'
                }}
            >
                Submit
            </Button>

            </Box>




            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 p-4 shadow-lg rounded-lg w-full max-w-6xl px-10">
                {/* <TaskSummary />
                <QuickAddTask />
                <Notifications /> */}
            </div>

        </>
    )
}

export default LandingPage
