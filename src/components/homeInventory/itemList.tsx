import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { green} from '@mui/material/colors';

interface ItemListProps {
    onSelect: (item: string) => void;
  }

  interface ListItem {
    primary: string;
    secondary: string;
    key: string;
  }

  const  itemList : FC <ItemListProps> = ({ onSelect })=> {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectIndex , setSelectIndex] = useState(0);

    const handleListItemClick = (index: number, itemKey: string) => {
        setSelectIndex(index);
        onSelect(itemKey); 
      };

    const listItems:ListItem[] =[
        {
            key:'products',
            primary: "Products management",
            secondary: "Manage your product listings",
        },
        {key:'stock',
            primary: "Stock management/adjustment",
      secondary: "Adjust stock levels and manage inventory",
        },
        {key:'dashboards',
            primary: "Dashboards and reporting",
            secondary: "View reports and performance dashboards",
        },
    
    ];

    return (
        <Box sx={{ width: '100%', maxWidth: 300, bgcolor: 'background-paper' }}>
            <nav aria-label="main mailbox folders">
                <List>
                  {listItems.map((item,index)=>(
                    <ListItem disablePadding key={item.primary}>
                        <ListItemButton
                            selected={selectIndex===index}
                            onClick={()=>handleListItemClick(index , item.key)}
                        sx={{
                            '&.Mui-selected':{
                                background: green[200],
                                position:'relative',
                            '&::before':{
                                content:'""',
                                position:'absolute',
                                top:0,
                                bottom:0,
                                left:0,
                                width:'0px',
                                backgroundColor:green[600],
                                transition: 'width 0.3s ',
                            }
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
                            '&:hover':{
                                background :'background.paper',
                            },
                            '&.Mui-selected::before':{
                                width:'5px'
                            },
                        }}>
                            <ListItemText
                                primary={item.primary}
                                secondary={item.secondary}
                                primaryTypographyProps={{
                                    style:{
                                        fontWeight: selectIndex === index ? 'bold' : 'normal',
                                    }
                                }}  
                            />
                        </ListItemButton>
                    </ListItem>
                  ))}
                  <Divider/>
                </List>
            </nav>
        </Box>
    );
}
export default itemList;