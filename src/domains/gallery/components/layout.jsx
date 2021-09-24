import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

export const Layout(props) {
  return (
    <div>
      <NavBar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

.main {
    margin: 3rem auto;
    width: 90%;
    max-width: 40rem;
  }