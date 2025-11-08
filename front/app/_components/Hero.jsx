"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";

const Hero = () => {

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <Image
              src="/doctor.jpg"
              height={800}
              width={800}
              className=" inset-0 rounded-3xl w-full object-cover"
              alt=""
            />
          </div>
          <div>
            <div className="max-w-prose md:max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-3xl">
                Find & Book
                <span className=" text-blue-600"> Appointment </span>
                with your Fav
                <span className=" text-blue-600"> Doctors </span>
              </h2>

              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                doloremque saepe architecto maiores repudiandae amet perferendis
                repellendus, reprehenderit voluptas sequi.
              </p>
            </div>
          </div>
        </div>
        <Button className=" mt-5">Explore Now</Button>
      </div>
    </section>
  );
};

export default Hero;
