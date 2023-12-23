import React, { FC } from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { LayoutAccounting } from '@/components/layout/layoutAccountig'
import { HeroAccountig } from '@/components/homeProps/heroaccounting'
import {perksAccounting} from '../../components/homeProps/perksAccounting.data'
const DynamicHomeHero = dynamic(() => import('../../components/homeProps/heroProps'))
 const DynamicHomePerksInventory = dynamic(() => import('../../components/homeProps/perks'))
const SmartAccounting: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero herodata={HeroAccountig}/>
      <DynamicHomePerksInventory perksdatatp={perksAccounting}/>
    </>
  )
}

SmartAccounting.getLayout = (page) => <LayoutAccounting>{page}</LayoutAccounting>
export default SmartAccounting;
