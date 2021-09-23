import {Typography} from "@material-ui/core"
import { FC } from "react"

export const Paragraph: FC = ({
  children
}) => {
  return (
    <Typography variant="body1" paragraph>
      {children}
    </Typography>
  )
}

