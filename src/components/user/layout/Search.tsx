'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { icons } from '@/exports/images';
import { useNavigate } from 'react-router';
// import SearchIcon from "../../assets/images/homePage/SearchIcon.svg"


const Search = ({ classNames } : SearchProps) => {
    // const navigate = useNavigate();

    const [keyword, setKeyword] = useState('');

    const searchHandler = () => {
        console.log("Searching...");

        // if (keyword) {
        //     navigate(`/search/${keyword}`);
        // }

    };

    return (
        <form
            onSubmit={searchHandler}
        >
            <div className={`input-group ${classNames}`}>
                <input
                    type="text"
                    // id="search_field"
                    className="form-control search-field text-white"
                    placeholder="Explore Listing"
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <div className="input-group-append py-0">
                    <button id="search_btn " className="btn search-btn" >
                        <Image src={icons.SearchIcon} alt="search" />
                    </button>
                </div>
            </div>
        </form>
    )
}

interface SearchProps {
    classNames : string
}

export default Search