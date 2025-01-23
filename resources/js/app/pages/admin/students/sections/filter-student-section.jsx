import Select from '@/app/pages/components/select'
import React from 'react'
import { useState } from 'react';

export default function FilterStudentSection() {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectError, setSelectError] = useState('');
    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
        setSelectError('');
    };

    const selectOptions = [
        { label: 'Teacher 1', value: '1' },
        { label: 'Teacher 2', value: '2' },
        { label: 'Teacher 3', value: '3' },
    ];
    return (
        <div>
            <div className="flex">
                {/* Select */}
                <div className="flex flex-col">
                    <div className="flex flex-col mt-2">
                        <Select
                            label="Select an Adviser"
                            options={selectOptions}
                            value={selectedOption}
                            onChange={handleSelectChange}
                            error={selectError}
                            placeholder="Select your barangay"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
