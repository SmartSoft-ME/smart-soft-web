import React, { FC } from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { LayoutInvoicing } from '@/components/layout/layoutInvoicing'
import { HeroInvocing } from '@/components/homeProps/heroinvoicing'
import { perksInvoicing } from '@/components/homeProps/perksInvoicing.data'
const DynamicHomeHero = dynamic(() => import('.././components/homeProps/heroProps'))
 const DynamicHomePerksInventory = dynamic(() => import('.././components/homeProps/perks'))
const SmartAccounting: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero herodata={HeroInvocing}/>
      <DynamicHomePerksInventory perksdatatp={perksInvoicing}/>

    </>
  )
}

SmartAccounting.getLayout = (page) => <LayoutInvoicing>{page}</LayoutInvoicing>
export default SmartAccounting;

