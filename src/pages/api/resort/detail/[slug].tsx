// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//@ts-nocheck
import type { NextApiRequest, NextApiResponse } from 'next';

import { delay } from '@/lib/delay';
import { RESORT_LIST } from '../../../../../DATA/RESORT_LIST';
import prisma from '@/lib/prisma';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const data = req.query.slug;
	const resort = await prisma.resort.findFirst({ where: { slug: data} });
	// const resort = resorts.find((resort) => resort.slug === slug);
	
	await delay(2000);
	if (resort) {
		res.status(200).json(resort);
	} else {
		res.status(404).json({ error: 'Resort Not found' });
	}
}
