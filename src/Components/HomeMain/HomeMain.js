import React from 'react';
import {Link} from "react-router-dom";

const HomeMain = () => {
    return (
        <div
            id="intro-example"
            className="p-5 text-center bg-dark"
        >
            <div className="mask">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white">
                        <h1 className="mb-3">Насолоджуйся Dota 2 з нами</h1>
                        <h5 className="mb-4">Найкращі історії та гайди на героїв</h5>
                        <Link
                            className="btn btn-outline-light btn-lg m-2"
                            to="Portal"
                            role="button"
                            rel="nofollow"
                        >Наш портал</Link
                        >
                        <Link
                            className="btn btn-outline-light btn-lg m-2"
                            to="About"
                            role="button"
                        >Про нас</Link
                        >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeMain;