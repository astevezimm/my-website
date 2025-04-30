import {LinksFunction, type MetaFunction} from '@remix-run/node'
import styles from './portfolio.css?url'
import {makeMeta} from '~/global'

export const meta: MetaFunction = () => makeMeta("Portfolio", "Andrew Zimmerman's porfolio for job search as a frontend developer")

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }]

export default function PortfolioPage() {
  return (
    <>
      <h1>Andrew Zimmerman&apos;s Portfolio</h1>
      <button className='resume' onClick={() => window.open('/resume.pdf', '_blank')}>
        Download Resume
      </button>
      <ul>
        {/* <ProjectLink
          title="Zimm Score"
          href='/'
          image='' alt=""
          source='tabletop-scoring-v2'
        /> */}
        {/* <ProjectLink
          title="Much tTodo About Anything"
          href='/'
          image='' alt=""
          source='much-ttodo-about-anything'
        /> */}
        <ProjectLink
          title="Personal Website"
          href='/posts/1'
          image='/images/kirby.jpg' alt="My dog"
          source='my-website'
        />
        <ProjectLink
          title="Childhood Tribute"
          href='https://andy-zees-childhood-tribute-ea73851d705f.herokuapp.com/'
          image='/images/portfolio/shed.jpg' alt="Shed"
          source='love-letter'
        />
        <ProjectLink
          title="Rule One Draft"
          href='/'
          image='/images/portfolio/spaceship.jpg' alt="Spaceship"
          source='rule-one-draft-method'
        />
        <ProjectLink
          title="Making Potato Salad"
          href='https://potato-salad.herokuapp.com'
          image='/images/portfolio/tater-salad.jpg' alt="Potato Salad"
          source='potato-salad'
        />
        <ProjectLink
          title="Leila Tribute"
          href='https://astevezimm.github.io'
          image='/images/portfolio/leila.jpg' alt="Leila"
          source='astevezimm.github.io'
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
  source: string
}

function ProjectLink({title, href, image, alt, source}: ProjectLinkProps) {
  return (
    <li>
      <h2>{title}</h2>
      <a href={href} target="_blank" rel="noreferrer"><img src={image} alt={alt} /></a>
      <button onClick={() => window.open(`https://github.com/astevezimm/${source}`, '_blank')}>
        Source on Github
      </button>
    </li>
  )
}
