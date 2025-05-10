import { PageIntro } from '@/components/PageIntro'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'

function Features() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Financial Modeling and Simulation Features
            </h2>
            <p className="mt-4 text-lg text-neutral-300">
              Our custom financial modeling solutions turn complex calculations into simple, 
              user-friendly experiences that help you make better decisions faster.
            </p>
          </div>
        </div>
        <div className="relative mt-16 sm:mt-20 lg:mt-24">
          <GridPattern
            className="absolute inset-0 h-full w-full fill-neutral-900 stroke-neutral-900 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
            yOffset={-270}
          />
          <div className="relative">
            <GridList>
              <GridListItem title="Spreadsheet-to-App Transformation" invert>
                Convert complex Excel models into user-friendly web applications while maintaining all calculation logic.
              </GridListItem>
              <GridListItem title="Real-time API Integrations" invert>
                Connect to live market data, property feeds, exchange rates, and other financial information through APIs.
              </GridListItem>
              <GridListItem title="Dynamic Scenario Modeling" invert>
                Test multiple what-if scenarios with dynamic inputs and view results in real-time.
              </GridListItem>
              <GridListItem title="Investment ROI Calculators" invert>
                Create customized ROI calculators for various investment types with detailed reporting.
              </GridListItem>
              <GridListItem title="Financial Dashboards" invert>
                Build interactive dashboards that visualize key metrics and financial data with intuitive controls.
              </GridListItem>
              <GridListItem title="Cross-device Compatibility" invert>
                Access your financial models on any device with responsive design and mobile optimization.
              </GridListItem>
            </GridList>
          </div>
        </div>
      </Container>
    </div>
  )
}

function Process() {
  return (
    <>
      <SectionIntro
        eyebrow="Our Process"
        title="How We Build Your Financial Modeling Solution"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We follow a structured approach to understand your needs, analyze your data, and build a solution 
          that transforms complex financial models into user-friendly applications.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <StylizedImage
              src={imageLaptop}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end"
            />
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Discovery and Requirements">
              We begin by thoroughly understanding your business needs, current spreadsheet models, and the financial problems you're trying to solve.
            </ListItem>
            <ListItem title="Model Analysis">
              Our experts analyze your existing financial models to understand the calculation logic, data sources, and outputs.
            </ListItem>
            <ListItem title="UI/UX Design">
              We design an intuitive interface that makes complex financial data accessible and actionable for all users.
            </ListItem>
            <ListItem title="Development">
              Our developers build the application, integrating all calculation logic and connecting to necessary data sources.
            </ListItem>
            <ListItem title="Testing and Validation">
              We thoroughly test the application against your original models to ensure all calculations are accurate.
            </ListItem>
            <ListItem title="Deployment and Support">
              After launch, we provide ongoing support and can continue to enhance your financial modeling solution as needed.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  title: 'Financial Modeling and Simulation',
  description:
    'We build custom financial models with intuitive interfaces, integrating live data sources through APIs for real-time decision-making.',
}

export default function FinancialModeling() {
  return (
    <>
      <PageIntro eyebrow="Financial Modeling and Simulation" title="Transforming complex calculations into intuitive digital experiences">
        <p>
          We build custom financial models with simplified, intuitive interfaces, integrating live data sources through APIs.
          Our goal is to turn complex financial calculations into seamless user experiences for real-time decision-making.
        </p>
      </PageIntro>

      <Features />

      <Process />

      <ContactSection />
    </>
  )
} 