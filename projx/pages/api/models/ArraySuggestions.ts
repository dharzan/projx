// pages/api/models/suggestions.ts
import { addDoc, collection } from 'firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../utility/lib/firebase';



export const config = {
   api: {
       externalResolver: true,
   },
};
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   if (req.method === 'POST') {
       const { suggestion } = req.body;
       if (suggestion && typeof suggestion === 'string') {
           try {
               const docRef = await addDoc(collection(db, 'suggestions'), {
                   suggestion,
                   timestamp: new Date(),
               });
               res.status(200).json({ message: 'Suggestion received', suggestion });
               console.log('Document written with ID: ', docRef.id);
           } catch (error) {
               console.error('Error adding document: ', error);
               res.status(500).json({ message: 'Internal Server Error' });
           }
       } else {
           res.status(400).json({ message: 'No suggestion provided or invalid data format' });
       }
   } else {
       res.status(405).json({ message: 'Method not allowed' });
   }
}