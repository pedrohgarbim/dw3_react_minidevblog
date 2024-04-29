import styles from "./Login.module.css";
import React from "react"

import { useEffect, useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { login, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const user = {
            email, 
            password,
        };
        const res = await login(user);
        console.table(res);
        navigate("/post/create")
    };


    useEffect(() => {
        console.log(authError);
        if(authError) {
            setError(authError);
        }
    }, [authError]);

    return (
        <div className={styles.login}>
            <h1>login</h1>
            <p>login to use the minidevblog</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>e-mail:</span>
                    <input type="email" name="email" required placeholder="user email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </label>
                <label>
                    <span>password:</span>
                    <input type="password" name="password" required placeholder="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                </label>
                {!loading && <button className="btn">login</button>}
                {loading && 
                    <button className="btn" disabled>
                        aguarde..
                    </button>
                    
                }
                {error && <p className="error">incorrect password. {error}</p>}
            </form> 
        </div>
    );
};

export default Login;