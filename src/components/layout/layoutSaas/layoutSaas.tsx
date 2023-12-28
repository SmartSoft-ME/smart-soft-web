
import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { Header } from '@/components/header'

interface Props {
  children: ReactNode
}

const SaasERPLayout: FC<Props> = ({ children }) => {
  return (
    <Box component="main">
      <Header/>
      {children}
    </Box>
  )
}

export default SaasERPLayout
