import styles from "./About.module.css";

import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className={styles.about}>
            <h2>
                Sobre o <span>MiniDevBlog</span>
            </h2>
            <p>
                Este projeto é um blog feito usando o framework React no front-ende Firebase no back-end.
            </p>
            <Link to="/posts/create" className="btn">
                Criar Post
            </Link>
        </div>
    );
};

export default About;