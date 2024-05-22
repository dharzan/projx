import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
    api: {
        externalResolver: true,
    },
}


let suggestions: string[] = [];


export default function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'POST') {
        const { suggestion } = req.body;
        if (suggestion && typeof suggestion === 'string') {

            suggestions.push(suggestion);
            res.status(200).json({ message: 'Suggestion received', suggestion });
            console.log(suggestions);
        }
        else {
            res.status(400).json({ message: 'No suggestion provided or invalid data format' });
        }

    }

    else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}


