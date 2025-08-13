import React from "react";

import { useForm } from 'react-hook-form';

function Registration(){
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data,data.email,data.password);
  };

  return (
    <div className="App bg-teal-300">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <br/>
          <label>Email</label>
          <input className="" type="text" name="email" {...register("email")} />
        </div>
        <div className="form-control">
          <br/>
          <label>Password</label>
          <input type="password" name="password" {...register("password")} />
        </div>
        <div className="form-control">
          <br/>
          <label></label>
          <button type="submit">Register</button>
          <br/>
        </div>
      </form>
    </div>
  );
}
export default Registration