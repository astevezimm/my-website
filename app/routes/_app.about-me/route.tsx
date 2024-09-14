import {LinksFunction, LoaderFunction, MetaFunction} from '@remix-run/node'
import {makeMeta} from '~/global'
import styles from './about-me.css?url'
import Item from '~/routes/_app.about-me/Item'
import Section from '~/components/Section'
import KirbySlideShow from '~/routes/_app.about-me/KirbySlideShow'
import boardgames from './boardgames.json'

export const loader: LoaderFunction = async () => {
  return {title: "Allow me to introduce myself..."}
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }]

export const meta: MetaFunction = () => makeMeta("About Me", "Let me tell you a little about myself. Pull up a chair by the fire and listen to my tale.")

export default function AboutMePage() {
  return (
    <>
      <img src="/images/kirby.jpg" className="profile" alt="Me with Kirby" />
      <Item
        title="Served a mission"
        subtitle="In New Zealand (2001-2003)"
        image="/images/mission.jpg"
        alt="New Zealand Mission"
        description={
          <>
            For the Church of Jesus Christ of Latter-day Saints, I served in the
            lovely green, rolling hills, dotted with sheep, for two years.
            <br />
            <br />I learned a lot about the world and myself and developed an
            affinity for the Maori culture. I met a lot of great people and had
            my best 2 years as the missionary cliche goes.
          </>
        }
      />
      <Item
        title="Graduated from BYU"
        subtitle="With a Bachelor Computer Science 2008"
        image="/images/byu.jpg"
        alt="BYU"
        description={
          <>
            Mine is an atypical tale. I started in the BYU art program, but it
            was during the time that Disney and other animation studios were
            laying off animators.
            <br />
            <br />
            In conjunction with creative interests, I had a knack for math, so
            my dad suggested I try computer science.
            <br />
            <br />I worked for a physics professor toward the end, programming
            to aid his research.
          </>
        }
      />
      <Item
        title="I ❤ Hiking"
        subtitle="In the Utah Mountains"
        image="/images/hiking.jpg"
        alt="Hike with Leila"
        description={
          <>
            I most frequently traverse the trail of Y Mountain. I used to do
            this with&nbsp;
            <a
              href="https://astevezimm.github.io/"
              target="_blank"
              rel="noreferrer"
            >
              Leila, my former dog
            </a>
            &nbsp;in the picture (Battle Creek hike).
            <br />
            <br />
            Now my new furry companion Kirby gets to join me, with his interest
            in the grasshoppers, lizards, and squirrels.
          </>
        }
      />
      <Section title="Speaking of Kirby...">
        <h3>Meet my Current Buddy Boy!</h3>
        <KirbySlideShow />
      </Section>
      <Section title="I ❤ Board Games">
        <h3>Here&apos;s a List of Favorites</h3>
        <ul className="boardgames">
          {boardgames.map((game) => (
            <li key={game.name}>
              <p>{game.name}</p>
              <img src={game.image} alt={game.name} />
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}