import {Typography} from "@material-ui/core"
import { FC } from "react"

export const Header: FC = ({
  children
}) => {
  return (
    <Typography variant="h4" gutterBottom>
      {children}
    </Typography>
  )
}
