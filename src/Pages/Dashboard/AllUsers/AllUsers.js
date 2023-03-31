import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";

const AllUsers = () => {
  const { data: users = [] , refetch} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`https://milestone-12-backendside-bactch-6.vercel.app/users`);
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    // console.log("Button Clicked", id);
    fetch(`https://milestone-12-backendside-bactch-6.vercel.app/users/admin/${id}`, {
        method : "PUT",
        headers : {
            authorization : `bearer ${localStorage.getItem("accessToken")}`
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount > 0) {
            toast.success("Make Admin Successfully")
            refetch();
        } else {
            toast.error("You Can Not Make Admin")
        }
    })
  }

  return (
    <div className="">
      <h2 className="text-2xl mb-6 mt-4">All Users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead className="text-center">
            <tr>
              <th>SL.Number</th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                 {user?.role !== "admin" &&  <button
                    onClick={() => handleMakeAdmin(user._id)}
                    className="btn btn-sm"
                  >
                    Make Admin
                  </button>}
                </td>
                <td>
                  <button className="btn btn-xs btn-error text-white">
                    Delete User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
