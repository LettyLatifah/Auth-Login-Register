import { NavLink } from 'react-router-dom';
import AuthLayout from '../../component/AuthLayout';

const Signin = () => {
  return (
    <AuthLayout>
      <section className="container text-center">
        <h1>Homepages</h1>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Username
          </span>
          <input type="text" className="form-control" placeholder="Username" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Password
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="Username"
          />
        </div>
        <button to="/sign-in" className="btn btn-outline-primary" type="submit">
          Login
        </button>{' '}
        &nbsp;
        <NavLink to="/register" className="btn btn-secondary" type="button">
          Doesn't Have account?
        </NavLink>
      </section>
    </AuthLayout>
  );
};

export default Signin;
