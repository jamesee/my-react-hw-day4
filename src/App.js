import { Route, Switch } from 'react-router-dom';
import { CollectionsPage } from './pages/my-collections';
import { Gallery } from "./pages/gallery";
import { Layout } from './components/layout';
import { MoviesDetail } from './pages/movie-detail';


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
        <Route path='/movie/:id'>
          <MoviesDetail />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
