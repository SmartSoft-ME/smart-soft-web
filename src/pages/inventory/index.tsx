import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { InventoryLayout } from '@/components/layout/layoutInventory'
import { HomeInventory } from '../../components/homeProps/homeinvetory.data'
import {perksInventory} from '../../components/homeProps/perksInventory.data'
const DynamicHomeHero = dynamic(() => import('../../components/homeProps/homeProps'))
 const DynamicHomePerksInventory = dynamic(() => import('../../components/homeProps/perks'))
const SmartInventory: NextPageWithLayout = () => {
  return (
    <>
    
      <DynamicHomeHero homedata={HomeInventory}/>
      <DynamicHomePerksInventory perksdatatp={perksInventory}/>
    </>
  )
}

SmartInventory.getLayout = (page) => <InventoryLayout>{page}</InventoryLayout>
export default SmartInventory;