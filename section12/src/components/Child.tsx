import { forwardRef } from "react"

type ChildProps = {
  title: string;
}

const Child = forwardRef<HTMLDivElement, ChildProps>(({title}: ChildProps, ref) => {
  return (
    <div ref={ref}>{title}</div>
  )
})
export default Child