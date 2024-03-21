import React, { useEffect } from 'react' 
import { NextPageWithLayout } from '@/interfaces/layout'
import { Box, Button, Container, Grid, TextField, Typography, useTheme } from '@mui/material'
import { Send } from '@mui/icons-material'
import { Watch } from 'react-loader-spinner'
 
const CommingSoonPage: NextPageWithLayout = () => {
 
const theme  = useTheme()
useEffect(()=>{

    document.addEventListener('DOMContentLoaded', function () {
        window.setTimeout(()=>{
            document.querySelector('svg')?.classList.add('animated')
        },1000);
    })
},[])
  return (
    <Box className='TETT'>  
        <Grid container component={Container} height={'100vh'} alignItems={'center'} className=''>
            <Grid item xs={12} sm={6}>
            <Watch
                visible={true}
                height="80"
                width="80"
                radius="48"
                color={theme.palette.primary.main}
                ariaLabel="watch-loading"
                wrapperStyle={{}}
                wrapperClass=""
  />
                <Typography variant='h3' >We are coming soon</Typography>
               
                <Typography>
                  We are excited to announce the upcoming launch of our website very soon.  
                </Typography> 
            </Grid>
            <Grid item xs={12} sm={6}>
            <svg
  className="animated"
  id="freepik_stories-create"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 500 500"
  version="1.1"
  xmlnsXlink="http://www.w3.org/1999/xlink" 
>
  <g
    id="freepik--background-simple--inject-2"
    className="animable"
    style={{ transformOrigin: "247.782px 262.883px" }}
  >
    <path
      d="M436.94,419.9H65S53.19,400,45,360s30.84-25.4,40.82-59.88-33.56-27.21-29.93-74.39,63.5-48.08,92.53-41.73,25.4-15.42,59-51.71,84.37-32.66,109.77-4.53,17.23,57.15,49,57.15S427,191.29,446,252.07s-15.77,88.56-15.14,116A300.58,300.58,0,0,0,436.94,419.9Z"
      style={{
        fill: "#127C71",
        transformOrigin: "247.782px 262.883px"
      }}
      id="eletgz0uygsl9"
      className="animable"
    />
    <g id="elgf268s1u8oc">
      <path
        d="M436.94,419.9H65S53.19,400,45,360s30.84-25.4,40.82-59.88-33.56-27.21-29.93-74.39,63.5-48.08,92.53-41.73,25.4-15.42,59-51.71,84.37-32.66,109.77-4.53,17.23,57.15,49,57.15S427,191.29,446,252.07s-15.77,88.56-15.14,116A300.58,300.58,0,0,0,436.94,419.9Z"
        style={{
          fill: "rgb(255, 255, 255)",
          opacity: "0.7",
          transformOrigin: "247.782px 262.883px"
        }}
        className="animable"
      />
    </g>
  </g>
  <g
    id="freepik--Bulb--inject-2"
    className="animable"
    style={{ transformOrigin: "223.62px 236.92px" }}
  >
    <path
      d="M215.41,419.9c-9.11-13.87-48-72.19-59.38-73.75-11.09-1.52-50.5,57.45-61.16,73.75Z"
      style={{
        fill: "rgb(46, 53, 58)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "155.14px 383.011px"
      }}
      id="eldmmd1wf6p28"
      className="animable"
    />
    <line
      x1="265.28"
      y1="79.13"
      x2="265.28"
      y2="213.62"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 3,
        transformOrigin: "265.28px 146.375px"
      }}
      id="elqtth3jazop"
      className="animable"
    />
    <line
      x1="281.26"
      y1="82.74"
      x2="281.26"
      y2="213.62"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 3,
        transformOrigin: "281.26px 148.18px"
      }}
      id="elbzw7tldsqra"
      className="animable"
    />
    <line
      x1="298.78"
      y1="154.36"
      x2="298.78"
      y2="281.13"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 3,
        transformOrigin: "298.78px 217.745px"
      }}
      id="eliojmrk71yhe"
      className="animable"
    />
    <line
      x1="317.33"
      y1="82.74"
      x2="317.33"
      y2="281.13"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 3,
        transformOrigin: "317.33px 181.935px"
      }}
      id="eltyaokxa8bo"
      className="animable"
    />
    <line
      x1="335.88"
      y1="82.74"
      x2="335.88"
      y2="217.23"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 3,
        transformOrigin: "335.88px 149.985px"
      }}
      id="el2dynwkyzhph"
      className="animable"
    />
    <line
      x1="251.37"
      y1="97.16"
      x2="336.4"
      y2="97.16"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 3,
        transformOrigin: "293.885px 97.16px"
      }}
      id="elyug1hz04h8f"
      className="animable"
    />
    <line
      x1="251.37"
      y1="127.05"
      x2="343.58"
      y2="127.05"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 3,
        transformOrigin: "297.475px 127.05px"
      }}
      id="elkv4zg7zhpdk"
      className="animable"
    />
    <line
      x1="249.83"
      y1="154.36"
      x2="352.37"
      y2="154.36"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 3,
        transformOrigin: "301.1px 154.36px"
      }}
      id="eladmrkyhagjk"
      className="animable"
    />
    <line
      x1="248.28"
      y1="184.77"
      x2="352.37"
      y2="184.77"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 3,
        transformOrigin: "300.325px 184.77px"
      }}
      id="elffbzom4u23c"
      className="animable"
    />
    <line
      x1="267.86"
      y1="217.74"
      x2="346.7"
      y2="217.74"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 3,
        transformOrigin: "307.28px 217.74px"
      }}
      id="elsxvhiqbg8kg"
      className="animable"
    />
    <line
      x1="288.47"
      y1="249.69"
      x2={340}
      y2="249.69"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 3,
        transformOrigin: "314.235px 249.69px"
      }}
      id="elht4bimkdjw"
      className="animable"
    />
    <line
      x1="152.81"
      y1="91.9"
      x2={171}
      y2="106.14"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        transformOrigin: "161.905px 99.02px"
      }}
      id="elguevyrbi0qs"
      className="animable"
    />
    <line
      x1="189.19"
      y1="76.88"
      x2="195.52"
      y2="86.37"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        transformOrigin: "192.355px 81.625px"
      }}
      id="elwmxx0t3pu98"
      className="animable"
    />
    <line
      x1="221.62"
      y1="53.94"
      x2="227.16"
      y2="71.34"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        transformOrigin: "224.39px 62.64px"
      }}
      id="eln1emtaukx4o"
      className="animable"
    />
    <path
      d="M325.4,277.54h-30V206.21H254.7V79.88a100,100,0,0,0-87.42,146.73c3.26,7.59,10.92,26.18,18.59,50.22,7.09,22.19,10.79,44.5,10.79,47.87,0,.33,0,.67,0,1a7.48,7.48,0,0,0,7.47,7.74H307.38a7.49,7.49,0,0,0,7.47-7.74c0-.36,0-.7,0-1C314.83,321.37,318.46,299.49,325.4,277.54Z"
      style={{
        fill: "#127C71",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        transformOrigin: "240.544px 206.66px"
      }}
      id="elugthd72e2g"
      className="animable"
    />
    <path
      d="M220.81,96a80.31,80.31,0,0,1,8.89-3.39"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        transformOrigin: "225.255px 94.305px"
      }}
      id="el6gbluygvqcc"
      className="animable"
    />
    <path
      d="M187.51,121.34s8.15-13,26.06-21.75"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        transformOrigin: "200.54px 110.465px"
      }}
      id="el73cvf32zmnr"
      className="animable"
    />
    <path
      d="M189.65,265.26c3.71,12.12,8.62,28.91,10.32,38.29,2.88,15.82,1,24,7.2,25.41"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        transformOrigin: "198.41px 297.11px"
      }}
      id="elwqcmtlnlthl"
      className="animable"
    />
    <path
      d="M185.11,250.8s1,3.25,2.61,8.23"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        transformOrigin: "186.415px 254.915px"
      }}
      id="elao0u1ucrn4f"
      className="animable"
    />
    <path
      d="M249.42,332.47v-95.6s4-25-9-25-12,13,3,27,38,1,41-10-5-16-10-7,0,111,0,111"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        transformOrigin: "258.221px 272.37px"
      }}
      id="el4od101iytug"
      className="animable"
    />
    <rect
      x="202.08"
      y="332.86"
      width="107.91"
      height="25.04"
      style={{
        fill: "rgb(255, 255, 255)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        transformOrigin: "256.035px 345.38px"
      }}
      id="elv3vv40c27sl"
      className="animable"
    />
    <rect
      x="202.08"
      y="363.86"
      width="107.91"
      height="25.04"
      style={{
        fill: "rgb(255, 255, 255)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        transformOrigin: "256.035px 376.38px"
      }}
      id="elvggbkf32ej"
      className="animable"
    />
    <rect
      x="202.08"
      y="357.9"
      width="107.91"
      height="5.96"
      style={{
        fill: "rgb(46, 53, 58)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "256.035px 360.88px"
      }}
      id="el0xq9wnoxjc6j"
      className="animable"
    />
    <rect
      x="202.08"
      y="394.86"
      width="107.91"
      height="25.04"
      style={{
        fill: "rgb(255, 255, 255)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        transformOrigin: "256.035px 407.38px"
      }}
      id="elog65v1q9csl"
      className="animable"
    />
    <line
      x1="298.7"
      y1="354.55"
      x2="306.72"
      y2="354.55"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "302.71px 354.55px"
      }}
      id="elopjmvlad0ab"
      className="animable"
    />
    <line
      x1="206.32"
      y1="354.55"
      x2="294.84"
      y2="354.55"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "250.58px 354.55px"
      }}
      id="elntjqmwr2kvm"
      className="animable"
    />
    <line
      x1="277.9"
      y1="386.04"
      x2="303.75"
      y2="386.04"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "290.825px 386.04px"
      }}
      id="elssi41la1bmq"
      className="animable"
    />
    <line
      x1="222.34"
      y1="386.04"
      x2="274.93"
      y2="386.04"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "248.635px 386.04px"
      }}
      id="elrz4r2wvgn4"
      className="animable"
    />
    <line
      x1="213.73"
      y1="386.04"
      x2="218.18"
      y2="386.04"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "215.955px 386.04px"
      }}
      id="elwjtb9c9yeyk"
      className="animable"
    />
    <rect
      x="202.08"
      y="388.9"
      width="107.91"
      height="5.96"
      style={{
        fill: "rgb(46, 53, 58)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "256.035px 391.88px"
      }}
      id="elh22shf5mblk"
      className="animable"
    />
    <rect
      x="216.13"
      y="400.35"
      width="36.94"
      height="19.23"
      style={{
        fill: "#127C71",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "234.6px 409.965px"
      }}
      id="elzk69cdjovre"
      className="animable"
    />
    <rect
      x="264.2"
      y="400.35"
      width="36.94"
      height="19.23"
      style={{
        fill: "#127C71",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "282.67px 409.965px"
      }}
      id="elxi1r76zev1i"
      className="animable"
    />
  </g>
  <g
    id="freepik--Ground--inject-2"
    className="animable"
    style={{ transformOrigin: "250px 403.393px" }}
  >
    <path
      d="M334.37,419.9c-7.08-6.21-37.31-32.32-46.11-33-8.62-.69-39.22,25.72-47.5,33Z"
      style={{
        fill: "rgb(46, 53, 58)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "287.565px 403.393px"
      }}
      id="el0d4mlps7j2dj"
      className="animable"
    />
    <line
      x1="451.08"
      y1="419.9"
      x2="459.76"
      y2="419.9"
      style={{
        fill: "rgb(255, 255, 255)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "455.42px 419.9px"
      }}
      id="el5k4vpaif9ya"
      className="animable"
    />
    <line
      x1="53.74"
      y1="419.9"
      x2="442.4"
      y2="419.9"
      style={{
        fill: "rgb(255, 255, 255)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "248.07px 419.9px"
      }}
      id="elg24yy5u752"
      className="animable"
    />
    <line
      x1="40.24"
      y1="419.9"
      x2="46.99"
      y2="419.9"
      style={{
        fill: "rgb(255, 255, 255)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "43.615px 419.9px"
      }}
      id="elg7zmnxgwvw5"
      className="animable"
    />
  </g>
  <g
    id="freepik--Trucks--inject-2"
    className="animable"
    style={{ transformOrigin: "250.87px 265.44px" }}
  >
    <polygon
      points="433.61 362.83 407.66 362.83 407.66 399.23 418.41 399.23 433.61 399.23 444.37 399.23 444.37 381.03 433.61 362.83"
      style={{
        fill: "rgb(46, 53, 58)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "426.015px 381.03px"
      }}
      id="elhmwryoqso5f"
      className="animable"
    />
    <rect
      x="432.48"
      y="399.23"
      width="11.89"
      height="8.27"
      style={{
        fill: "rgb(255, 255, 255)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "438.425px 403.365px"
      }}
      id="elhducay7ehyc"
      className="animable"
    />
    <path
      d="M388.37,398.82s13-7,8.5-42l-16.5-9-28.5-4.5-25.5,1v14.5s14.5,12.5,16,16.5a27.72,27.72,0,0,1,1.5,8.5v14Z"
      style={{
        fill: "#127C71",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "362.093px 371.07px"
      }}
      id="ela7d28uqx5ab"
      className="animable"
    />
    <line
      x1="396.87"
      y1="356.82"
      x2="388.37"
      y2="398.82"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "392.62px 377.82px"
      }}
      id="elkj4dblc6fs"
      className="animable"
    />
    <line
      x1="380.37"
      y1="347.82"
      x2="370.87"
      y2="398.82"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "375.62px 373.32px"
      }}
      id="elkqkxcum7qwj"
      className="animable"
    />
    <line
      x1="351.87"
      y1="343.32"
      x2="344.87"
      y2="381.32"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "348.37px 362.32px"
      }}
      id="elw1j4ix0p8gc"
      className="animable"
    />
    <path
      d="M327.37,356.82s16.5,7,23,11.5,5.5,14,5.5,14"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "341.648px 369.57px"
      }}
      id="el4y5x3cwnqo"
      className="animable"
    />
    <rect
      x="330.36"
      y="399.49"
      width="77.53"
      height="6.5"
      style={{
        fill: "rgb(255, 255, 255)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "369.125px 402.74px"
      }}
      id="elbcwsmnqw4a7"
      className="animable"
    />
    <polygon
      points="423.37 382.82 439.56 382.82 430.87 367.82 423.37 367.82 423.37 382.82"
      style={{
        fill: "rgb(255, 255, 255)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "431.465px 375.32px"
      }}
      id="elwc7qolnbv1"
      className="animable"
    />
    <rect
      x="413.87"
      y="367.82"
      width={7}
      height={15}
      style={{
        fill: "rgb(255, 255, 255)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "417.37px 375.32px"
      }}
      id="elarcle8cq0f9"
      className="animable"
    />
    <rect
      x="330.77"
      y="399.23"
      width="47.2"
      height="11.27"
      style={{
        fill: "rgb(255, 255, 255)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "354.37px 404.865px"
      }}
      id="el53s7cnygyqx"
      className="animable"
    />
    <g id="elfplvkjknmwq">
      <circle
        cx="420.9"
        cy="409.98"
        r="9.93"
        style={{
          fill: "rgb(46, 53, 58)",
          stroke: "rgb(46, 53, 58)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "420.9px 409.98px",
          transform: "rotate(-10.24deg)"
        }}
        className="animable"
      />
    </g>
    <circle
      cx="420.9"
      cy="409.98"
      r="5.79"
      style={{
        fill: "rgb(255, 255, 255)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "420.9px 409.98px"
      }}
      id="elxivc8v83t9"
      className="animable"
    />
    <g id="elddzi3uqlgpa">
      <circle
        cx="344.4"
        cy="409.98"
        r="9.93"
        style={{
          fill: "rgb(46, 53, 58)",
          stroke: "rgb(46, 53, 58)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "344.4px 409.98px",
          transform: "rotate(-10.04deg)"
        }}
        className="animable"
      />
    </g>
    <circle
      cx="344.4"
      cy="409.98"
      r="5.79"
      style={{
        fill: "rgb(255, 255, 255)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "344.4px 409.98px"
      }}
      id="elyiydz42zft"
      className="animable"
    />
    <g id="el50qcdj6te7c">
      <circle
        cx="368.37"
        cy="409.98"
        r="9.93"
        style={{
          fill: "rgb(46, 53, 58)",
          stroke: "rgb(46, 53, 58)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "368.37px 409.98px",
          transform: "rotate(-42.56deg)"
        }}
        className="animable"
      />
    </g>
    <circle
      cx="368.37"
      cy="409.98"
      r="5.79"
      style={{
        fill: "rgb(255, 255, 255)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "368.37px 409.98px"
      }}
      id="elkgthvw0xqwh"
      className="animable"
    />
    <rect
      x="336.87"
      y="381.82"
      width="31.5"
      height={17}
      rx="3.25"
      style={{
        fill: "rgb(46, 53, 58)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "352.62px 390.32px"
      }}
      id="elx3yqsrjdg5p"
      className="animable"
    />
    <polyline
      points="324.37 398.82 324.37 349.37 334.37 349.37 334.37 398.82"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "329.37px 374.095px"
      }}
      id="elok3jh6y1jsn"
      className="animable"
    />
    <line
      x1="324.44"
      y1="355.92"
      x2="334.26"
      y2="355.92"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "329.35px 355.92px"
      }}
      id="elfnm2hd63var"
      className="animable"
    />
    <line
      x1="324.44"
      y1="363.64"
      x2="334.26"
      y2="363.64"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "329.35px 363.64px"
      }}
      id="elx1mrr48kkc"
      className="animable"
    />
    <line
      x1="324.44"
      y1="371.36"
      x2="334.26"
      y2="371.36"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "329.35px 371.36px"
      }}
      id="elqnnslvgf9u"
      className="animable"
    />
    <line
      x1="324.44"
      y1="379.09"
      x2="334.26"
      y2="379.09"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "329.35px 379.09px"
      }}
      id="el7h7wswl43le"
      className="animable"
    />
    <line
      x1="324.44"
      y1="386.81"
      x2="334.26"
      y2="386.81"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "329.35px 386.81px"
      }}
      id="elwufq2s8p6s"
      className="animable"
    />
    <line
      x1="324.44"
      y1="394.53"
      x2="334.26"
      y2="394.53"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "329.35px 394.53px"
      }}
      id="elkt9ao2uailr"
      className="animable"
    />
    <polygon
      points="124.36 420.87 106.36 420.87 106.36 106.87 124.36 127.8 124.36 420.87"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "115.36px 263.87px"
      }}
      id="el7ckssqvtc4u"
      className="animable"
    />
    <polygon
      points="106.54 354.87 124.19 354.87 106.54 337.8 124.19 337.8 106.54 354.87"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "115.365px 346.335px"
      }}
      id="elck5nxbvhn4"
      className="animable"
    />
    <polygon
      points="106.54 337.37 124.19 337.37 106.54 320.3 124.19 320.3 106.54 337.37"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "115.365px 328.835px"
      }}
      id="elybrjvf76ql"
      className="animable"
    />
    <polygon
      points="106.54 319.87 124.19 319.87 106.54 302.8 124.19 302.8 106.54 319.87"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "115.365px 311.335px"
      }}
      id="elyaq8wuo9gjk"
      className="animable"
    />
    <polygon
      points="106.54 302.37 124.19 302.37 106.54 285.3 124.19 285.3 106.54 302.37"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "115.365px 293.835px"
      }}
      id="el72nmhac9j1t"
      className="animable"
    />
    <polygon
      points="106.54 284.87 124.19 284.87 106.54 267.8 124.19 267.8 106.54 284.87"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "115.365px 276.335px"
      }}
      id="elm812wg57dm8"
      className="animable"
    />
    <polygon
      points="106.54 267.37 124.19 267.37 106.54 250.3 124.19 250.3 106.54 267.37"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "115.365px 258.835px"
      }}
      id="el8qz9j1mkei4"
      className="animable"
    />
    <polygon
      points="106.54 249.87 124.19 249.87 106.54 232.8 124.19 232.8 106.54 249.87"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "115.365px 241.335px"
      }}
      id="elyhmezci2rvp"
      className="animable"
    />
    <polygon
      points="106.54 232.37 124.19 232.37 106.54 215.3 124.19 215.3 106.54 232.37"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "115.365px 223.835px"
      }}
      id="ellk6j13io6r"
      className="animable"
    />
    <polygon
      points="106.54 214.87 124.19 214.87 106.54 197.8 124.19 197.8 106.54 214.87"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "115.365px 206.335px"
      }}
      id="elc843z1ma35h"
      className="animable"
    />
    <polygon
      points="106.54 197.37 124.19 197.37 106.54 180.3 124.19 180.3 106.54 197.37"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "115.365px 188.835px"
      }}
      id="el826t656kur8"
      className="animable"
    />
    <polygon
      points="106.54 179.87 124.19 179.87 106.54 162.8 124.19 162.8 106.54 179.87"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "115.365px 171.335px"
      }}
      id="el3brs615o5v"
      className="animable"
    />
    <polygon
      points="106.54 162.37 124.19 162.37 106.54 145.3 124.19 145.3 106.54 162.37"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "115.365px 153.835px"
      }}
      id="el8ea6o75f36j"
      className="animable"
    />
    <polygon
      points="106.54 144.87 124.19 144.87 106.54 127.8 124.19 127.8 106.54 144.87"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "115.365px 136.335px"
      }}
      id="elef9takponnc"
      className="animable"
    />
    <polygon
      points="207.93 145.34 199.21 139.85 136.98 139.85 129.38 145.34 207.93 145.34"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "168.655px 142.595px"
      }}
      id="elm5u3dbjtiii"
      className="animable"
    />
    <rect
      x="57.37"
      y="144.87"
      width={152}
      height={4}
      style={{
        fill: "rgb(46, 53, 58)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "133.37px 146.87px"
      }}
      id="eln64aj3o0e"
      className="animable"
    />
    <polyline
      points="199.21 139.85 106.36 106.87 136.98 139.85"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "152.785px 123.36px"
      }}
      id="elzyxnzy9gy1r"
      className="animable"
    />
    <line
      x1="106.37"
      y1="106.87"
      x2="57.37"
      y2="144.87"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "81.87px 125.87px"
      }}
      id="elaftxrz8ksb"
      className="animable"
    />
    <rect
      x="99.87"
      y="153.37"
      width="37.5"
      height={24}
      style={{
        fill: "rgb(46, 53, 58)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "118.62px 165.37px"
      }}
      id="elu1uy25x81nr"
      className="animable"
    />
    <rect
      x="107.68"
      y="158.37"
      width="21.87"
      height={7}
      style={{
        fill: "rgb(255, 255, 255)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "118.615px 161.87px"
      }}
      id="elho75iy7el9b"
      className="animable"
    />
    <line
      x1="209.37"
      y1="148.87"
      x2="209.37"
      y2="191.99"
      style={{
        fill: "rgb(255, 255, 255)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "209.37px 170.43px"
      }}
      id="elr2v4gvnuv4a"
      className="animable"
    />
    <rect
      x="203.96"
      y="206.72"
      width="11.11"
      height="12.59"
      style={{
        fill: "rgb(46, 53, 58)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "209.515px 213.015px"
      }}
      id="elbfce23gcm4l"
      className="animable"
    />
    <polyline
      points="203.96 206.72 209.52 191.17 215.08 206.72"
      style={{
        fill: "none",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "209.52px 198.945px"
      }}
      id="elypn0ihs4dr"
      className="animable"
    />
    <path
      d="M179.4,358.65l24,37.94,6-4.39-17.66-35.32a9.55,9.55,0,0,0-8.55-5.28h0A4.59,4.59,0,0,0,179.4,358.65Z"
      style={{
        fill: "#127C71",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "194.042px 374.095px"
      }}
      id="elarkmb5hrugf"
      className="animable"
    />
    <path
      d="M207.29,387.26,182.6,404.82s2.2,9.32,16.46,8.77,13.72-15.36,13.72-15.36Z"
      style={{
        fill: "rgb(46, 53, 58)",
        stroke: "rgb(255, 255, 255)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "197.691px 400.437px"
      }}
      id="elisahejgzcbk"
      className="animable"
    />
    <path
      d="M138.71,375.74l44.72-20.15a7.08,7.08,0,0,1,8.6,2.25h0a7.07,7.07,0,0,1-1.64,10l-48.93,34.25Z"
      style={{
        fill: "#127C71",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "166.062px 378.528px"
      }}
      id="ele8pnkxcl0yv"
      className="animable"
    />
    <rect
      x="86.04"
      y="400.43"
      width="46.09"
      height="7.13"
      style={{
        fill: "rgb(255, 255, 255)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "109.085px 403.995px"
      }}
      id="elbsr80nkqaxq"
      className="animable"
    />
    <rect
      x="69.58"
      y="380.13"
      width="40.05"
      height="16.46"
      style={{
        fill: "rgb(46, 53, 58)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "89.605px 388.36px"
      }}
      id="elksah4l5n20d"
      className="animable"
    />
    <path
      d="M104.42,361.47h34a3,3,0,0,1,3,3v32.1a0,0,0,0,1,0,0H101.41a0,0,0,0,1,0,0v-32.1A3,3,0,0,1,104.42,361.47Z"
      style={{
        fill: "#127C71",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "121.415px 379.02px"
      }}
      id="eld1z8wk587d"
      className="animable"
    />
    <path
      d="M69.17,419.9h65.57a7.81,7.81,0,0,0,7.81-7.81h0a7.82,7.82,0,0,0-7.81-7.82H69.17a7.82,7.82,0,0,0-7.81,7.82h0A7.81,7.81,0,0,0,69.17,419.9Z"
      style={{
        fill: "rgb(46, 53, 58)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "101.955px 412.085px"
      }}
      id="el4yiobwgv2ch"
      className="animable"
    />
    <path
      d="M79.05,419.9h65.56a7.82,7.82,0,0,0,7.82-7.81h0a7.82,7.82,0,0,0-7.82-7.82H79.05a7.82,7.82,0,0,0-7.82,7.82h0A7.82,7.82,0,0,0,79.05,419.9Z"
      style={{
        fill: "rgb(255, 255, 255)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "111.83px 412.085px"
      }}
      id="el4nm0vkaz7vn"
      className="animable"
    />
    <rect
      x="69.58"
      y="396.59"
      width="71.87"
      height="5.49"
      style={{
        fill: "rgb(255, 255, 255)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "105.515px 399.335px"
      }}
      id="elo0uriicec"
      className="animable"
    />
    <path
      d="M84.4,412.09a4.94,4.94,0,1,1-4.94-4.94A4.94,4.94,0,0,1,84.4,412.09Z"
      style={{
        fill: "rgb(46, 53, 58)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "79.46px 412.09px"
      }}
      id="elz18oojtck3l"
      className="animable"
    />
    <circle
      cx="92.63"
      cy="412.09"
      r="4.94"
      style={{
        fill: "rgb(46, 53, 58)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "92.63px 412.09px"
      }}
      id="elj2j0omaql5m"
      className="animable"
    />
    <circle
      cx="105.79"
      cy="412.09"
      r="4.94"
      style={{
        fill: "rgb(46, 53, 58)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "105.79px 412.09px"
      }}
      id="el68d7fex56j4"
      className="animable"
    />
    <path
      d="M123.9,412.09a4.94,4.94,0,1,1-4.94-4.94A4.94,4.94,0,0,1,123.9,412.09Z"
      style={{
        fill: "rgb(46, 53, 58)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "118.96px 412.09px"
      }}
      id="ela6ztfajdcym"
      className="animable"
    />
    <path
      d="M137.07,412.09a4.94,4.94,0,1,1-4.94-4.94A4.94,4.94,0,0,1,137.07,412.09Z"
      style={{
        fill: "rgb(46, 53, 58)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "132.13px 412.09px"
      }}
      id="elh71ghqpu9fe"
      className="animable"
    />
    <path
      d="M150.23,412.09a4.94,4.94,0,1,1-4.93-4.94A4.93,4.93,0,0,1,150.23,412.09Z"
      style={{
        fill: "rgb(46, 53, 58)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "145.29px 412.09px"
      }}
      id="el1wr6y918urf"
      className="animable"
    />
    <path
      d="M188.64,361.47a2.75,2.75,0,1,0-2.74,2.75A2.74,2.74,0,0,0,188.64,361.47Z"
      style={{
        fill: "rgb(46, 53, 58)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "185.89px 361.47px"
      }}
      id="eldi4f74u2vxf"
      className="animable"
    />
    <rect
      x="106.34"
      y="365.86"
      width="29.08"
      height="17.56"
      style={{
        fill: "rgb(255, 255, 255)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "120.88px 374.64px"
      }}
      id="elzje78nvj9ye"
      className="animable"
    />
    <rect
      x="119.51"
      y="365.86"
      width="15.91"
      height="17.56"
      style={{
        fill: "rgb(255, 255, 255)",
        stroke: "rgb(46, 53, 58)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transformOrigin: "127.465px 374.64px"
      }}
      id="el7ap7j7b6tz8"
      className="animable"
    />
  </g>
  <defs>
    {" "}
    <filter id="active" height="200%">
      {" "}
      <feMorphology
        in="SourceAlpha"
        result="DILATED"
        operator="dilate"
        radius={2}
      />{" "}
      <feFlood floodColor="#32DFEC" floodOpacity={1} result="PINK" />{" "}
      <feComposite in="PINK" in2="DILATED" operator="in" result="OUTLINE" />{" "}
      <feMerge>
        {" "}
        <feMergeNode in="OUTLINE" /> <feMergeNode in="SourceGraphic" />{" "}
      </feMerge>{" "}
    </filter>{" "}
    <filter id="hover" height="200%">
      {" "}
      <feMorphology
        in="SourceAlpha"
        result="DILATED"
        operator="dilate"
        radius={2}
      />{" "}
      <feFlood floodColor="#ff0000" floodOpacity="0.5" result="PINK" />{" "}
      <feComposite in="PINK" in2="DILATED" operator="in" result="OUTLINE" />{" "}
      <feMerge>
        {" "}
        <feMergeNode in="OUTLINE" /> <feMergeNode in="SourceGraphic" />{" "}
      </feMerge>{" "}
      <feColorMatrix
        type="matrix"
        values="0   0   0   0   0                0   1   0   0   0                0   0   0   0   0                0   0   0   1   0 "
      />{" "}
    </filter>
  </defs>
</svg>

            </Grid>
        </Grid> 
    </Box>
  )
}
 
export default CommingSoonPage


  