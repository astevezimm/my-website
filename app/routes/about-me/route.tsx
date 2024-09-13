import type {MetaFunction} from '@remix-run/node'
import {makeMeta} from '~/global'

export const meta: MetaFunction = () => makeMeta("About Me", "Let me tell you a little about myself. Pull up a chair by the fire and listen to my tale.")

export default function AboutMePage() {
  return "About Me"
}