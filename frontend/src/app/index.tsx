import { BrowserRouter } from 'react-router-dom';
import Routing from '../page';
import classes from './index.module.css';

function App() {
    return (
        <BrowserRouter>
            <div className={classes.app}>
                <Routing />
            </div>
        </BrowserRouter>
    );
}

export default App;