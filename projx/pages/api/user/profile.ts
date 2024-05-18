// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// pages/api/user.js
import { getSession } from "next-auth/react";
type Data = {
  name: string;
};
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (session) {

    if(session.user){
      // Return user's name if session exists
      res.status(200).json({ name: session.user.name });

    }
    
  } else {
    // Handle the case where there is no session
    res.status(401).json({ name: "No user signed in" });
  }
}


