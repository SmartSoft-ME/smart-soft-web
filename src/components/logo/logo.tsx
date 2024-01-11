import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';

interface LogoProps {
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const Logo: FC<LogoProps> = ({ onClick, variant }) => {
  const router = useRouter();

  const isInventoryPath = router.pathname.includes('inventory');
  const isAccountingPath = router.pathname.includes('accounting');
  const isInvoicingPath = router.pathname.includes('invoicing');
  const isSaasPath = router.pathname.includes('saas');
  const isPermisePath = router.pathname.includes('onPremise');
  const isHybridPath = router.pathname.includes('hybrid');



  let logoText = 'SmartERP';
  if (isInventoryPath) {
    logoText = 'Smart Inventory';
  } else if (isAccountingPath) {
    logoText = 'Smart Accounting';
  } else if (isInvoicingPath) {
    logoText = 'Smart Invoicing';
  }
  else if (isSaasPath) {
    logoText = 'SaaS ERP';
  } else if (isPermisePath) {
    logoText = 'OnPremise ERP';
  } else if (isHybridPath) {
    logoText = 'Hybrid ERP';
  }
  return (
    <Box onClick={onClick} sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', position: 'relative' }}>
      {logoText==='SmartERP' && (
        // This image will only render on the main page
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/images/headline-curve.svg" alt="Main Page Logo" style={{ position: 'absolute',top:0,left:0,width: '100%', height: 'auto', zIndex: 1 }} />
      )}
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: 700,
          position: 'relative',
          top:"6px",
          zIndex: 2,
            alignItems:'center',
          '& span': {
            color: variant === 'primary' ? 'primary.main' : 'unset',
          },
        }}
      >
        {logoText}
      </Typography>
    </Box>
  );
};

Logo.defaultProps = {
  variant: 'primary',
};

export default Logo;
