import React from 'react';
import Routing from '../pages';
import { Suspense } from 'react';
import './index.module.css';

const App = () => {
    return (
        <div className='wish-to-lern'>
            <Suspense fallback={<p>Loading...</p>}>
                <Routing />
            </Suspense>
        </div>
    );
};

export default App;
