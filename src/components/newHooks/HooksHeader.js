import React from 'react';
import { Link } from 'react-router-dom';

const HooksHeader = () => {
    return (
        <div>
            <h1>Hooks</h1>
            <Link to="/countusestateuseeffect">
                <h4>Count</h4>
            </Link>
            <Link to='/countusestate'>
                <h3>Count useState</h3>
            </Link>
            <Link to='/cleaninguseeffect'>
                <h3>Cleaning useEffect</h3>
            </Link>
            <Link to='/noteusestate'>
                <h3>Note useState</h3>
            </Link>
        </div>
    )
}

export default HooksHeader;