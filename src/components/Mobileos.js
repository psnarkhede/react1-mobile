import React from "react";

let style1 = {
    fontSize: "20px",
    width: "90%",
    margin: "auto",
    textAlign: "left",
    marginTop:"50px",
}

let style2 = {
    textAlign: "left",
    width: "90%",
    margin: "auto",
}

const Os = () => {
    return (
        <div style={style1}>
            <h2>Mobile Operating System</h2>

        </div>
    )
}

const Osli = () => {
    return (
        <div style={style2}>
            <ul>
                <li>Android</li>
                <li>BlackBerry</li>
                <li>iPhone</li>
                <li>Windows Phone</li>
            </ul>
        </div>
    )
}

const Manuacturers = () => {
    return (
        <div style={style1}>
            <h2>Mobile Manuacturers</h2>

        </div>
    )
}

const Mali = () => {
    return (
        <div style={style2}>
            <ul>
                <li>Samsung</li>
                <li>HTC</li>
                <li>Micromax</li>
                <li>Apple</li>
            </ul>
        </div>
    )
}

export { Os, Osli, Manuacturers, Mali };