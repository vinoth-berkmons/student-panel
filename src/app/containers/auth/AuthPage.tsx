import { FC } from "react";

/**
 * Authentication
 * Login with email/password
 * default email/password set
 * @returns 
 */
const AuthPage: FC = () => {
    return (
        <>
            <div className="w-3/5 mt-24 bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
                <form className="form w-100">
                    <div className="text-center mb-10">
                        <h1 className="text-dark mb-3 primary-txt ">Sign In to Student panel</h1>
                    </div>
                    <div className="fv-row mb-10">
                        <label className="form-label fs-6 fw-bolder text-dark">Email</label>
                        <input className="form-control form-control-lg form-control-solid " value={'admin@studentpanel.com'}/>
                    </div>
                    <div className="fv-row mb-10">
                        <label className="form-label fs-6 fw-bolder text-dark">Password</label>
                        <input className="form-control form-control-lg form-control-solid " value={'admin'}/>
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn btn-lg primary-bg text-white w-100 mb-5">
                            <span>Submit</span>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AuthPage;