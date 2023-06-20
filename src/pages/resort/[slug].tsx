//@ts-nocheck

import { generateRandomImg } from '@/lib/generateRandomImg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { RESORT_LIST } from '../../../DATA/RESORT_LIST';
import { useEffect, useState } from 'react';
import Loading from '@/sections/loading';

export default function Page() {
	// *****
	// TODO:
	// 1. please change how to get the resort data using Server Side Rendering (SSR) according to the url slug from "/api/resort/detail/slug"
	// const data = RESORT_LIST[0];
	const router = useRouter()
	const {slug} =  router.query

	const url = `/api/resort/detail/${slug}`
	const [data, setdata] = useState([]);
	const [loading, setLoading] = useState(false)

	const getSlug = async () => {
		setLoading(true)
		await fetch(url)
		.then(async (res) => {
			const data = await res.json();
			setdata(data)
		}).catch((err) => {
			console.log("err" + err)
		})
		setLoading(false)
	}

	useEffect(() => {
		getSlug()
	}, [slug])
	// *****
	return (
		<main>
			{
				loading ? <Loading/> : 
				<div>
					<Image
						src={data.image_url}
						alt={data.name}
						width={1440}
						height={900}
						className="w-full max-h-[70vh] object-cover"
					/>
					<div className="text-center max-w-[1200px] mx-auto my-40">
						<h1 className="text-4xl mx-auto w-fit mb-8">
							{data.name}
						</h1>
						<p>{data.description}</p>
					</div>
				</div>
			}	
		</main>
	);
}
