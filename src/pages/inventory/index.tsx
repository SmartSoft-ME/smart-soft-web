import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { InventoryLayout } from '@/components/layout/layoutInventory'
import { HeroInventory } from '../../components/homeProps/heroinvetory.data'
import {perksInventory} from '../../components/homeProps/perksInventory.data'
const DynamicHomeHero = dynamic(() => import('../../components/homeProps/heroProps'))
 const DynamicHomePerksInventory = dynamic(() => import('../../components/homeProps/perks'))
const SmartInventory: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero herodata={HeroInventory}/>
      <DynamicHomePerksInventory perksdatatp={perksInventory}/>
    </>
  )
}

SmartInventory.getLayout = (page) => <InventoryLayout>{page}</InventoryLayout>
export default SmartInventory;