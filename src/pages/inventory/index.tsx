import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { InventoryLayout } from '@/components/layout/layoutInventory'
import { HomeInventory } from '../../components/homeProps/InventoryData/homeinvetory.data'
import { listDataItems } from '@/components/homeProps/InventoryData/itemList.data'
const DynamicHomeHero = dynamic(() => import('../../components/homeProps/home'))
 const DynamicHomePerksInventory = dynamic(() => import('../../components/homeProps/perks'))
 const DynamicFlaotingButton = dynamic(() => import('../../components/styled-button/floating-button'))

const SmartInventory: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero homedata={HomeInventory}/>
      <DynamicHomePerksInventory data={listDataItems}  />
       <DynamicFlaotingButton/>

    </>
  )
}

SmartInventory.getLayout = (page) => <InventoryLayout>{page}</InventoryLayout>
export default SmartInventory;