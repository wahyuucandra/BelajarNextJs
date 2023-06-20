import { Inter } from 'next/font/google';
import { Hero } from '@/sections/hero';
import { Places } from '@/sections/places';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Loading from '@/sections/loading';
// import { COUNTRY_LIST } from '../../DATA/COUNTRY_LIST';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	// *****
	// TODO:
	// 1. please change how to get the countryList data using Static Side Generation (SSG) from "/api/resort/countries"
	const url = "/api/resort/countries"
	const [data, setdata] = useState([]);
	const [loading, setLoading] = useState(false)

	const getCountries = async () => {
		setLoading(true)
		await fetch(url)
		.then(async (res) => {
			const data = await res.json();
			setdata(data)
		}).catch((err) => {
			console.log(err)
		})
		setLoading(false)
	}

	useEffect(() => {
		getCountries()
	}, [])

	// *****

	return (
		<main>
			<Hero />
			{
				loading ? 
				<section className="py-20 px-6">
				<h2
					style={{
						fontSize: 120,
						marginBottom: 12,
					}}
				>
					Norwood Resorts
				</h2>
				<p className="mb-20">
					At Norwood Resorts, we&apos;re a US-based interior
					design agency that specializes in sustainable
					commercial design. With a track record of
					award-winning projects in Europe, North America, and
					Asia, we&apos;re passionate about creating spaces that
					are both beautiful and environmentally responsible.
					Contact us today to schedule a consultation and see
					how we can help transform your space.
				</p>
				<h3 className="text-2xl font-bold mb-6">Countries</h3>
				<Loading/>
				</section> 
					: 
				<Places countryList={data} />
			}
		</main>
	);
}
