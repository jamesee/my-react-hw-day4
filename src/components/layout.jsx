import { NavBar } from './navbar';

export const Layout = (props) => {
  return (
    <div>
      <NavBar />
      <main >{props.children}</main>
    </div>
  );
}

