import { Inter } from 'next/font/google';
import { Hero } from '@/sections/hero';
import { Places } from '@/sections/places';
import { COUNTRY_LIST } from '../../DATA/COUNTRY_LIST';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	// *****
	// TODO:
	// 1. please change how to get the countryList data using Static Side Generation (SSG) from "/api/resort/countries"

	const countryList = COUNTRY_LIST;

	// *****

	return (
		<main>
			<Hero />
			<Places countryList={countryList} />
		</main>
	);
}
