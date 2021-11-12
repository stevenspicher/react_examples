import React from "react";
import { useHistory } from "react-router-dom";
const HomePage = () => {
    const history = useHistory();

    return (
        <>
            <button
                onClick={() => history.push("/about", { from: "HomePage" })}
            >
                About
            </button>
            <button
                onClick={() => history.push("/contact", { from: "HomePage" })}
            >
                Contact
            </button>
            <p>Welcome Home</p>
        </>
    );
}

const About = ({location}) => {
    const history = useHistory();
    console.log(history);
    return (
        <>
            <p>About Page </p>
            <button
                onClick={() => history.push("/", { from: "About" })}
            >
                Home
            </button>
            <button
                onClick={() => history.push("/contact", { from: "About" })}
            >
                Contact
            </button>
            <button
                onClick={() => {
                    history.goBack();
                }}
            >
                Go back
            </button>
            <p> You were redirected from {location.state.from}</p>
        </>
    );
}
const Contact = ({location}) => {
    const history = useHistory();
    return (
        <>
            <p>Contact Page</p>
            <button
                onClick={() => history.push("/about", { from: "Contact" })}
            >
                About
            </button>
            <button
                onClick={() => history.push("/", { from: "Contact" })}
            >
                Home
            </button>
            <button
                onClick={() => {
                    history.goBack();
                }}
            >
                Go back
            </button>
            <p>You were redirected from {location.state.from}</p>
        </>
    );
}
const Foo = () => <p>Foo</p>;

export {HomePage, About, Contact, Foo};