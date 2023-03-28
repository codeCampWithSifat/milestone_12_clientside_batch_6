import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import ConfarmationModal from "../../Shared/ConfarmationModal/ConfarmationModal";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const closeModal = () => {
    setDeletingDoctor(null)
  };

  

  const { data: doctors = [], isLoading , refetch} = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/doctors`, {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleDeleteDoctor = (doctor) => {
    // console.log(doctor)
    fetch(`http://localhost:5000/doctors/${doctor._id}`,{
        method : "DELETE",
        headers : {
            authorization : `bearer ${localStorage.getItem("accessToken")}`
        }
    })
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        if(data.deletedCount > 0) {
            refetch()
            toast.success("Deleted Doctor Successfully");
        }
    })
  }
  return (
    <div>
      <h2 className="text-primary text-2xl">
        Number Of Doctors : {doctors.length}
      </h2>
      <div className="mt-6">
        <table className="table w-full">
          {/* head*/}
          <thead className="text-center">
            <tr>
              <th>Sl Nubmer</th>
              <th>Avater</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {/* row 1 */}
            {doctors.map((doctor, index) => (
              <tr key={doctor._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded">
                      <img
                        src={doctor.image}
                        alt="Tailwind-CSS-Avatar-component"
                      />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <label
                    htmlFor="confarmation-modal"
                    className="btn btn-sm  btn-error text-white"
                    onClick={() => setDeletingDoctor(doctor)}
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
        deletingDoctor && <ConfarmationModal
        title={`Are You Sure You Want To Delete`}
        message={`If You Delete ${deletingDoctor.name} We Won't Recover It`}
        closeModal={closeModal}
        handleDeleteDoctor={handleDeleteDoctor}
        modalData={deletingDoctor}
        ></ConfarmationModal>
      }
    </div>
  );
};

export default ManageDoctors;
