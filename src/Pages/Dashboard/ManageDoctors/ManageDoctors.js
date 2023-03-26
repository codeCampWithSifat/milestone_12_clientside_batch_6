import { useQuery } from "@tanstack/react-query";
import React from "react";

const ManageDoctors = () => {
    const {data: doctors=[],isLoading} = useQuery({
        queryKey : ["doctors"],
        queryFn : async () => {
           try {
            const res = await fetch(`http://localhost:5000/doctors`,{
                headers : {
                    authorization : `bearer ${localStorage.getItem("accessToken")}`
                }
            })
            const data = await res.json()
            return data;

           } catch (error) {
            console.log(error);
           }
        }
    })
  return (
    <div>
      <h2 className="text-primary text-2xl">Number Of Doctors : {doctors.length}</h2>
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
            {
                doctors.map((doctor,index) => <tr key={doctor._id}>
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
                  <button className="btn btn-error btn-sm text-white">Delete</button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
