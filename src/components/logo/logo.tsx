import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';

interface Props {
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  const router = useRouter();

  // Check if the current path contains 'inventory'
  const isInventoryPath = router.pathname.includes('inventory');

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
        {isInventoryPath ? 'SmartInventory' : 'Smartsoft'}
      </Typography>
    </Box>
  );
};

Logo.defaultProps = {
  variant: 'primary',
};

export default Logo;
