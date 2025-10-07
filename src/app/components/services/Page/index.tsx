import { Banner } from '../../common'
import { BookingService } from '../BookingService'
import { CleaningSection } from '../CleaningSection'
import { OurProcess } from '../OurProcess'
import { ServicesGrid } from '../ServicesGrid'

export const Services = () => {
  return (
    <section className="">
      <Banner
        bg="/home/banner2.jpg"
        smallHeading="OUR SERVICES"
        lgHeading="Expert Tank Cleaning. Guaranteed Purity"
        desc="Protect your health and your investment. Our professional cleaning and disinfection services eliminate harmful bacteria, sediment, and contaminants to ensure your water is always safe and clean."
        btn="Contact Us"
      />
      <ServicesGrid />
      <OurProcess />
      <CleaningSection />
      <BookingService />
    </section>
  )
}
