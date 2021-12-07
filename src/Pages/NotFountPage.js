import React from 'react';
import {Link} from "react-router-dom";

const NotFountPage = () => {
    return (
        <div className="text-light p404 text-center pt-5">
          <h1>Поверніться на <Link to={"/"}> Головну сторінку</Link></h1>
        </div>
    );
};

export default NotFountPage;