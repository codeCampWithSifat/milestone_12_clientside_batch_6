import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const {register,handleSubmit,formState: { errors }, } = useForm();
    const imageHostKey = process.env.REACT_APP_imagebb_key ;
    const navigate = useNavigate();
    // console.log(imageHostKey)

    const {data:specialties=[],isLoading} = useQuery({
        queryKey : ["specialties"],
        queryFn : async () => {
            const res = await fetch(`http://localhost:5000/appointmentSpecialty`)
            const data = await res.json();
            return data ;
        }
    })

    if (isLoading) {
        return (
            <div className="h-[600px] mt-64 text-center">
                <button className="btn loading ">loading</button>
            </div> 
        )
    }

    const addDoctor = data => {
        const formData = new FormData();
        const image = data.image[0];
        formData.append("image", image)

        fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
            method : "POST",
            body : formData
        })
        .then(res => res.json())
        .then(imageData => {
            if (imageData.success) {
                // console.log(imageData.data.url);
                const doctor = {
                    name : data.name,
                    email : data.email,
                    specialty : data.specialty,
                    image : imageData.data.url
                }

                fetch(`http://localhost:5000/doctors`,{
                    method : "POST",
                    headers : {
                        "Content-Type" : "application/json",
                        authorization : `bearer ${localStorage.getItem("accessToken")}`
                    },
                    body : JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then (doctorsData => {
                    // console.log(doctorsData)
                    if (doctorsData.insertedId) {
                        toast.success(`Add Doctor ${data.name} Successfully`)
                        navigate("/dashboard/managedoctors")
                    }
                })

            }
        })
    }


  return (
    <div className=''>
      <h2 className="text-2xl">Add A Doctor</h2>
      <div className='w-96 mt-6'>
      <form onSubmit={handleSubmit(addDoctor)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-md mt-2 "> Doctor Name</span>
          </label>
          <input
            {...register("name", { required: "Name is Required" })}
            type="text"
            className="input input-bordered w-full "
          />
          {errors.name && (
            <p role="alert" className="text-red-600 my-2">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-md"> Email</span>
          </label>
          <input
            {...register("email", { required: "Email is Required" })}
            type="email"
            className="input input-bordered w-full "
          />
          {errors.email && (
            <p role="alert" className="text-red-600 my-2">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-md font-bold my-2">Pick A Specialty</span>
          </label>
          <select  {...register("specialty")} className="select input-bordered w-full ">            
            {
                specialties.map(specialty =>  <option 
                    key={specialty._id} value={specialty.name}
                    >{specialty.name}</option>)
            }
        </select>      
        </div> 
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-md mt-2 ">Pick A Photo</span>
          </label>
          <input
            {...register("image", { required: "Photo is Required" })}
            type="file"
            className="input input-bordered w-full "
          />
          {errors.image && (
            <p role="alert" className="text-red-600 my-2">
              {errors.image?.message}
            </p>
          )}
        </div>    
        <input
          type="submit"
          className="input input-bordered w-full bg-primary text-white my-4"
          value="Add Doctor"
        />
      </form>
      </div>
    </div>
  )
}

export default AddDoctor
