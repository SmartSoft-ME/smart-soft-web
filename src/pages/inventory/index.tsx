import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { InventoryLayout } from '@/components/layoutInventory'
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicHomeHeroInventory = dynamic(() => import('../../components/homeInventory/heroinventory'))
 const DynamicHomePerksInventory = dynamic(() => import('../../components/homeInventory/perks'))
// const DynamicHomePopularCourse = dynamic(() => import('../components/home/popular-courses'))
// const DynamicHomeTestimonial = dynamic(() => import('../components/home/testimonial'))
// // const DynamicHomeOurMentors = dynamic(() => import('../components/home/mentors'))
// const DynamicHomeOurCard = dynamic(() => import('../components/home/card'))
// // const DynamicHomeNewsLetter = dynamic(() => import('../components/home/newsletter'))

const SmartInventory: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHeroInventory/>
      <DynamicHomePerksInventory/>
    </>
  )
}

SmartInventory.getLayout = (page) => <InventoryLayout>{page}</InventoryLayout>



export default SmartInventory;