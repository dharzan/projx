// pages/api/tasks/[taskId].ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { tasks  } from './manageTasks';  // Assuming you are exporting 'tasks' array and Task type from tasks.ts

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { taskId } = req.query;  // Extracting taskId from URL
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex === -1) {
        // If no task is found with the given ID, return a 404
        res.status(404).json({ error: 'Task not found' });
        return;
    }

    switch (req.method) {
        case 'GET':
            // Return the requested task
            res.status(200).json(tasks[taskIndex]);
            break;

        case 'PUT':
            // Update the task based on the provided data
            const { title, description, completed } = req.body;
            const updatedTask = {
                ...tasks[taskIndex],
                title: title || tasks[taskIndex].title,
                description: description || tasks[taskIndex].description,
                completed: completed === undefined ? tasks[taskIndex].completed : completed
            };

            tasks[taskIndex] = updatedTask;  // Update the task in the array
            res.status(200).json(updatedTask);
            break;

        case 'DELETE':
            // Remove the task from the array
            tasks.splice(taskIndex, 1);
            res.status(204).end();  // No content to send back
            break;

        default:
            // Handle any other HTTP method
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
