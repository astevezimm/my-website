import {LinksFunction, LoaderFunction, type MetaFunction} from '@remix-run/node'
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
        { /* Zimm Score */ }
        <ProjectLink title="Much Todo About Anything" href='/posts/1' image='/images/kirby.jpg' alt="My dog" />
        <ProjectLink title="Personal Website" href='/posts/1' image='/images/kirby.jpg' alt="My dog" />
        <ProjectLink title="Childhood Tribute" href='/posts/1' image='/images/kirby.jpg' alt="My dog" />
        <ProjectLink title="One Rule Draft" href='/posts/1' image='/images/kirby.jpg' alt="My dog" />
        <ProjectLink title="Making Potato Salad" href='https://potato-salad.herokuapp.com' image='/images/kirby.jpg' alt="My dog" />
        <ProjectLink title="Leila Tribute" href='https://astevezimm.github.io' image='/images/kirby.jpg' alt="My dog" />
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
      <a href={href} target="_blank"><img src={image} alt={alt} /></a>
    </li>
  )
}
