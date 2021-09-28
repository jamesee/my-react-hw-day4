import { Link } from 'react-router-dom';
import { useContext } from 'react';

import classes from './navbar.module.css';
import { CollectionsContext } from '../domains/gallery';

export const NavBar = () => {
  const collectionsCtx = useContext(CollectionsContext);
  
  return (
    <header className={classes.header}>
      <div className={classes.logo}>FrontendDev-Capstone</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Gallery</Link>
          </li>
          <li>
            <Link to='/collections'>My Collections              
            <span className={classes.badge}>
                {collectionsCtx.totalCollections}
              </span>
              </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
