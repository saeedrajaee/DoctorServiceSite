"use client";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { doctorCategory } from "../../data/data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

function CategorySearch() {
  const [categoryList, setCategoryList] = useState();
  useEffect(() => {
    getCategoryList;
  }, []);
  const getCategoryList = doctorCategory;
  return (
    <div className=" mb-10 items-center px-5 flex flex-col gap-4">
      <h2 className=" font-bold text-4xl tracking-wide">
        Search
        <span className=" text-blue-600"> Doctors</span>
      </h2>
      <h2 className=" text-gray-400 text-xl">
        Search Your Doctor and Book Appointment in one click{" "}
      </h2>
      <div className="flex w-full max-w-sm items-center gap-2">
        <Input type="text" placeholder="Search..." />
        <Button type="submit">
          <Search className=" h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
      {/* Dispaly List of Category */}
      <div className=" grid grid-cols-2 mt-5ّ md:grid-cols-3 lg:grid-cols-4">
        {doctorCategory.length>0?doctorCategory.map((data, i) => {
          return (
            <Link href={'/search/'+data.name}
              key={data.id}
              className="flex flex-col text-center
               items-center p-5 bg-blue-50 m-2
               rounded-lg gap-2 hover:scale-110
                transition-all ease-in-out cursor-pointer"
            >
              <Image src={data.image} alt="icon" width={40} height={40} />
              <label className=" text-blue-600 text-sm">{data.name}</label>
            </Link>
          );
        })
      :
             [1,2,3,4,5,6].map((item,index)=>(

        <div className="w-[130px] h-[120px] bg-slate-200 w-full rounded-lg animate-pulse"> </div>
      ))
      }
      </div>
    </div>
  );
}

export default CategorySearch;
