import  DetailItem  from "./detailsitem";
import Dashboarditem from './dashboarditem';
import StockItem from './stockitem'

interface ListItemType {
    primary: string;
    secondary: string;
    key: string;
    component: JSX.Element; 
  }

export const listDataItems: ListItemType[] = [
    {
      key: 'products',
      primary: 'Products management',
      secondary: 'Manage your product listings',
      component: <DetailItem/>
    },
    {    
        key: 'stock', 
        primary: 'Stock management',   
        secondary: 'Adjust stock levels and manage inventory',
        component: <Dashboarditem/>
     },
    { 
        key: 'dashboards',
         primary: 'Dashboards and reporting',
          secondary: 'View reports and performance dashboards',
          component: <StockItem/>
     },
  ];