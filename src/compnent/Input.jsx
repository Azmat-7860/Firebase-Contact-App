import React from "react";
import { HiMiniUserPlus } from "react-icons/hi2";

const Input = () => {
  return (
    <div className="d-flex align-items-center">
      <input
        type="text"
        className="my-input m-3"
        placeholder="🔍 Search your contact"
      />
      {/* Button to open the modal */}
      <HiMiniUserPlus
        className="text-white my-addBtn cursor-pointer"
        data-bs-toggle="modal" // Bootstrap toggle
        data-bs-target="#modalSignin" // Target modal by ID
      />

      {/* Bootstrap Modal */}
      <div
        className="modal fade m-auto"
        id="modalSignin"
        style={{ width: "360px" }}
        tabIndex="-1"
        aria-labelledby="modalSigninLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          {" "}
          {/* Center the modal */}
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h1 className="fw-bold mb-0 fs-2" id="modalSigninLabel">
                Sign up for free
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body p-5 pt-0">
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control rounded-3"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control rounded-3"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button
                  className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                  type="submit"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
