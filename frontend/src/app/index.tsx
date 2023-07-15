import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import styles from './index.module.scss';

const App: React.FunctionComponent = () => {
    return (
        <div className={styles.app}>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;