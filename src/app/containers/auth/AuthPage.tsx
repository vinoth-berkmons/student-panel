import { FC } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth/authSlice";


/**
 * Authentication
 * Login with email/password
 * default email/password set
 * @returns 
 */
const AuthPage: FC = () => {

    const dispatch = useDispatch();

    /**
     * Set default credentials
     */
    const login = () => {
        const cred = {
            'userName': 'admin',
            'password': 'admin'
        }
        dispatch(authActions.doLogin(cred))
    }



    return (
        <>
            <div className="w-3/5 mt-24 bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
                <form className="form w-100">
                    <div className="text-center mb-10">
                        <h1 className="text-dark mb-3 primary-txt ">Sign In to Student panel</h1>
                    </div>
                    <div className="fv-row mb-10">
                        <label className="form-label fs-6 fw-bolder text-dark">Username</label>
                        <input className="form-control form-control-lg form-control-solid " defaultValue={'Admin'} />
                    </div>
                    <div className="fv-row mb-10">
                        <label className="form-label fs-6 fw-bolder text-dark">Password</label>
                        <input className="form-control form-control-lg form-control-solid " defaultValue={'admin'} />
                    </div>
                    <div className="text-center">
                        <button onClick={() => login()} type="button" className="btn btn-lg primary-bg text-white w-100 mb-5">
                            <span>Submit</span>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AuthPage;