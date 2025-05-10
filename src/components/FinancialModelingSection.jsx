import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { GridList, GridListItem } from '@/components/GridList'

export function FinancialModelingSection() {
  return (
    <>
      <SectionIntro
        eyebrow="Financial Modeling and Simulation"
        title="Transforming complex calculations into seamless user experiences"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We build custom financial models with simplified, intuitive interfaces, integrating live data sources through APIs.
          Our goal is to turn complex financial calculations into seamless user experiences for real-time decision-making.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn>
          <GridList>
            <GridListItem title="Custom Spreadsheet-to-App Transformations">
              We convert complex spreadsheet models into intuitive web applications, maintaining all the calculation logic while providing a simple, modern interface.
            </GridListItem>
            <GridListItem title="API Data Integrations">
              We connect your financial models to live data sources through APIs, including market rates, property feeds, and other real-time financial information.
            </GridListItem>
            <GridListItem title="Scenario Modeling & Forecasting">
              Our applications allow for dynamic scenario testing, forecasting, and ROI calculations to support data-driven decision making.
            </GridListItem>
            <GridListItem title="Real Estate & Investment Project Modeling">
              We create specialized tools for real estate investors and project managers to evaluate opportunities and track performance.
            </GridListItem>
            <GridListItem title="Responsive Web Apps & Dashboards">
              Our financial applications are fully responsive, working seamlessly across desktop and mobile devices with intuitive dashboards.
            </GridListItem>
          </GridList>
        </FadeIn>
      </Container>
    </>
  )
} 