import React, { FC , useEffect } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { navigations } from './navigation.data';


const Navigation: FC = () => {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === '/' && window.location.hash) {
      console.log(window.location.hash)
      const sectionId = window.location.hash.substring(1); 
      console.log(sectionId)
      scroller.scrollTo(sectionId, {
        duration: 350,
        delay: 0,
        smooth: 'easeInCubic',
      });
    }
  }, [router.asPath, router.pathname]); 

  const handleClick = (destination : string)  => {
    console.log('Handling click for destination:', destination);
    if (router.pathname !== '/') {
      console.log('Redirecting to home page');
      router.push('/#' + destination);
    } else {
      scroller.scrollTo(destination, {
        duration: 350,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {navigations.map(({ path: destination, label }) => (
        <Box
          component={ScrollLink}
          key={destination}
          onClick={() => handleClick(destination)}
          activeClass="current"
          to={destination}
          spy={true}
          smooth={true}
          duration={350}
          sx={{
            position: 'relative',
            color: 'text.disabled',
            cursor: 'pointer',
            fontWeight: 800,
            
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 0, md: 3 },
            mb: { xs: 3, md: 0 },
            fontSize: { xs: '1.2rem', md: '16px' },
            ...(destination === '/' && {
              color: 'primary.main',
            }),

            '& > div': { display: 'none' },

            '&.current>div': { display: 'block' },

            '&:hover': {
              color: 'primary.main',
              '&>div': {
                display: 'block',
              },
            },
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              transform: 'rotate(3deg)',
              '& img': { width: 44, height: 'auto' },
            }}
          >
            {/* eslint-disable-next-line */}
            <img src="/images/headline-curve.svg" alt="Headline curve" />
          </Box>
          {label}
        </Box>
      ))}
    </Box>
  )
}

export default Navigation
