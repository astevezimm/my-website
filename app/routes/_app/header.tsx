import {ReactNode} from 'react'
import {NavLink} from '@remix-run/react'

export default function Header({children}: { children: ReactNode }) {
  return (
    <header>
      <nav className="constrained-width">
        <span>
          <span className="brand">ASZ</span>
          <NavLink to="/posts/1">Blog</NavLink>
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