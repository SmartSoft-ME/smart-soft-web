import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { InventoryLayout } from '@/components/layout/layoutInventory'
import { HomeInventory } from '../../components/homeInventory/homeinvetory.data'
const DynamicHomeHero = dynamic(() => import('../../components/homeInventory/home'))
 const DynamicHomePerksInventory = dynamic(() => import('../../components/homeInventory/perksInventory'))
const SmartInventory: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero homedata={HomeInventory}/>
      <DynamicHomePerksInventory/>
    </>
  )
}

SmartInventory.getLayout = (page) => <InventoryLayout>{page}</InventoryLayout>
export default SmartInventory;