import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { HeaderInventory } from '@/components/headerInventory'

interface Props {
  children: ReactNode
}

const InventoryLayout: FC<Props> = ({ children }) => {
  return (
    <Box component="main">
      <HeaderInventory />
      {children}
    </Box>
  )
}

export default InventoryLayout
