import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../image/404.svg'

const NotFound = () => {
    return (
        <div>
            <img className="not-found"  src={img} alt=""/>
            <div>
            <div>
        <Link to="/">
          <button > Go back</button>
        </Link>
      </div>
            </div>
        </div>
    );
};

export default NotFound;