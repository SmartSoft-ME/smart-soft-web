import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import Image from 'next/image'
interface LogoProps {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<LogoProps> = ({ onClick, variant }) => {
  const router = useRouter()

  const isInventoryPath = router.pathname.includes('inventory')
  const isAccountingPath = router.pathname.includes('accounting')
  const isInvoicingPath = router.pathname.includes('invoicing')
  const isSaasPath = router.pathname.includes('saas')
  const isPermisePath = router.pathname.includes('onPremise')
  const isHybridPath = router.pathname.includes('hybrid')

  let logoText = 'Smarter ERP'
  if (isInventoryPath) {
    logoText = 'Smart Inventory'
  } else if (isAccountingPath) {
    logoText = 'Smart Accounting'
  } else if (isInvoicingPath) {
    logoText = 'Smart Invoicing'
  } else if (isSaasPath) {
    logoText = 'SaaS ERP'
  } else if (isPermisePath) {
    logoText = 'OnPremise ERP'
  } else if (isHybridPath) {
    logoText = 'Hybrid ERP'
  }
  return (
    <Box onClick={onClick} sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
      {logoText === 'Smarter ERP' ? (
      
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/images/logo/smarter-erp-logo.png"
          alt="Main Page Logo"
          width={200} 
          height={50} 
        />
      ) : (
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 700,
            alignItems: 'center',
            '& span': {
              color: variant === 'primary' ? 'primary.main' : 'unset',
            },
          }}
        >
          {logoText}
        </Typography>
      )}
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
