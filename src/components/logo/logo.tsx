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



  let logoText = 'Smartsoft';
  if (isInventoryPath) {
    logoText = 'SmartInventory';
  } else if (isAccountingPath) {
    logoText = 'SmartAccounting';
  } else if (isInvoicingPath) {
    logoText = 'SmartInvoicing';
  }
  else if (isSaasPath) {
    logoText = 'SaasERP';
  } else if (isPermisePath) {
    logoText = 'OnPermiseERP';
  } else if (isHybridPath) {
    logoText = 'HybridERP';
  }

  return (
    <Box onClick={onClick} style={{ cursor: 'pointer' }}>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: 700,
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
