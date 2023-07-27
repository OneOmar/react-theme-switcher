import React from "react"

export default function Form() {
    return <div className="d-flex justify-content-center"> 
    <form className="mt-3 p-5 rounded-4 shadow loggingForm">
        <h2 class="fw-bold mb-3 text-center">Login</h2>
        <div className="mb-3">
            <label htmlFor="InputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="InputEmail1" />
        </div>
        <div className="mb-3">
            <label htmlFor="InputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="InputPassword1" />
        </div>
        <div className="mb-5 d-flex justify-content-between">
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="Check1" />
                <label className="form-check-label" htmlFor="Check1">Remember me</label>
            </div>
            <div>
                <a href="#!">Forgot password?</a>
            </div>
        </div>
        <div className="mb-4 text-center">
            <button type="submit" className="btn btn-primary">SIGN IN</button>
        </div>
        <div className="text-center">
            <p>Not a member? <a href="#!">Register</a></p>
            <p> or sign up with :</p>
            <button type="button" className="btn btn-link">
                <i className="bi bi-google"></i>
            </button>
            <button type="button" className="btn btn-link">
                <i className="bi bi-facebook"></i>
            </button>
            <button type="button" className="btn btn-link">
                <i className="bi bi-twitter"></i>
            </button>
            <button type="button" className="btn btn-link">
                <i className="bi bi-github"></i>
            </button>
        </div>
    </form>
    </div>
}