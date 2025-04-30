import { useEffect } from "react"
import { useNavigate } from "@remix-run/react"
import type {MetaFunction} from '@remix-run/node'
import {makeMeta} from '~/global'

export const meta: MetaFunction = () => makeMeta("", "Welcome to the website for Andrew Zimmerman!")

export default function HomePage() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/portfolio")
  }, [navigate])

  return null
}
