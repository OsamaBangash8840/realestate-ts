import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'
import { Typography } from '../../common'
import Image from 'next/image'

export const SingleBlogComponent = () => {
  return (
    <section className="">
      <div className="sm:flex mt-5">
        <div className="sm:block hidden w-1/3 mt-3">
          <Typography variant="h6" weight="bold">
            Table of Content
          </Typography>
          <Typography variant="large" className="mt-3">
            1. How to choose the right tank size for your home
          </Typography>
          <Typography className="mt-3">2. Why tank size matters</Typography>
          <Typography className="mt-3">
            3. Key Factors That Determine Your Ideal Tank Size
          </Typography>
          <Typography className="mt-3">4. Putting It All Together: A Simple Calculation</Typography>
          <Typography className="mt-3">5. Final Considerations Before You Buy</Typography>
          <Typography className="mt-3">6. Still Unsure? Consult an Expert!</Typography>
          <div className="flex gap-6 mt-10">
            <FaFacebookF size={24} />
            <FaTwitter size={24} />
            <FaInstagram size={24} />
            <FaYoutube size={24} />
          </div>
        </div>
        <div className="sm:w-2/3 w-full">
          <Image
            src={'/home/blogImg1.svg'}
            alt="Blog Img"
            width={1000}
            height={500}
            className="w-full h-auto rounded-lg"
          />
          <div className="flex justify-between mt-1">
            <Typography>12 March, 2025</Typography>
            <Typography>5min Reading</Typography>
          </div>
          <Typography variant="xlarge" weight="bold" className="mt-3">
            Rainwater Harvesting 101: How to Choose the Right Tank Size for Your Home
          </Typography>
          <Typography variant="large" className="mt-5">
            Ready to save water and money? This beginners guide walks you through the simple steps
            to calculate your ideal water tank capacity based on your roof area and local rainfall.
          </Typography>
          <Typography variant="large" className="mt-2">
            Theres something incredibly satisfying about collecting free water from the sky.
            Rainwater harvesting is not just an eco-friendly choice; its a smart financial decision
            that can significantly reduce your water bills. But the first and most crucial question
            every homeowner faces is: What size tank do I actually need? Choose too small, and youll
            watch precious rainwater overflow after a single storm. Choose too large, and you may
            have over-invested.
          </Typography>
          <Typography variant="large" className="mt-2">
            This guide will walk you through the key factors to help you find your rainwater
            harvesting tanks Goldilocks size—the one thats just right.
          </Typography>
          <Typography variant="xlarge" weight="bold" className="mt-3">
            Why Tank Size Matters
          </Typography>
          <Typography variant="large" className="mt-2">
            Getting the right size isnt just about storage; its about optimization. A correctly
            sized tank ensures you:
          </Typography>
          <Typography variant="large" className="mt-2">
            • Maximize Savings: Capture and use as much free water as possible.
          </Typography>
          <Typography variant="large" className="mt-1">
            • Ensure Supply: Have enough water to get through dry spells.
          </Typography>
          <Typography variant="large" className="mt-1">
            • Avoid Overflow: Minimize water waste by having sufficient capacity for heavy rainfall.
          </Typography>
          <Typography variant="large" className="mt-1">
            • Justify Investment: Make a cost-effective purchase that meets your needs without
            unnecessary expense.
          </Typography>
          <Typography variant="xlarge" weight="bold" className="mt-3">
            The 3 Key Factors That Determine Your Ideal Tank Size
          </Typography>
          <Typography variant="large" className="mt-2">
            Three main elements will define the perfect capacity for your home.
          </Typography>
          <Typography variant="large" weight="bold" className="mt-3">
            1. Your Roofs Catchment Area
          </Typography>
          <Typography variant="large" className="mt-2">
            This is the surface area that rainfall lands on and is channeled into your gutters. Its
            the primary driver of how much water you can collect.
          </Typography>
          <Typography variant="large" className="mt-2">
            How to Calculate: Measure the length and width of your roof (the footprint of your
            house, plus any overhangs). Multiply them to get the square meters (m²).
          </Typography>
          <Typography variant="large" className="mt-2">
            Simple Formula: Length (m) x Width (m) = Catchment Area (m²)
          </Typography>
          <Typography variant="large" weight="bold" className="mt-3">
            2. Your Local Rainfall
          </Typography>
          <Typography variant="large" className="mt-2">
            The amount of rain you get is obviously critical. You can find average monthly rainfall
            data for your specific region from local weather services or government environmental
            websites.
          </Typography>
          <Typography variant="large" className="mt-2">
            Pro Tip: Use the driest months average for a conservative estimate. This helps ensure
            you have enough storage to last through periods with little rain.
          </Typography>
          <Typography variant="large" weight="bold" className="mt-3">
            3. Your Household Water Demand
          </Typography>
          <Typography variant="large" className="mt-2">
            How do you plan to use the rainwater? Toilet flushing? Garden irrigation? Laundry? The
            intended use dictates how much water youll need on a daily or weekly basis.
          </Typography>
          <Typography variant="large" className="mt-2">
            Example Uses:
          </Typography>
          <Typography variant="large" className="mt-2">
            • Garden Watering: 5-10 litres per m² of garden per week
          </Typography>
          <Typography variant="large" className="mt-1">
            • Toilet Flushing: ~50 litres per person, per day
          </Typography>
          <Typography variant="large" className="mt-1">
            • Laundry: ~50 litres per wash
          </Typography>
        </div>
      </div>
    </section>
  )
}
