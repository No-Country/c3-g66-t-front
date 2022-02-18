import Router from '../Router/Router';
import { Provider } from 'react-redux';
import store from '../store'
const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
};

export default App;
