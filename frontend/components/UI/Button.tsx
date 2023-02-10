import { Button as MuiButton } from '@mui/material'
import * as React from 'react'

export const Button = ({ children }: { children: string | React.ReactNode }) => {
   return <MuiButton>{children}</MuiButton>
}
