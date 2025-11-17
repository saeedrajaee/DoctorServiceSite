"use client"
import DoctorList from '@/app/_components/DoctorList';
import React, { useEffect, useState } from 'react'
import { doctorsList } from "@/data/data";

function Search({params}) {

  const [doctorList, setDoctorList] = useState();
  useEffect(() => {
    getDoctorList;
  }, []);
  const getDoctorList = doctorsList;

  return (
    <div className='mt-5'>
        <DoctorList />
    </div>
  )
}

export default Search