import {ReactNode} from 'react'
import {NavLink, useLocation} from '@remix-run/react'

export default function Header({children}: { children: ReactNode }) {
  const isCatPage = useLocation().pathname.includes('/categories');
  
  return (
    <header>
      <nav className="main-nav constrained-width">
        <span>
          <span className="brand">ASZ</span>
          <NavLink className={isCatPage ? "active": ""} to="/posts">Blog</NavLink>
          <NavLink to="/about-me">About Me</NavLink>
          <NavLink to="/unity3d-demos">Unity3D Demos</NavLink>
        </span>
      </nav>
      <h1 className="subtitle constrained-width">
        <span>{children}</span>
      </h1>
    </header>
  );
}