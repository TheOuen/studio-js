import { ProjectLayout } from '@/components/ProjectLayout'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { GridList, GridListItem } from '@/components/GridList'
import { TagList, TagListItem } from '@/components/TagList'
import { StatList, StatListItem } from '@/components/StatList'
import { BentoImageGallery } from '@/components/BentoImageGallery'

export const metadata = {
  title: 'Project Name',
  description: 'Project description',
}

export default function ProjectPage() {
  return (
    <ProjectLayout>
      <PageIntro 
        eyebrow="Category"
        title="Project Title"
        description="Brief project description goes here."
      >
        <p>
          Detailed description of the project and what it entailed.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24">
          <section>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">Project Overview</h2>
            <div className="mt-10 max-w-3xl text-base text-neutral-600">
              <p className="mt-6">
                Overview of the client needs and project goals.
              </p>
              <p className="mt-6">
                Our approach to solving the client&apos;s problems.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">Project Gallery</h2>
            <BentoImageGallery />
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">Technologies & Approach</h2>
            <div className="mt-10">
              <TagList>
                <TagListItem>Technology 1</TagListItem>
                <TagListItem>Technology 2</TagListItem>
                <TagListItem>Technology 3</TagListItem>
                <TagListItem>Technology 4</TagListItem>
                <TagListItem>Technology 5</TagListItem>
              </TagList>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">Key Features</h2>
            <div className="mt-10">
              <GridList>
                <GridListItem title="Feature 1">
                  Description of feature 1.
                </GridListItem>
                <GridListItem title="Feature 2">
                  Description of feature 2.
                </GridListItem>
                <GridListItem title="Feature 3">
                  Description of feature 3.
                </GridListItem>
                <GridListItem title="Feature 4">
                  Description of feature 4.
                </GridListItem>
              </GridList>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">Results</h2>
            <div className="mt-10">
              <StatList>
                <StatListItem value="Stat 1" label="Label 1" />
                <StatListItem value="Stat 2" label="Label 2" />
                <StatListItem value="Stat 3" label="Label 3" />
                <StatListItem value="Stat 4" label="Label 4" />
              </StatList>
            </div>
          </section>
        </div>
      </Container>
    </ProjectLayout>
  )
} 