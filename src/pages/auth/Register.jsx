import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import AuthLayout from '../../component/AuthLayout';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <section className="container text-center">
        <h1>Register Pages</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Username
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              {...register('username', { required: true })}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Password
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              {...register('password', { required: true })}
            />
          </div>
          <button className="btn btn-outline-primary" type="submit">
            Register
          </button>{' '}
          &nbsp;
          <NavLink to="/sign-in" className="btn btn-secondary" type="button">
            Already have account? Sign In
          </NavLink>
        </form>
      </section>
    </AuthLayout>
  );
};

export default Register;
