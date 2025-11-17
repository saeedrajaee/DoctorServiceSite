import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import getDoctorCategory from "./(route)/doctorCategory/api/doctorCategory.api";
import getDoctorList from "./(route)/doctorList/api/doctorList.api";

export default async function Home() {

  const DoctorCategory = await getDoctorCategory()
  const DoctorLists = await getDoctorList()
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Search bar + Categories */}
      <CategorySearch DoctorCategory={DoctorCategory} />

      {/* Popular Doctor List */}
      <DoctorList DoctorLists={DoctorLists} />
    </div>
  );
}
