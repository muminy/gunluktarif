import style from "./detail.module.css"

export interface IDetailProps {
  content: string
}
export default function Detail({ content }: IDetailProps) {
  return (
    <div
      className={style.recipe}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
