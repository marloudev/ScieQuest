import Select from "@/app/pages/components/select";
import { router } from "@inertiajs/react";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function FilterModuleSection() {
    const [selectedQuarter, setSelectedQuarter] = useState("");
    const [selectedModule, setSelectedModule] = useState("");
    const [selectError, setSelectError] = useState("");
    const { teachers } = useSelector((state) => state.teachers);
    const { booklets } = useSelector((state) => state.booklets);
    const params = new URLSearchParams(window.location.search);
    const module = params.get("module");
    const quarter = params.get("quarter");

    useEffect(()=>{
        setSelectedQuarter(quarter??'')
        setSelectedModule(module??'')
    },[])

    // Handle Quarter Selection
    const handleQuarterChange = (e) => {
        setSelectedQuarter(e.target.value);
        setSelectError("");
        setSelectedModule("");
    };

    // Handle Module Selection
    const handleModuleChange = (e) => {
        setSelectedModule(e.target.value);
        setSelectError("");
    };

    // Select options for Quarters (Fix: Added label-value pairs)
    const quarterOptions = [
        { label: "1st Quarter", value: "1st Quarter" },
        { label: "2nd Quarter", value: "2nd Quarter" },
        { label: "3rd Quarter", value: "3rd Quarter" },
        { label: "4th Quarter", value: "4th Quarter" },
    ];

    // Map teachers from Redux state to select options
    const moduleOptions =
        booklets
            ?.filter((res) => res.quarter == selectedQuarter)
            ?.map((booklets) => ({
                label: `${booklets.title}`,
                value: booklets.title,
            })) || [];
console.log(selectedQuarter)
    function search_module(params) {

        router.visit(`?quarter=${selectedQuarter}&module=${selectedModule}`)
    }
    return (
        <div>
            <div className="flex gap-3">
                <div className="flex gap-5 mt-2">
                    {/* Fixed: Select Quarter */}
                    <Select
                        label="Select Quarter"
                        options={quarterOptions}
                        value={selectedQuarter}
                        onChange={handleQuarterChange}
                        error={selectError}
                        placeholder="Select Quarter"
                    />

                    {/* Fixed: Select Module */}
                    <Select
                        label="Select Module"
                        options={moduleOptions}
                        value={selectedModule}
                        onChange={handleModuleChange}
                        error={selectError}
                        placeholder="Select Module"
                    />
                </div>
                <Button
                    variant="contained"
                    onClick={search_module}
                    className="w-52"
                >
                    Search
                </Button>
            </div>
        </div>
    );
}
