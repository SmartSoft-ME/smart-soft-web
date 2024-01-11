
import React, { FC , useState} from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import   ItemList  from './itemList'
import DetailItem from './detailsitem'
import  Dashboarditem  from './dashboarditem';
import StockItem from './stockitem'
const PerksInventory: FC = () => {
    const [selectedItem, setSelectedItem] = useState<string>('products');

  return (
    <Box
    id="Section2"
    sx={{ backgroundColor: 'background-paper', py: { xs: 6, md: 6 } }}>
      <Container>
        <Box  sx={{backgroundColor:'background-paper'}}>
            <Typography variant="h1" sx={{ textAlign: 'center', mb:2 }}>Product capabilities</Typography></Box>
        <Box sx={{backgroundColor:'background-paper' , display:'flex' , justifyItems:'space-between'}} >
                <ItemList onSelect={setSelectedItem} />
                {selectedItem ==='products' && <DetailItem/>}
                {selectedItem ==='dashboards' && <Dashboarditem/>}
                {selectedItem ==='stock' && <StockItem/>}


        </Box>
      </Container>
    </Box>
  );
};

export default PerksInventory;
