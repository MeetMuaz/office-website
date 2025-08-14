import { notFound } from 'next/navigation'
import { getServiceById } from '@/components/aws/data'
import { Params } from '@/app/services/layout'
import AWSServiceClient from './aws-service-client'

export async function generateStaticParams() {
  const { awsServices } = await import('@/components/aws/data')
  return awsServices.map((service) => ({
    id: service.id,
  }))
}

export default async function AWSServicePage({ params }: { params: Params }) {
  const { id } = await params
  const service = getServiceById(id)

  if (!service) {
    notFound()
  }

  return <AWSServiceClient service={service} />
}
