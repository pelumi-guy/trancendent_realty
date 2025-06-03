'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Search from '../layout/Search';
import { icons } from '@/exports/images';

const SearchForYourDreamHome = () => {

    const [keyword, setKeyword] = useState('');

    const searchHandler = () => {
        // console.log("Searching...");

        // if (keyword) {
        //     navigate(`/search/${keyword}`);
        // }

    };

    return (
        <section>
            <h3>Search For Your Dream Home </h3>
            <Search classNames='landing-main-search rounded-pill' />

            <div className="row">
                <div className="col-6 show-border">
                    <select name='Location' id='Location' className='landing-search-filter show-border'>
                        <option value="Lagos">Location</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Abuja">Abuja</option>
                    </select>
                </div>
                <div className="col-6 show-border">
                    <select name='Location' id='Location' className='landing-search-filter show-border'>
                        <optgroup label="Location">Property Type</optgroup>
                        <option value="Lagos">Lagos</option>
                        <option value="Abuja">Abuja</option>
                    </select>
                </div>
            </div>



        </section>
    )
}

export default SearchForYourDreamHome