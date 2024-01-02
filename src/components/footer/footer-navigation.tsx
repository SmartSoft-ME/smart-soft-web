import React, { FC } from 'react' 
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import type { Navigation } from '@/interfaces/navigation'
import { navigations as headerNavigations } from '@/components/navigation/navigation.data'
import { FooterSectionTitle } from '@/components/footer'
import { Link as ScrollLink } from 'react-scroll'
import { Typography } from '@mui/material'
import { useState } from 'react'
import  FormDialog  from '../../components/Popup/Popup-button'

const courseMenu: Array<Navigation> = [
  {
    label: 'UI/UX Design',
    path: '#',
  },
  {
    label: 'Mobile Development',
    path: '#',
  },
  {
    label: 'Machine Learning',
    path: '#',
  },
  {
    label: 'Web Development',
    path: '#',
  },
]

const pageMenu = headerNavigations

const companyMenu: Array<Navigation> = [
  { label: 'Contact Us', path: '../../contacUs' },
  // { label: 'Privacy & Policy', path: '../../privacy&Policy' },
  // { label: 'Term & Condition', path: '../../term&Condition' },
  // { label: 'FAQ', path: '../../faq'},
]

interface NavigationItemProps {
  label: string
  path: string
  openDialog: () => void;
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path, openDialog }) => {
  const handleClick = () => {
    if (path === '../../contacUs') {
      openDialog();
    }
  };
  return (
    <ScrollLink to={path} smooth>
      <MuiLink
        component={Typography}
        underline="hover"
        sx={{
          display: 'block',
          cursor : 'pointer',
          mb: 1,
          color: 'primary.contrastText',
        }}
       onClick={handleClick}
      >
        {label}
      </MuiLink>
    </ScrollLink>
    
  )
}

{`<Grid item xs={12} md={4}>
<FooterSectionTitle title="Course" />
{courseMenu.map(({ label, path }, index) => (
  <NavigationItem key={index + path} label={label} path={/* path */ '#'} />
))}
</Grid>`}
const FooterNavigation: FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };
  
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Menu" />
        {pageMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} openDialog={openDialog} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="About" />
        {companyMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} openDialog={openDialog}/>
        ))}
      </Grid>
      <FormDialog open={dialogOpen} onClose={closeDialog} />
    </Grid>
  )
}

export default FooterNavigation
