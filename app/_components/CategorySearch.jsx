"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { doctorCategory } from "@/data/data";
import Image from "next/image";

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
        {doctorCategory.map((data, i) => {
          return (
            <div
              key={data.id}
              className="flex flex-col text-center
               items-center p-5 bg-blue-50 m-2
               rounded-lg gap-2 hover:scale-110
                transition-all ease-in-out cursor-pointer"
            >
              <Image src={data.image} alt="icon" width={40} height={40} />
              <label className=" text-blue-600 text-sm">{data.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategorySearch;
