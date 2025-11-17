"use server";

import { redirect } from "next/navigation";
import { deleted, get, getUnique, patch, post } from "../../../../util/fetch";
import { revalidatePath } from "next/cache";

export default async function getDoctorList() {
  const doctorList = await get("doctor-list");
  return doctorList;
}

export async function createDoctorList(prevState: any, formData: FormData) {
  const data = {
    name: formData.get("name"),
    category: formData.get("category"),
    yearsOfExprience: parseInt(formData.get("yearsOfExprience")),
    address: formData.get("address"),
  };
  console.log("formData...........", formData);
  const res = await fetch(`http://localhost:3001/doctor-list`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const parsedRes = await res.json();
  if (!res.ok) {
    return { message: "!!!!!!!!!!!!!!" };
  }
  const libraryFile = formData.get("file");
  if (libraryFile instanceof File && res.ok) {
    await uploadLibraryFile(parsedRes.id, libraryFile);
  }
  revalidatePath("/doctorList", "page");
  redirect("/doctorList");
}

async function uploadLibraryFile(Id: number, file: File) {
  const formData = new FormData();
  formData.append("file", file);
  await fetch(`http://localhost:3001/doctor-list/${Id}/file`, {
    body: formData,
    method: "POST",
  });
}

export async function getUniqueDoctorList(id: string) {
  const doctorList = await getUnique("doctor-list", id);
  return doctorList;
}

export async function updateDoctorList(formData: FormData, id: number) {
  const data = {
    name: formData.get("name"),
    category: formData.get("category"),
    yearsOfExprience: formData.get("yearsOfExprience"),
    address: formData.get("address"),
  };
  console.log("formData...........", formData);
  const res = await fetch(`http://localhost:3001/doctor-list/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const parsedRes = await res.json();

  const libraryFile = formData.get("file");
  if (libraryFile instanceof File && res.ok) {
    await uploadLibraryFile(id, libraryFile);
    console.log("parsedRes.id....", id);
  }

  revalidatePath("/doctorList", "page");
  redirect("/doctorList");
  if (error) {
    return { error };
  }
}

export async function deleteDoctorList(id: string) {
  const error = await deleted("doctor-list", id);
  revalidatePath("/doctorList", "page");
  redirect("/doctorList");
  if (error) {
    return { error };
  }
}
