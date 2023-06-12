import { router } from './router';
import classes from './index.module.scss';
import { RouterProvider } from 'react-router-dom'

const App: React.FunctionComponent = () => {
    return (
        <div className={classes.app}>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;