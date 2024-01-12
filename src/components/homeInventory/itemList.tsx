import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { green } from '@mui/material/colors';
import { listDataItems } from './itemList.data';
interface ItemListProps {
  onSelect: (itemKey: string) => void;
}

const ItemList: FC<ItemListProps> = ({ onSelect }) => {
  const [selectIndex, setSelectIndex] = useState<number>(0);

  const handleListItemClick = (index: number, itemKey: string): void => {
    setSelectIndex(index);
    onSelect(itemKey);
  };

  
  return (
    <Box sx={{ width: '100%', maxWidth: 300 }}>
      <nav aria-label="main mailbox folders">
        <List>
          {listDataItems.map((item, index) => (
            <ListItem disablePadding key={item.primary}>
              <ListItemButton
                selected={selectIndex === index}
                onClick={() => handleListItemClick(index, item.key)}
                sx={{
                  borderBottom: '1px solid #e0e0e0',
                  '&.Mui-selected': {
                    background: green[200],
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      left: 0,
                      width: '0px',
                      backgroundColor: green[600],
                      transition: 'width 0.3s ',
                    },
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    width: '0',
                    backgroundColor: green[600],
                    transition: 'width 0.3s ',
                  },
                  '&:hover': {
                    background: 'background.paper',
                  },
                  '&.Mui-selected::before': {
                    width: '5px',
                  },
                }}
              >
                <ListItemText
                  primary={item.primary}
                  secondary={item.secondary}
                  primaryTypographyProps={{
                    style: {
                      fontWeight: selectIndex === index ? 'bold' : 'normal',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <Divider />
        </List>
      </nav>
    </Box>
  )
}
export default ItemList
