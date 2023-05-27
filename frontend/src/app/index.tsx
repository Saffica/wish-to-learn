import { Router } from './router';
import classes from './index.module.scss';

const App: React.FunctionComponent = () => {
    return (
        <div className={classes.app}>
            <Router />
        </div>
    );
}

export default App;