export interface IDetailProps {
  content: string
}
export default function Detail({ content }: IDetailProps) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
