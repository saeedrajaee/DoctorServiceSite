"use client"
import { Input } from "../../../../../../components/ui/input"
import { Button } from "../../../../../../components/ui/button"
import { updateDoctorCategory } from "@/(route)/doctorCategory/api/doctorCategory.api";
import { useState } from "react";
import { UploadCloudIcon } from "lucide-react";

function EditDoctorCategoryIndex({ doctorCategory, searchParams }) {
  const { errorMessage } = searchParams;
  const [value, setValue] = useState("");

  return (
    <div> <h1 className="text-3xl font-semibold p-2"> Edit Doctor Category </h1>

      <form
        className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
        action={(formData) => updateDoctorCategory(formData, doctorCategory.id)}
      >
        {
          errorMessage && (
            <div
              className="col-span-2 border border-red-500 rounded-xl px-5 py-3 bg-red-50 w-fit"
            >
              <span
                className="text-red-500 col-span-2 text-mg my-0 font-500"
              >{errorMessage}</span>
            </div>
          )
        }
        <div className=" flex flex-col-2 items-center justify-between gap-2">
          <div className="grid gap-2">
            <label required={true}>Doctor Category Name</label>
            <Input placeholder="Enter Doctor Category Name" name="name" defaultValue={doctorCategory.name} />
          </div>
          <div className="grid gap-2">
            <label required={true}><UploadCloudIcon /></label>

            <Input name="file" id="file" type="file"
              onChange={(event) => console.log(event.target.files)}
              className=" bg-blue-200 border cursor-pointer" />
          </div>
        </div>
        <Button className="w-52 col-span-2 mt-0">Submit</Button>
        <div className="grid gap-2">
        </div>

      </form>
    </div>
  )
}

export default EditDoctorCategoryIndex


