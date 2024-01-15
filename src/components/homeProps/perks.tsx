import React, { FC, useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useRouter } from 'next/router'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ItemList from './itemList'
import DetailItems from './detailsitem'
import AccordionUsage from './accordionItem'
import { ListItemType } from './InventoryData/itemList.data'
import { productData } from './InventoryData/productitem.data'
import { worldwideData } from './AccountingData/worldwideData.data'
import { FlexibleData } from './InvoicingData/FlexibleSmarat.data'
import Slide from '@mui/material/Slide'

interface PerksFeaturesProps {
  data: ListItemType[]
}

const Perks: FC<PerksFeaturesProps> = ({ data }) => {
  const router = useRouter()
  const [selectedComponent, setSelectedComponent] = useState<any| null>(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    if (router.pathname.includes('/inventory')) {
      setSelectedComponent(<DetailItems data={productData} />)
    } else if (router.pathname.includes('/accounting')) {
      setSelectedComponent(<DetailItems data={worldwideData} />)
    } else if (router.pathname.includes('/invoicing')) {
      setSelectedComponent(<DetailItems data={FlexibleData} />)
    }
  }, [router])

  const handleSelect = (itemKey: string) => {
    const item = data.find((item) => item.key === itemKey)
    if (item) {
      setSelectedComponent(() => item.component)
    }
  }

  return (
    <Box id="Section2" sx={{ py: { xs: 6, md: 6 } }}>
      <Container>
        {isMobile ? (
          <Typography variant="h1" sx={{ textAlign: 'center', mb: 3, pl: '' }}>
            Features
          </Typography>
        ) : (
          <Typography variant="h1" sx={{ textAlign: 'center', mb: 3, pr: 42 }}>
            Features
          </Typography>
        )}

        {isMobile ? (
          <AccordionUsage items={data} />
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '24px' }}>
            <ItemList items={data} onSelect={handleSelect} />
            <Slide direction="right" in={Boolean(selectedComponent)} mountOnEnter unmountOnExit>
            <Box sx={{ flex: 1 }}>
                {!!selectedComponent && selectedComponent}
            </Box>
            </Slide>
          </Box>
        )}
      </Container>
    </Box>
    //USELAYOUTEFFECT
  )
}

export default Perks
