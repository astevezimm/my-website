import {LinksFunction, LoaderFunction} from '@remix-run/node'
import styles from './game.css?url'
import Game from '~/routes/_app.unity3d-demos/game'

export const loader: LoaderFunction = async () => {
  return { title: "Unity3D Demos" }
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }]

export default function Route() {
  return (
    <>
      <Game title="Chess" id="chess" />
      <Game title="Slider Puzzle" id="slider-puzzle" />
      <Game
        title="Puzzle Cube"
        id="puzzle-cube"
        description={
          <>
            <span className="note">Note: This is less compatible with smaller screens</span>
            Use left mouse to perform twists. Hold down ctrl to do double twist. Right mouse to rotate. Left and right arrows to spin.
          </>
        }
      />
      <Game
        title="4 Moons"
        id="4-moons"
        description="Simulates phases for 4 moons, for each day of the year, in the world of my WereDragon stories."
      />
    </>
  )
}