import type { FC } from "react"

interface Props{
    children:React.ReactNode;
}

const Container: FC<Props> = ({children}) => {
  return (
    <div className="padding-x max-width">
        <div className="home-error-container">
            {children}
        </div>
    </div>
  )
}

export default Container