//@ts-nocheck

import { Inter } from 'next/font/google';
import { Hero } from '@/sections/hero';
import { Places } from '@/sections/places';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Loading from '@/sections/loading';
// import { COUNTRY_LIST } from '../../DATA/COUNTRY_LIST';

const inter = Inter({ subsets: ['latin'] });
export default function Create() {
    var url  = "http://localhost:3000/api/country/create"
    const [data, setData] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        image_url: "",
    });

    const submitForm  = async (e) => {
        e.preventDefault()

        fetch(url, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
          }).then((res) => {
            const response = res.json()
            response.then((data) => {
                alert(data.message)
            })
          })

          return true
    };

    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }

	return (
        <main>
            <form id="createCountry" className="center-flex wd-30 gap-1" action="http://localhost:3000/list" onSubmit={submitForm}>
                <div className="center-flex">
                    <label htmlFor="name">Name Country</label>
                    <input type="text" name="name" onChange={handleInput} onClick={handleInput} required={true} />
                    
                    <label htmlFor="image_url">Link Image</label>
                    <input type="text" name="image_url" onChange={handleInput} onClick={handleInput} required={true} />
                </div>
                <button className="btn-submit">Create Country</button>
            </form>
        </main>
	);
}
