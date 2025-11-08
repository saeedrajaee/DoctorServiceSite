"use client"
import { useFormState } from "react-dom";
import { Input } from "../../../../../../components/ui/input"
import { Button } from "../../../../../../components/ui/button"
import { useActionState } from "react";
import { createDoctorCategory } from "../../../api/doctorCategory.api";

function DoctorCategoryIndex({ searchParams }) {
    const { errorMessage } = searchParams;
    const [state, formAction] = useActionState(createDoctorCategory, { error: "" });

    return (
        <div>
            <h1 className="text-3xl font-semibold p-2"> Add Doctor Category </h1>

            <form
                className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
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
                <div className="grid gap-2">
                    <label required={true}>Doctor Category Name</label>
                    <Input placeholder="Enter Doctor Category Name" name="name" />
                </div>
                <Button className="w-52 col-span-2 mt-0">Submit</Button>
                <div className="grid gap-2">
                </div>

            </form>
        </div>
    )
}

export default DoctorCategoryIndex