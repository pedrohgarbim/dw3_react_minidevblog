import React from "react";
import styles from "./Register.module.css";
import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

const Register = () => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);

    const { createUser, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const user = {
            displayName,
            email,
            password,
            confirmPassword,
        };

        if (password!== confirmPassword){
            setError("password incorrect.");
            return;
        }

        const res = await createUser(user);
        console.log(res);
    };

    useEffect(() => {
        if(authError){
            setError(authError);
        }
    }, [authError]);
    return (
        <div className={styles.register}>
            <h1>register for you are allow to post</h1>
            <p>create your user and show your histories:</p>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">
                    <span>name:</span>
                    <input type="text" name="displayName" required placeholder="user name" value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
                </label>
                <label htmlFor="">
                    <span>email:</span>
                    <input type="email" name="email" required placeholder="user email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label htmlFor="">
                    <span>password:</span>
                    <input type="password" name="password" required placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <label htmlFor="">
                    <span>confirm password:</span>
                    <input type="password" name="confirmPassword" required placeholder="confirm user password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                </label>
                {!loading && (
                    <button type="submit" className="btn">
                        register
                    </button>
                )}
                

                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default Register;