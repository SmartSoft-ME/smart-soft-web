import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import { Container } from '@mui/material'
import { NavigationInvetnory } from '../navigationInventory'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { Menu, Close } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton'
import { Logo } from '../logo'





const HeaderInventory:FC =()=>{
    const [visibleMenu, setVisibleMenu] = useState<boolean>(false)
    const { breakpoints } = useTheme()
    const matchMobileView = useMediaQuery(breakpoints.down('md'))

return (
    <Box >
      <Container sx={{ py: { xs: 2, md: 3 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Logo />
          <Box sx={{ ml: 'auto', display: { xs: 'inline-flex', md: 'none' }}}>
            <IconButton onClick={() => setVisibleMenu(!visibleMenu)}>
              <Menu />
            </IconButton>
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', md: 'row' },
              transition: (theme) => theme.transitions.create(['top']),
              ...(matchMobileView && {
                py: 6,
                backgroundColor: 'background.paper',
                zIndex: 'appBar',
                position: 'fixed',
                height: { xs: '100vh', md: 'auto' },
                top: visibleMenu ? 0 : '-120vh',
                left: 0,
              }),
            }}
          >
            <Box /> 
            <NavigationInvetnory />
            
            {visibleMenu && matchMobileView && (
              <IconButton
                sx={{
                  position: 'fixed',
                  top: 10,
                  right: 10,
                }}
                onClick={() => setVisibleMenu(!visibleMenu)}
              >
                <Close />
              </IconButton>
            )}
          </Box>
        </Box>
      </Container>
    </Box>  
    )
}
export default HeaderInventory