import EditDoctorCategoryIndex from "../../../card/doctorCategory/edit"
import { getUniqueDoctorCategory } from "@/(route)/doctorCategory/api/doctorCategory.api";

const EditDoctorCategoryPage = async ({params,searchParams})=>{
  const Id = await params
  const doctorCategory = await getUniqueDoctorCategory(Id.doctorCategoryId);
  console.log("params................", doctorCategory)
    return(
        <>
            <div>
              <EditDoctorCategoryIndex searchParams={searchParams} doctorCategory={doctorCategory} />
            </div>
        </>
    )
}
  export default EditDoctorCategoryPage;