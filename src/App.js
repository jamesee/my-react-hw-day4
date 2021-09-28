import { Route, Switch } from 'react-router-dom';
import {CollectionsPage} from './pages/my-collections';
import { Gallery } from "./pages/gallery";
import { Layout } from './components/layout';


function App() {
  return (
    <Layout >
      <Switch>
        <Route path='/' exact>
          <Gallery />
        </Route>
        <Route path='/collections'>
          <CollectionsPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
