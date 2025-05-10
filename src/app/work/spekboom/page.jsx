import { ProjectLayout } from '@/components/ProjectLayout'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { GridList, GridListItem } from '@/components/GridList'
import { TagList, TagListItem } from '@/components/TagList'
import { StatList, StatListItem } from '@/components/StatList'
import { BentoImageGallery } from '@/components/BentoImageGallery'

export const metadata = {
  title: 'Spekboom.org Case Study',
  description: 'Modern website for environmental organization',
}

export default function SpekboomProject() {
  return (
    <ProjectLayout>
      <PageIntro 
        eyebrow="Web Development"
        title="Spekboom.org"
        description="Modern website for environmental organization focused on conservation and sustainability initiatives."
      >
        <p>
          We developed a dynamic, content-rich website for Spekboom, an environmental organization
          dedicated to conservation and sustainability initiatives in South Africa.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24">
          <section>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">Project Overview</h2>
            <div className="mt-10 max-w-3xl text-base text-neutral-600">
              <p className="mt-6">
                Spekboom.org needed a website that would showcase their environmental initiatives, 
                provide educational resources, and facilitate community engagement. The site needed to be
                visually striking while maintaining excellent performance and accessibility.
              </p>
              <p className="mt-6">
                Our approach focused on creating an immersive experience that connects visitors with
                Spekboom's mission through compelling visuals, intuitive navigation, and interactive elements.
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
                <TagListItem>Next.js</TagListItem>
                <TagListItem>React</TagListItem>
                <TagListItem>Tailwind CSS</TagListItem>
                <TagListItem>Content Management System</TagListItem>
                <TagListItem>Responsive Design</TagListItem>
              </TagList>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">Key Features</h2>
            <div className="mt-10">
              <GridList>
                <GridListItem title="Interactive Map">
                  A dynamic map highlighting conservation areas and projects across South Africa.
                </GridListItem>
                <GridListItem title="Resource Library">
                  Comprehensive collection of educational materials about sustainability and conservation.
                </GridListItem>
                <GridListItem title="Events Calendar">
                  Integrated calendar showing upcoming environmental initiatives and volunteer opportunities.
                </GridListItem>
                <GridListItem title="Donation System">
                  Streamlined donation process with multiple payment options and transparency features.
                </GridListItem>
              </GridList>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">Results</h2>
            <div className="mt-10">
              <StatList>
                <StatListItem value="42%" label="Increase in online donations" />
                <StatListItem value="3x" label="Growth in volunteer sign-ups" />
                <StatListItem value="65%" label="Improved user engagement" />
                <StatListItem value="1.2s" label="Average page load time" />
              </StatList>
            </div>
          </section>
        </div>
      </Container>
    </ProjectLayout>
  )
} 