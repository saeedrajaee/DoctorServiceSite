"use client"
import { Input } from "../../../../../../components/ui/input"
import { Button } from "../../../../../../components/ui/button"
import { updateDoctorList } from "@/(route)/doctorList/api/doctorList.api";
import { useState } from "react";
import { UploadCloudIcon } from "lucide-react";

function EditDoctorListIndex({ doctorList, searchParams }) {
  const { errorMessage } = searchParams;
  const [value, setValue] = useState("");

  return (
        <div>
            <h1 className="text-3xl font-semibold p-2"> Add Doctor List </h1>

            <form
                className="flex flex-col justify-center items-center gap-x-6 gap-y-10 mt-10 px-2"
                action={(formData) => updateDoctorList(formData, doctorList.id)}
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
                        <label required={true}>Doctor Name</label>
                        <Input placeholder="Enter Doctor Name" name="name" defaultValue={doctorList.name}/>


                        <label required={true}>Doctor category </label>
                        <Input placeholder="Enter Doctor category " name="category" defaultValue={doctorList.category}/>


                        <label required={true}>Doctor Years Of Exprince</label>
                        <Input placeholder="Enter Doctor Years Of Exprince" name="yearsOfExprience" defaultValue={doctorList.yearsOfExprience}/>

                        <label required={true}>Doctor Address</label>
                        <Input placeholder="Enter Doctor Address" name="address" defaultValue={doctorList.address}/>

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

export default EditDoctorListIndex


