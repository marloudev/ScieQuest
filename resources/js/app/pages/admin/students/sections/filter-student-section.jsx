import Select from '@/app/pages/components/select';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function FilterStudentSection() {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectError, setSelectError] = useState('');
    const { teachers } = useSelector((state) => state.teachers);

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
        setSelectError('');
    };

    // Map teachers from Redux state to select options
    const selectOptions = teachers?.data?.map((teacher) => ({
        label: `${teacher.fname} ${teacher.lname}`, // Full name as label
        value: teacher.id, // Teacher ID as value
    })) || [];

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
                            placeholder="Select an Adviser"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
