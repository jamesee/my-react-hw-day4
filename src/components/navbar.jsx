import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LogoutButton } from "domains/auth";

import classes from './navbar.module.css';
import { CollectionsContext } from '../domains/gallery';

export const NavBar = () => {
  const collectionsCtx = useContext(CollectionsContext);
  
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Homework Day4</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Movies Gallery</Link>
          </li>
          <li>
            <Link to='/collections'>My Collections              
            <span className={classes.badge}>
                {collectionsCtx.totalCollections}
              </span>
              </Link>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}
