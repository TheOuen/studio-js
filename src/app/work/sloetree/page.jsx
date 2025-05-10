import { ProjectLayout } from '@/components/ProjectLayout'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { GridList, GridListItem } from '@/components/GridList'
import { TagList, TagListItem } from '@/components/TagList'
import { StatList, StatListItem } from '@/components/StatList'
import { BentoImageGallery } from '@/components/BentoImageGallery'

export const metadata = {
  title: 'Sloetree.co.uk Case Study',
  description: 'E-commerce site for artisanal products',
}

export default function SloeTreeProject() {
  return (
    <ProjectLayout>
      <PageIntro 
        eyebrow="Web Development"
        title="Sloetree.co.uk"
        description="E-commerce site for artisanal products crafted with traditional methods and locally sourced ingredients."
      >
        <p>
          We developed a premium e-commerce platform for Sloetree, showcasing their
          handcrafted artisanal products with an emphasis on tradition, quality, and sustainability.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24">
          <section>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">Project Overview</h2>
            <div className="mt-10 max-w-3xl text-base text-neutral-600">
              <p className="mt-6">
                Sloetree needed a sophisticated e-commerce platform that would reflect the premium 
                nature of their artisanal products while providing a seamless shopping experience
                for their customers.
              </p>
              <p className="mt-6">
                Our approach focused on creating an immersive brand experience with beautiful photography,
                storytelling elements, and a frictionless purchasing journey that increased conversion rates.
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
                <TagListItem>Shopify</TagListItem>
                <TagListItem>Tailwind CSS</TagListItem>
                <TagListItem>Headless CMS</TagListItem>
                <TagListItem>Payment Gateway Integration</TagListItem>
              </TagList>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">Key Features</h2>
            <div className="mt-10">
              <GridList>
                <GridListItem title="Custom Product Builder">
                  Interactive tool allowing customers to create personalized gift sets.
                </GridListItem>
                <GridListItem title="Product Story Pages">
                  Immersive content showcasing the craftsmanship and heritage behind each product.
                </GridListItem>
                <GridListItem title="Subscription Service">
                  Seamless recurring delivery system with customer management portal.
                </GridListItem>
                <GridListItem title="Sustainability Tracker">
                  Feature highlighting sustainable practices and carbon footprint reduction.
                </GridListItem>
              </GridList>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">Results</h2>
            <div className="mt-10">
              <StatList>
                <StatListItem value="58%" label="Increase in conversion rate" />
                <StatListItem value="3.2x" label="Growth in average order value" />
                <StatListItem value="42%" label="Reduction in cart abandonment" />
                <StatListItem value="13k+" label="Monthly active customers" />
              </StatList>
            </div>
          </section>
        </div>
      </Container>
    </ProjectLayout>
  )
} 