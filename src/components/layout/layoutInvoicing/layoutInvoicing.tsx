
import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { HeaderProps } from '../../headerProps'
import {navigationsInvoicing} from '../../navigationp/navigationInvoicing'
import { Header } from '@/components/header'

interface Props {
  children: ReactNode
}

const AccountingLayout: FC<Props> = ({ children }) => {
  return (
    <Box component="main">
      <Header/>
      <HeaderProps navigations={navigationsInvoicing} />
      {children}
    </Box>
  )
}

export default AccountingLayout
