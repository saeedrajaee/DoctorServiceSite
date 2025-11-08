"use client"
import { doctorsList } from '../../../../data/data';
import React, { useEffect, useState } from 'react'

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