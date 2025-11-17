"use client"
import React, { useEffect, useState } from "react";
import { doctorCategory } from "@/data/data";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function CategoryList() {

  const [categoryList, setCategoryList] = useState();
  const params = usePathname();
  const category = params.split('/')[2];
  useEffect(() => {
    getCategoryList;
  }, []);
  const getCategoryList = doctorCategory;

  return (
    <div className='h-screen fixed mt-5 flex flex-col'>
      <Command >
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="overflow-visible">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {doctorCategory.map((data, i) => (
              <CommandItem key={i}>
                <Link href={'/search/'+data.name} className={`p-2 flex gap-2 text-[12px] text-blue-600
                 items-center rounded-md w-full hover:text-blue-600 cursor-pointer 
                 hover:scale-105 transition-all ease-in-out ${category == data.name}'bg-blue-100'`}>
               <Image src={data.image}
                 alt='icon'
                 width={25}
                 height={25} />
               <label>{data.name}</label>
             </Link>
              </CommandItem>
            )
            )}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}
export default CategoryList



// "use client"

// import React, { useEffect, useState } from "react";
// import { doctorCategory } from "@/data/data";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from 'next/navigation';

// const CategoryList = () => {
//   const Menu = [
//     {
//       id: 1,
//       image: "/images/Dentist.png",
//       name: "Dentist",
//     },
//     {
//       id: 2,
//       image: "/images/heart.svg",
//       name: "Cardiologist",
//     },
//     {
//       id: 3,
//       image: "/images/Brain.svg",
//       name: "Brain",
//     },
//     {
//       id: 4,
//       image: "/images/emargency.png",
//       name: "General Doctor",
//     },
//     {
//       id: 5,
//       image: "/images/ear.svg",
//       name: "Otology",
//     },
//     {
//       id: 6,
//       image: "/images/nurse.png",
//       name: "Nurse",
//     },
//     {
//       id: 7,
//       image: "/images/neurology1.png",
//       name: "Neurologist",
//     },
//     {
//       id: 8,
//       image: "/images/eye.png",
//       name: "Eye Specilist",
//     }
//   ];





//   const [categoryList, setCategoryList] = useState();
//   const params = usePathname();
//   const category = params.split('/')[2];
//   useEffect(() => {
//     getCategoryList;
//   }, []);
//   const getCategoryList = doctorCategory;

//   return (
//     <div className='h-screen fixed mt-5 flex flex-col'>
//       <div className="overflow-visible">
//         <ul>
//           {Menu.map((data, i) => (
//             // <Link key={data.idّ} href={''}>
//             //   <Image src={data.image}
//             //         alt='icon'
//             //         width={25}
//             //         height={25} />
//             //   <li
//             //     className="hover:text-blue-600 cursor-pointer 
//             //             hover:scale-105 transition-all ease-in-out"
//             //   >
//             //     {data.name}
//             //   </li>
//             // </Link>

//             <Link key={i} href={'/search/'+data.name} className={`p-2 flex gap-2 text-[12px] text-blue-600
//                 items-center rounded-md w-full hover:text-blue-600 cursor-pointer 
//                 hover:scale-105 transition-all ease-in-out ${category == data.name}'bg-blue-100'`}>
//               <Image src={data.image}
//                 alt='icon'
//                 width={25}
//                 height={25} />
//               <label>{data.name}</label>
//             </Link>
//           )
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default CategoryList;