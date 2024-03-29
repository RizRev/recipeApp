import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import style from '../styles/login.module.css'


const register = () => {
    const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phonenumber: "",
    confirm: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }
    try {
      const result = await axios.post(
        `${process.env.URL_BACKEND}/users/create`,
        user
      );
    } catch (err) {
      console.log(err.response.status);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="">
          </div>

          <div className="">
            <h6 className="text-center">
              Create new account to access all features
            </h6>
            <hr />
            <form onSubmit={handleSubmit}>
              <label for="basic-url" className="form-label">
                Name
              </label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                  name="name"
                  aria-describedby="basic-addon3"
                  className="form-control"
                />
              </div>
              <label for="basic-url" className="form-label">
                Email
              </label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  name="email"
                  className="form-control"
                />
              </div>
              <label for="basic-url" className="form-label">
                Phone Number
              </label>
              <div className="input-group">
                <input
                  type="number"
                  placeholder="Enter your phone Number"
                  onChange={handleChange}
                  name="phonenumber"
                  className="form-control"
                />
              </div>

              <label for="basic-url" className="form-label">
                Password
              </label>
              <div className="input-group mb-3">
                <input
                  type="password"
                  placeholder="Enter your Password"
                  onChange={handleChange}
                  name="password"
                  className="form-control"
                />
              </div>
              <label for="basic-url" className="form-label">
                Comfirm Password
              </label>
              <div className="input-group mb-3">
                <input
                  type="password"
                  placeholder="Enter your Password"
                  onChange={handleChange}
                  name="confirm"
                  className="form-control"
                />
              </div>
            </form>
            <button
              className="btn btn-primary mt-2"
              title="Register"
              onClick={handleSubmit}
              style={{ width: "420px", backgroundColor: "#EFC81A" }}
            >
              Button
            </button>
            <h6
              style={{
                marginTop: "20px",
                textDecoration: "none",
                color: "#999999",
              }}
              className="text-center"
            >
              Already Had Account?
              <Link href="/auth/login" style={{ textDecoration: "none" }}>
                <p
                  className="text-warning "
                  style={{
                    marginLeft: "250px",
                    marginTop: "-19px",
                    textDecoration: "none",
                    color: "#999999",
                  }}
                >
                  Sign in
                </p>
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default register;