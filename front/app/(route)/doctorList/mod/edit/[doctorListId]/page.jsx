import { getUniqueDoctorList } from "@/(route)/doctorList/api/doctorList.api";
import EditDoctorListIndex from "../../../card/doctorCategory/edit";

const EditDoctorListPage = async ({params,searchParams})=>{
  const Id = await params
  const doctorList = await getUniqueDoctorList(Id.doctorListId);
  console.log("params................", doctorList)
    return(
        <>
            <div>
              <EditDoctorListIndex searchParams={searchParams} doctorList={doctorList} />
            </div>
        </>
    )
}
  export default EditDoctorListPage;