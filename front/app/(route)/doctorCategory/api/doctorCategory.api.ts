"use server";

import { redirect } from "next/navigation";
import { deleted, get, getUnique, patch, post } from "../../../../util/fetch";
import { revalidatePath } from "next/cache";

export default async function getDoctorCategory() {
  const doctorCategory = await get("doctor-category");
  return doctorCategory;
}

export async function createDoctorCategory(
  _prevState: any,
  formData: FormData
) {
  const { error } = await post("doctor-category", formData);
  if (error) {
    return { error };
  }
  redirect("/doctorCategory");
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
