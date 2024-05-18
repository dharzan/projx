import React from 'react'
import TaskSummary from './components/TaskSummary';
import QuickAddTask from './components/QuickAddTask';
import Notifications from './components/Notifications';

function LandingPage({ show }: { show: Boolean }) {

    const [name, setName] = React.useState('');

    // Effect to fetch data on component mount
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/user/profile');  // Adjust the API endpoint as needed
                const data = await response.json();
                setName(data.name);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <>
            <div className='flex items-center justify-center py-4 font-helvetica text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'> Task Manager</div>
            <div className='mt-4 text-lg font-semibold items-center justify-center flex'>
                Welcome, {name}!
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 p-4 bg-white shadow-lg rounded-lg w-full max-w-6xl px-10">
                <TaskSummary />
                <QuickAddTask />
                <Notifications />
            </div>

        </>
    )
}

export default LandingPage
