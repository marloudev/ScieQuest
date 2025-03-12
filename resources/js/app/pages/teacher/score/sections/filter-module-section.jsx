import Select from '@/app/pages/components/select';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function FilterModuleSection() {
    const [selectedQuarter, setSelectedQuarter] = useState('');
    const [selectedModule, setSelectedModule] = useState('');
    const [selectError, setSelectError] = useState('');
    const { teachers } = useSelector((state) => state.teachers);
    const { booklets } = useSelector((state) => state.booklets)


    // Handle Quarter Selection
    const handleQuarterChange = (e) => {
        setSelectedQuarter(e.target.value);
        setSelectError('');
    };

    // Handle Module Selection
    const handleModuleChange = (e) => {
        setSelectedModule(e.target.value);
        setSelectError('');
    };

    // Select options for Quarters (Fix: Added label-value pairs)
    const quarterOptions = [
        { label: '1st Quarter', value: '1st Quarter' },
        { label: '2nd Quarter', value: '2nd Quarter' },
        { label: '3rd Quarter', value: '3rd Quarter' },
        { label: '4th Quarter', value: '4th Quarter' }
    ];

    // Map teachers from Redux state to select options
    const moduleOptions = booklets?.map((booklets) => ({
        label: `${booklets.title}`,
        value: booklets.id,
    })) || [];

    console.log('bookleets', booklets)
    return (
        <div>
            <div className="flex">
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
            </div>
        </div>
    );
}
