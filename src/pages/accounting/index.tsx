import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { LayoutAccounting } from '@/components/layout/layoutAccountig'
import { HomeAccountig } from '@/components/homeProps/homeaccounting'
import {perksAccounting} from '../../components/homeProps/perksAccounting.data'
const DynamicHomeHero = dynamic(() => import('../../components/homeProps/homeProps'))
 const DynamicHomePerksInventory = dynamic(() => import('../../components/homeProps/perks'))
const SmartAccounting: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero homedata={HomeAccountig}/>
      <DynamicHomePerksInventory perksdatatp={perksAccounting}/>
    </>
  )
}

SmartAccounting.getLayout = (page) => <LayoutAccounting>{page}</LayoutAccounting>
export default SmartAccounting;
