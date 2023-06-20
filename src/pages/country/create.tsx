import { Inter } from 'next/font/google';
import { Hero } from '@/sections/hero';
import { Places } from '@/sections/places';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Loading from '@/sections/loading';
// import { COUNTRY_LIST } from '../../DATA/COUNTRY_LIST';

const inter = Inter({ subsets: ['latin'] });

export default function Create() {

    const [countryName, setCountryName] = useState("")

    const createCountry = async () =>{
        console.log("clicked")
        // const name = document.getElementById('name') as HTMLInputElement | null
        // console.log(name ? name.value : "kosong ")
    }


	return (
        <main>
            <form action="http://localhost:3000/api/country/create" method="POST" className="center-flex wd-30 gap-1">
                <div className="center-flex">
                    <label htmlFor="name">Name Country</label>
                    <input type="text" name="name" required={true}/>
                    
                    <label htmlFor="image_url">Link Image</label>
                    <input type="text" name="image_url" required={true}/>
                </div>
                <button>Create Country</button>
            </form>
        </main>
	);
}
