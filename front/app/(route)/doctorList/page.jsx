import getDoctorList from './api/doctorList.api'
import DoctorListIndex from './card/doctorCategory'

async function doctorListPage() {

  const DoctorList = await getDoctorList()
  return (
    <div>
      <DoctorListIndex  DoctorList={DoctorList} />
    </div>
  )
}

export default doctorListPage