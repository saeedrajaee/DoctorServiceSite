"use client"
import { EditIcon, Trash2Icon } from 'lucide-react';
import Link from 'next/link';
import DeleteConfirmationModal from "../../../../../components/ui/DeleteConfirmationModal"
import { useState } from 'react';
import { deleteDoctorCategory } from '../../api/doctorCategory.api';
import { Button } from '../../../../../components/ui/button';

function CategoryIndex({ DoctorCategory }) {

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState();

  const handleDelete = async () => {
    await deleteDoctorCategory(selectedId)
    setIsDeleteModalOpen(false)
    setSelectedId(null)
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-semibold text-3xl p-2">
          {" "}
          Doctor Category Management{" "}
        </h1>
        <button>
          <Link href="/doctorCategory/mod/add" className="p-3 m-1 rounded-md bg-blue-500 text-gray-50 hover:bg-white
            hover:text-blue-900 hover:shadow-md">
            Add Doctor Category
          </Link>
        </button>
      </div>

      <hr className="my-5" />

      <div className="mt-4 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <table className="overflow-y-auto mx-auto w-full">
          <thead className="border-y-2 border-gray-400">
            <tr className='border-b border-gray-300;'>
              <th> Sr. No.</th>
              <th>Doctor Category</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="text-gray-700 font-medium text-lg text-center">
            {DoctorCategory.map((item, key) => (
              <tr key={item.id}>
                <td>{key + 1}</td>
                <td>{item.name}</td>
                <td className="flex justify-center items-center gap-x-3">
                  <Link
                    href={`/doctorCategory/mod/edit/${item.id}`}
                    className="w-fit"
                  >
                    <EditIcon />
                  </Link>
                  <Button
                    className="bg-transparent p-0 px-2 border-none text-red-500"
                    onClick={() => {
                      setIsDeleteModalOpen(true);
                      setSelectedId(item.id);
                    }}
                  >
                    <Trash2Icon />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isDeleteModalOpen && (
          <DeleteConfirmationModal
            setIsOpen={setIsDeleteModalOpen}
            onCancel={() => setIsDeleteModalOpen(false)}
            handleConfirm={handleDelete}
          />
        )}
      </div>
    </div>
  )
}

export default CategoryIndex