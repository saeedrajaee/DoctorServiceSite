"use client";

import { doctorsList } from "../../data/data";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getDoctorListImage } from "@/(route)/doctorList/card/doctorCategory/product-image";

function DoctorList({ DoctorLists }) {
  const [doctorList, setDoctorList] = useState();
  useEffect(() => {
    getDoctorList;
  }, []);
  const getDoctorList = DoctorLists;

  return (
    <div className=" mb-10 px-10">
      <h2 className=" font-bold text-xl">Popular Doctor</h2>
      <div className=" grid grid-cols-2 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {DoctorLists.length > 0 ? DoctorLists.map((data, i) => {
          return (
            <div key={data.id} className="border-[1px] rounded-lg p-3 transition-all ease-in-out cursor-pointer hover:border-blue-600 hover:shadow-sm">
              <img
                src={getDoctorListImage(data.id)}
                alt="icon"
                width={500}
                height={200}
                className=" h-[200px] w-full object-cover rounded-lg"
              />
              <div className=" mt-3 items-baseline flex flex-col gap-1">
                <h2 className="text-[12px] bg-blue-100 p-1 rounded-full px-2 text-blue-600">
                  {data.category}
                </h2>
                <h2 className=" font-bold">{data.name}</h2>
                <h2 className=" text-blue-600 text-smّ">
                  {data.yearsOfExprience} Years
                </h2>
                <h2 className=" text-gray-500 text-smّ">{data.address}</h2>

                <h2 className=" p-2 px-3 border-[1px] border-blue-600 text-blue-500 rounded-full w-full text-center text-[11px] mt-2 cursor-pointer hover:bg-blue-600 hover:text-white">
                  Book Now
                </h2>
              </div>
            </div>
          );
        })
          :
          // Skelton Effect
          [1, 2, 3, 4, 5, 6].map((item, index) => (

            <div className=" h-[220px] bg-slate-200 w-full rounded-lg animate-pulse"> </div>
          ))
        }
      </div>
    </div>
  );
}

export default DoctorList;
