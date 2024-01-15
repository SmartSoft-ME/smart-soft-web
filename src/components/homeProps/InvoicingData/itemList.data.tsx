import  DetailItems  from "../detailsitem";
import { DynamicReportingData } from "./DynamicReporting";
import { FlexibleData } from "./FlexibleSmarat.data";
import { ExpenseManagmentData } from "./ExpenseManagement";
export interface ListItemType {
    primary: string;
    secondary: string;
    key: string;
    component: JSX.Element; 
  }

export const listDataItems: ListItemType[] = [
    {
      key: 'Flexible and smart invoicing',
      primary: 'Flexible and smart invoicing',
      secondary: '',
      component: <DetailItems data={FlexibleData}/>
    },
    {    
        key: 'Expense management', 
        primary: 'Expense management',   
        secondary: '',
        component: <DetailItems data={ExpenseManagmentData}/>
     },
    { 
        key: 'Dynamic reporting',
         primary: 'Dynamic reporting',
          secondary: '',
          component: <DetailItems data={DynamicReportingData}/>
     },
  ]