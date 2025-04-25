import {LinksFunction, type MetaFunction} from '@remix-run/node'
import styles from './portfolio.css?url'
import {makeMeta} from '~/global'

export const meta: MetaFunction = () => makeMeta("Portfolio", "Andrew Zimmerman's porfolio for job search as a frontend developer")

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }]

export default function PortfolioPage() {
  // Eventually, Zimm Score
  
  // Much Tado About About Anything
  
  // Personal website
  // /posts/1
  // /images/kirby.jpg
  
  // Childhood Tribute
  
  // One Rule
  
  // Potato Salad
  // https://potato-salad.herokuapp.com
  
  // Leila Tribute
  // https://astevezimm.github.io
  
  return (
    <>
      <h1>Andrew Zimmerman&apos;s Portfolio</h1>
      <ul>
        {/* <ProjectLink title="Zimm Score" href='/' image='' alt="" */}
        {/* <ProjectLink title="Much tTodo About Anything" href='/' image='' alt="" /> */}
        <ProjectLink title="Personal Website" href='/posts/1' image='/images/kirby.jpg' alt="My dog" />
        <ProjectLink
          title="Childhood Tribute"
          href='https://andy-zees-childhood-tribute-ea73851d705f.herokuapp.com/'
          image='/images/portfolio/shed.jpg' alt="Shed"
        />
        <ProjectLink title="One Rule Draft" href='/' image='/images/portfolio/spaceship.jpg' alt="Spaceship" />
        <ProjectLink
          title="Making Potato Salad"
          href='https://potato-salad.herokuapp.com'
          image='/images/portfolio/tater-salad.jpg' alt="Potato Salad" />
        <ProjectLink
          title="Leila Tribute" href='https://astevezimm.github.io'
          image='/images/portfolio/leila.jpg' alt="Leila"
        />
      </ul>
    </>
  )
}

type ProjectLinkProps = {
  title: string
  href: string
  image: string
  alt: string
}

function ProjectLink({title, href, image, alt}: ProjectLinkProps) {
  return (
    <li>
      <h2>{title}</h2>
      <a href={href} target="_blank" rel="noreferrer"><img src={image} alt={alt} /></a>
    </li>
  )
}
