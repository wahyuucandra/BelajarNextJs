// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//@ts-nocheck
import type { NextApiRequest, NextApiResponse } from 'next';

import { delay } from '@/lib/delay';
import prisma from '@/lib/prisma';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {

	if(!req.method === 'POST'){ 
		res.status(405).json({ error: 'Method Not Allowed' });
	}

	const { name, image_url } = req.body
    const country = await prisma.country.create({
        data:{
            name  : name,
			slug : name.toLowerCase(),
			image_url : image_url
        }
      })
	
	await delay(2000);
	if (country) {
		res.status(200).json(country);
	} else {
		res.status(404).json({ error: 'Page Not found' });
	}
}
