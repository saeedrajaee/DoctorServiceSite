"use server";

import { redirect } from "next/navigation";
import { deleted, get, getUnique, patch, post } from "../../../../util/fetch";
import { revalidatePath } from "next/cache";

export default async function getDoctorCategory() {
  const doctorCategory = await get("doctor-category");
  return doctorCategory;
}

// export async function createDoctorCategory(
//   _prevState: any,
//   formData: FormData
// ) {
//   const { error } = await post("doctor-category", formData);
//   if (error) {
//     return { error };
//   }

//   redirect("/doctorCategory");
// }

export async function createDoctorCategory( prevState: any,  formData: FormData){    
  const data = {
    name: formData.get("name")
    };
  console.log("formData...........",formData)
  const res = await fetch(`http://localhost:3001/doctor-category`, {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(data),
  });
  const parsedRes = await res.json();
  if (!res.ok) {
    return { message: "!!!!!!!!!!!!!!", };
  }
  const libraryFile = formData.get("file");
  if (libraryFile instanceof File && res.ok) {
    await uploadLibraryFile(parsedRes.id, libraryFile);
  }
  revalidatePath("/doctorCategory", "page");
  redirect("/doctorCategory");
}



async function uploadLibraryFile(Id: number, file: File) {
  const formData = new FormData();
  formData.append("file", file);
  await fetch(`http://localhost:3001/doctor-category/${Id}/file`, {
    body: formData,
    method: "POST",
  });
}

export async function getUniqueDoctorCategory(id: string) {
  const doctorCategory = await getUnique("doctor-category", id);
  return doctorCategory;
}

export async function updateDoctorCategory(formData: FormData, id: string) {
  const error = await patch("doctor-category", formData, id);
  revalidatePath("/doctorCategory", "page");
  redirect("/doctorCategory");
  if (error) {
    return { error };
  }
}

export async function deleteDoctorCategory(id: string) {
  const error = await deleted("doctor-category", id);
  revalidatePath("/doctorCategory", "page");
  redirect("/doctorCategory");
  if (error) {
    return { error };
  }
}
