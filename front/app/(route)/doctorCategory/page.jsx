import getDoctorCategory from './api/doctorCategory.api'
import CategoryIndex from './card/doctorCategory'

async function doctorCategoryPage() {

  const DoctorCategory = await getDoctorCategory()
  return (
    <div>
      <CategoryIndex  DoctorCategory={DoctorCategory} />
    </div>
  )
}

export default doctorCategoryPage