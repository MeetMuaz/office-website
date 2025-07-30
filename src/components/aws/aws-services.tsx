'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Server, Database, Cloud, HardDrive, ArrowRightLeft, Rocket, Monitor, Upload, Shield, Building } from 'lucide-react'
import { awsServices } from './data'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

// Function to get the appropriate icon based on service ID
function getServiceIcon(serviceId: string) {
  switch (serviceId) {
    case 'aws-dsr':
      return <HardDrive className="h-10 w-10" />
    case 'amazon-ec2':
      return <Server className="h-10 w-10" />
    case 'amazon-s3':
      return <Database className="h-10 w-10" />
    case 'amazon-ebs':
      return <HardDrive className="h-10 w-10" />
    case 'aws-dms':
      return <ArrowRightLeft className="h-10 w-10" />
    case 'aws-mgn':
      return <Rocket className="h-10 w-10" />
    case 'ec2-windows':
      return <Monitor className="h-10 w-10" />
    case 'aws-transfer-family':
      return <Upload className="h-10 w-10" />
    case 'aws-control-tower':
      return <Shield className="h-10 w-10" />
    case 'aws-smb-competency':
      return <Building className="h-10 w-10" />
    default:
      return <Cloud className="h-10 w-10" />
  }
}

export default function AWSServices() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section className="bg-white py-24" ref={sectionRef}>
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="space-y-12"
        >
          {/* Header */}
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <motion.div
              variants={fadeIn}
              className="text-primary border-primary/20 bg-primary/5 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
            >
              AWS PARTNER
            </motion.div>
            <motion.h2
              variants={fadeIn}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              AWS Cloud Services
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-muted-foreground text-lg"
            >
              As an AWS Select Tier Partner, we help businesses accelerate
              growth, reduce costs, and achieve digital transformation with
              these powerful cloud services.
            </motion.p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {awsServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                  <div className="space-y-4">
                    <div className="mb-4 flex justify-center">
                      <div className="h-20 w-20 flex items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                        {getServiceIcon(service.id)}
                      </div>
                    </div>
                    <h3 className="text-center text-xl font-semibold">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-center">
                      {service.description}
                    </p>
                    <div className="flex justify-center pt-4">
                      <Link
                        href={`/aws/${service.id}`}
                        className="inline-flex items-center rounded-md bg-primary  px-6 py-2 text-white transition-all duration-300 hover:bg-primary/90"
                      >
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={fadeIn} className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/90 inline-flex items-center rounded-md px-8 py-3 text-lg font-medium text-white transition-all duration-300"
            >
              Speak with an AWS Expert <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
