import styles from "./Greeting.module.css";

function Greeting() {

    return (
        <>
            <h1>Hello World</h1>
            <p className={styles.App}>This is a paragraph</p>
        </>
    );
}

export default Greeting;