import { useState } from 'react'
import { SectionHeading } from '../components/SectionHeading.tsx'
import { ServiceCube } from '../components/ServiceCube.tsx'
import { ServiceModal } from '../components/ServiceModal.tsx'
import type {
  ServiceCube as ServiceCubeType,
  ServicesContent,
} from '../types/content.ts'

type ServicesSectionProps = {
  services: ServicesContent
}

export function ServicesSection({ services }: ServicesSectionProps) {
  const [selectedCube, setSelectedCube] = useState<ServiceCubeType | null>(null)

  return (
    <section className="section" id="services">
      <SectionHeading
        label={services.label}
        title={services.title}
        intro={services.intro}
      />

      <div className="service-grid">
        {services.cubes.map((cube) => (
          <ServiceCube
            key={cube.id}
            cube={cube}
            isActive={selectedCube?.id === cube.id}
            onOpen={setSelectedCube}
          />
        ))}
      </div>

      <ServiceModal cube={selectedCube} onClose={() => setSelectedCube(null)} />
    </section>
  )
}
