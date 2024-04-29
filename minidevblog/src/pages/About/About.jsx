import styles from "./About.module.css";

import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className={styles.about}>
            <h2>
                About <span>MiniDevBlog</span>
            </h2>
            <p>
                This project is a blog made using <a href="https://react.dev/">React Framework</a> on the front-end and <a href="https://firebase.google.com/">Firebase</a> on the back-end.
            </p>
            <Link to="/posts/create" className="btn">
                Create Post
            </Link>
        </div>
    );
};

export default About;