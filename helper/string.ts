export function removeHtmlTags(str: string) {
  return str.replace(/(<([^>]+)>)/gi, "")
}

export function truncate(str: string, max: number, suffix = "...") {
  return `${str.slice(0, max)}${suffix}`
}

export function getDate(date: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    dateStyle: "medium",
  }).format(new Date(date))
}
