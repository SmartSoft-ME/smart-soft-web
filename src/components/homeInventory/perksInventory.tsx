import React, { FC, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Zoom from '@mui/material/Zoom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ItemList from './itemList';
import { listDataItems } from './itemList.data';
import DetailItem from './detailsitem';
import AccordionUsage from './accordionItem';
const PerksInventory: FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<JSX.Element | null>(<DetailItem />);
  // const [inZoom, setInZoom] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleSelect = (itemKey: string) => {
    const item = listDataItems.find((item) => item.key === itemKey);
    if (item) {
      setSelectedComponent(() => item.component);
      // setInZoom(true);
    }
  };

  return (
    <Box id="Section2" sx={{  py: { xs: 6, md: 6 } }}>
      <Container>
        <Typography variant="h1" sx={{ textAlign: 'center', mb: 2 }}>
           Features
        </Typography>

        {isMobile ? (

          <AccordionUsage/>
        ):(
        <Box sx={{  display: 'flex', justifyContent: 'space-between', gap: '24px' }}>
          <ItemList onSelect={handleSelect} />
          <Box sx={{ flex: 1 }}>
            {/* <Zoom in={inZoom}> */}
              {selectedComponent}
            {/* </Zoom> */}
          </Box>
        </Box>
        )}
      </Container>
    </Box>
  );
};

export default PerksInventory;
