import { useMatches } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import styles from "./layout.css?url";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }]

export default function App() {
  const matches = useMatches()
  // @ts-expect-error - There should always be a title
  const title = matches.findLast((match) => match.data.title).data.title
  return (
    <>
      <Header>{title}</Header>
      <Main key={title} />
      <Footer />
    </>
  );
}
