import { Container, createTheme, ThemeProvider } from '@mui/material'
import React, { FC } from 'react'

const theme = createTheme({
  typography: {
    fontFamily: 'Inter',
  }
})

type MUIThemeProps = {
  children: React.ReactNode
}

const MUITheme: FC<MUIThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='lg'>{children}</Container>
    </ThemeProvider>
  )
}

export default MUITheme
