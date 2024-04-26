import styles from "./Login.module.css";

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
        console.log(res);
    };

    useEffect(() => {
        console.log(authError);
        if(authError) {
            setError(authError);
        }
    }, [authError]);

    return (
        <div className={styles.login}>
            <h1>LOGIN</h1>
            <p>faça o login para utilizar o Blog</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>e-mail:</span>
                    <input type="email" name="email" required placeholder="e-mail do usuário" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </label>
                <label>
                    <span>senha:</span>
                    <input type="password" name="password" required placeholder="insira a senha" onChange={(e) => setPassword(e.target.value)} value={password}/>
                </label>
                {!loading && <button className="btn">entrar</button>}
                {loading && (
                    <button className="btn" disabled>
                        aguarde..
                    </button>
                )}
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default Login;