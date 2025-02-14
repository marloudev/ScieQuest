import React from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { router } from '@inertiajs/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ClearIcon } from '@mui/x-date-pickers-pro';

export default function SearchSection() {

    // Handle input change and update parent component's search state
    const [search, setSearch] = useState("");
    const params = new URLSearchParams(window.location.search);
    params.set("searching", search);

    const url = window.location.pathname + window.location.search;

    const getQueryParam = (url, paramName) => {
        const searchParams = new URLSearchParams(url.split("?")[1]);
        return searchParams.get(paramName);
    };

    const searching = getQueryParam(url, "searching");
    // const categories = getQueryParam(url, "categories");

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    useEffect(() => {
        setSearch(searching);
    }, [searching]);

    function search_data(e) {
        e.preventDefault();
        router.visit(window.location.pathname + '?searching=' + search);
    }

    function clearSearch() {
        setSearch("");
        router.visit(window.location.pathname);
    }

    return (
        <Paper
            component="form"
            onSubmit={search_data} // Use custom submit handler to prevent reload
            sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}  // Update search query on input change
            />
            {search && (
                <IconButton
                    sx={{ p: "10px" }}
                    aria-label="clear"
                    onClick={clearSearch} // Call clearSearch function when clicked
                >
                    <ClearIcon />
                </IconButton>
            )}
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
            </IconButton>

        </Paper>
    );
}
