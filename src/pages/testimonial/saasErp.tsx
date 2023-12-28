import React, { FC } from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { SaasLayout } from '@/components/layout/layoutSaas'
import { HeroSaas } from '@/components/homeTestimonial/saas.data'
const DynamicHomeHero = dynamic(() => import('../../components/homeTestimonial/heroTestimonial'))
const saasERPSoftware: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero herodata={HeroSaas}/>
    </>
  )
}

saasERPSoftware.getLayout = (page) => <SaasLayout>{page}</SaasLayout>
export default saasERPSoftware;

