import React, { useState, useEffect } from 'react';
import AdminLayout from '../layout';
import TableSection from './sections/table-section';
import PaginationSection from './sections/pagination-section';
import SearchSection from './sections/search-section';
import CreateSection from './sections/create-section';
import { useDispatch } from 'react-redux';
import { get_teachers_thunk } from './redux/teachers-thunk';

export default function AdminInstructorPage() {
  const [search, setSearch] = useState('');  // Manage search query in local state
  const dispatch = useDispatch();

  // Fetch teachers when search query changes or component mounts
  useEffect(() => {
    dispatch(get_teachers_thunk(search));  // Dispatch search query to thunk
  }, [search, dispatch]);

  return (
    <AdminLayout>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <CreateSection />
          <SearchSection search={search} setSearch={setSearch} />
        </div>
        <div className="flex flex-col items-center justify-between h-[82vh] w-full">
          <TableSection />
          <PaginationSection />
        </div>
      </div>
    </AdminLayout>
  );
}
