import React, { FC } from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { SaasLayout } from '@/components/layout/layoutSaas'
import { HeroOnPermise } from '@/components/homeTestimonial/onpermise.data'
const DynamicHomeHero = dynamic(() => import('../../components/homeTestimonial/heroTestimonial'))
const saasERPSoftware: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero herodata={HeroOnPermise}/>
    </>
  )
}

saasERPSoftware.getLayout = (page) => <SaasLayout>{page}</SaasLayout>
export default saasERPSoftware;

