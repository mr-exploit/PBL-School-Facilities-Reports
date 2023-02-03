import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {LoginUser, reset} from "../features/authSlice";
import logo from "../img/logo_baru2.png";

const Login = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const {user, isError, isSuccess, isLoading, message} = useSelector(
            (state) => state.auth
            );
        
        useEffect(()=>{
            if(user || isSuccess){
                navigate("/dashboard");
            }
            dispatch(reset());
        }, [user, isSuccess, dispatch, navigate]);

        const Auth = (e) => {
            e.preventDefault();
            dispatch(LoginUser({email, password}));
        }
    return (
    <section className="hero has-background-grey-light  is-large">
        <div class="columns is-centered mt-6 mb-6">
        <img src={logo} width="700" height="700" alt='logo' className="column is-half mt-6 mb-6" />
        </div>
        <div className="hero-head mb-5">
            <div className="container" style={{marginBottom: "33vh"}} >
                <div className="columns is-centered">
                    <div className="column is-4">
                        <form onSubmit={Auth} className="box">
                            <h1 className="title is-2 has-text-centered">Sign In</h1>
                                {isError && <p className="has-text-centered mt-4 mb-4">{message}</p>}
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input type="text" 
                                    className="input"
                                    value={email} 
                                    onChange={(e)=>setEmail(e.target.value)} 
                                    placeholder='Email' />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input type="password" className="input"  
                                    value={password} 
                                    onChange={(e)=>setPassword(e.target.value)} 
                                    placeholder='******' />
                                </div>
                            </div>
                            <div className="field mt-5">
                                <button 
                                type="submit" 
                                className="button is-success is-fullwidth">
                                    {isLoading ? 'Loading...' : 'Login'}
                                </button>
                            </div>
                        </form>
                    </div> 
                </div>
            </div>
        </div>
    </section>
    )
}

export default Login;
