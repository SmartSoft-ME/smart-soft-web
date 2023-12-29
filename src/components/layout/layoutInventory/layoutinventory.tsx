import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { HeaderInventory } from '@/components/headerInventory'
import { Header } from '@/components/header'

interface Props {
  children: ReactNode
}

const InventoryLayout: FC<Props> = ({ children }) => {
  return (
    <Box component="main">
      <Header/>
      <HeaderInventory />
      {children}
    </Box>
  )
}

export default InventoryLayout
