import React from 'react'

export default function Info() {
    return (
        <div className="info">
            <img className="info-image" src="../images/picture.png" />
            <h1 className="info-title">Victor Duran</h1>
            <p className="info-subtitle">Frontend Developer</p>
            <p className="info-website">victoduran.website</p>
            <div className="info-btns">
                <a href="mailto: victor.duran.em@gmail.com" className="btn btn-primary"><i className="fa-solid fa-envelope"></i> Email</a>
                <a href="https://www.linkedin.com/in/victor-duran/" className="btn btn-secondary"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
            </div>
        </div>
    )
}