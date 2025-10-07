import { Banner } from '../../common'
import { AboutContact } from '../AboutContact'
import { AchievementGrid } from '../AchievementGrid'
import { CompanyDetails } from '../CompanyDetails'
import { OurStory } from '../OurStory'
import { VisionComponent } from '../VisionComponent'
import { WhyChooseUs } from '../WhyChooseUs'

export const Page = () => {
  return (
    <>
      <Banner
        bg="/home/banner4.jpg"
        smallHeading="100% MADE IN UAE"
        lgHeading="The Only Company To Have a Single Source For Integrated Solutions Related To Water Tanks"
        desc="Amongst all the other tank manufacturers, PolySave is the only company which is distinguished in having a single source for integrated solutions related to water tanks starting with superior tanks."
        btn="Contact Us"
      />
      <AchievementGrid />
      <OurStory />
      <AboutContact />
      <VisionComponent />
      <CompanyDetails />
      <WhyChooseUs />
    </>
  )
}
