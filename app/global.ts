const RootTitle = "Andrew Zimmerman"

export function makeMeta(title: string, description: string, image: string = "/images/kirby.jpg") {
  return [
    { title: `${RootTitle} | ${title}` },
    { name: "description", content: description },
    { name: "og:description", content: description },
    { name: "og:image", content: image },
  ]
}
