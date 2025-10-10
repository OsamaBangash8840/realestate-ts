import { Banner } from '../../common'
import { HomeContact } from '../../home'
import { ContactForm } from '../ContactForm'

export const ContactComponent = () => {
  return (
    <>
      <Banner
        bg="/home/contactBannerImg.svg"
        smallHeading="Contact Us"
        lgHeading="Ajman (Head Office)"
      />
      <ContactForm />
      <div className="mt-3">
        <HomeContact />
      </div>
    </>
  )
}
