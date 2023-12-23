
import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { HeaderProps } from '../../headerProps'
import {navigationsaccounting} from '../../navigationp/navigationAccounting'

interface Props {
  children: ReactNode
}

const AccountingLayout: FC<Props> = ({ children }) => {
  return (
    <Box component="main">
      <HeaderProps navigations={navigationsaccounting} />
      {children}
    </Box>
  )
}

export default AccountingLayout
