import Link from 'next/link';
import { COUNTRY_LIST } from '../../DATA/COUNTRY_LIST';
import { useEffect, useState } from 'react';

export const Sidebar = () => {
	// *****
	// TODO:
	// 1. please change how to get the data using client-side fetching from "/api/resort/countries"
	// 2. check if the country parameter and filter the data accordingly
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
	// *****`/list?country=${country.slug}`
	return (
		<div>
			<h3 className="font-bold mb-6">COUNTRIES</h3>
			<div className="flex flex-col gap-4">
				{data.map((country) => (
					<Link
						key={country.slug}
						href={{pathname:'/list', query:{country:country.slug}}}
						className="hover:underline"
					>
						- {country.name}
					</Link>
				))}
			</div>
		</div>
	);
};
