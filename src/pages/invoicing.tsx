import React, { FC } from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { LayoutInvoicing } from '@/components/layout/layoutInvoicing'
import { HomeInvocing } from '@/components/homeProps/homeinvoicing'
import { perksInvoicing } from '@/components/homeProps/perksInvoicing.data'
const DynamicHomeHero = dynamic(() => import('../components/homeProps/homeProps'))
 const DynamicHomePerksInventory = dynamic(() => import('.././components/homeProps/perks'))
const SmartAccounting: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero homedata={HomeInvocing}/>
      <DynamicHomePerksInventory perksdatatp={perksInvoicing}/>

    </>
  )
}

SmartAccounting.getLayout = (page) => <LayoutInvoicing>{page}</LayoutInvoicing>
export default SmartAccounting;

