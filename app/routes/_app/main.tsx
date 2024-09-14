import {Outlet} from '@remix-run/react'

export default function Main() {
  return (
    <main className="constrained-width">
      <span>
        <Outlet />
      </span>
    </main>
  )
}