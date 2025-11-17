"use client"
import { useFormState } from "react-dom";
import { Input } from "../../../../../../components/ui/input"
import { Button } from "../../../../../../components/ui/button"
import { useActionState, useState } from "react";
import { createDoctorList } from "../../../api/doctorList.api";
import { UploadCloudIcon } from "lucide-react";

function DoctorListAddIndex({ searchParams }) {
    const { errorMessage } = searchParams;
    const [state, formAction] = useActionState(createDoctorList, { error: "" });
    const [value, setValue] = useState("");

    return (
        <div>
            <h1 className="text-3xl font-semibold p-2"> Add Doctor List </h1>

            <form
                className="flex flex-col justify-center items-center gap-x-6 gap-y-10 mt-10 px-2"
                action={formAction}
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
                        <Input placeholder="Enter Doctor Name" name="name" />


                        <label required={true}>Doctor category </label>
                        <Input placeholder="Enter Doctor category " name="category" />


                        <label required={true}>Doctor Years Of Exprince</label>
                        <Input placeholder="Enter Doctor Years Of Exprince" type="number" name="yearsOfExprience" />

                        <label required={true}>Doctor Address</label>
                        <Input placeholder="Enter Doctor Address" name="address" />

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

export default DoctorListAddIndex