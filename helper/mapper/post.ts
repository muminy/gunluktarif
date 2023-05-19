import { defaultImage } from "#/constants/site"
import { WPPost } from "#/types/wordpress"
import { NameValue, PostType } from "#/types/index"
import { toCategory } from "./category"
import { toComment } from "./comment"
import { removeHtmlTags } from "../string"

export function toPost({
  author,
  featuredImage,
  steps,
  ingredients: ingrads,
  kalori,
  protein,
  time,
  gram,
  categories,
  comments,
  commentCount,
  excerpt,
  ...common
}: WPPost): PostType {
  const post = {
    ...common,
    commentCount: commentCount ?? 0,
    excerpt: removeHtmlTags(excerpt),
    author: author.node,
    image: {
      sourceUrl: defaultImage,
      title: "default_tarif",
    },
  } as PostType

  // ingredients added split for list
  // sperator '-NEW-'
  const ingredientsList = ingrads.split("-NEW-")
  const steplist = steps.split("-NEW-")

  const ingredients = ingredientsList
    .filter(Boolean)
    .map<NameValue>((item) => {
      // split adde for name and value
      // seperator ' - '

      if (item.includes(":")) {
        return {
          name: item,
          type: "header",
        }
      }
      const itemList = item.split(" - ")

      if (itemList.length > 1) {
        return {
          name: itemList[1],
          value: itemList[0],
          type: "ingredient",
        }
      } else {
        return { name: itemList[0], type: "ingredient" }
      }
    })

  const stepsData = steplist.map((item) => item)

  if (featuredImage?.node) {
    post.image = featuredImage.node
  }

  const nutritional: NameValue[] = [
    { value: gram, name: "Gram" },
    { value: time, name: "Süre" },
    { value: kalori, name: "Kalori" },
    { value: kalori, name: "Protein" },
  ].filter((item) => item.value > 0)

  return {
    ...post,
    nutritional,
    ingredients,
    steps: stepsData,
    categories: categories.nodes.map(toCategory),
    comments: toComment(comments.nodes),
  }
}
