import {LoaderFunction} from '@remix-run/node'

export const loader: LoaderFunction = async () => {
  return { title: "Unity3D Demos" }
}

export default function Route() {
  return "Unity3D Demos"
}