import type { NextApiRequest, NextApiResponse } from "next";
// Type definitions for the task object
type Task = {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
    createdAt: Date;
};

// This could be an array, a database, or any other type of storage you are using
export const tasks: Task[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':
            // Handle GET request - list all tasks
            res.status(200).json(tasks);
            break;

        case 'POST':
            // Handle POST request - create a new task
            const { title, description } = req.body;
            
            if (!title) {
                return res.status(400).json({ error: 'Title is required' });
            }

            // Create a new task object
            const newTask: Task = {
                id: new Date().toISOString(),  // Simple ID generation
                title,
                description,
                completed: false,  // Default new tasks to not completed
                createdAt: new Date()
            };

            tasks.push(newTask);  // Save the new task in the array
            res.status(201).json(newTask);
            break;

        default:
            // Handle any other HTTP method
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}