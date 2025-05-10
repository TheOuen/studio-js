import { ProjectLayout } from '@/components/ProjectLayout'
import { PageIntro } from '@/components/PageIntro'

export default function PlaceholderProject() {
  return (
    <ProjectLayout>
      <PageIntro 
        eyebrow="Project"
        title="Project Details Coming Soon"
        description="We're currently updating this case study with the latest information."
      >
        <p>
          Check back soon to see the full details of this exciting project.
          In the meantime, feel free to explore our other case studies or contact us for more information.
        </p>
      </PageIntro>
    </ProjectLayout>
  )
} 