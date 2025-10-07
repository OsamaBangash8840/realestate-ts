import { FaPlay } from 'react-icons/fa6'
import { Typography } from '../../common'

export const CompanyDetails = () => {
  return (
    <>
      <section className="sm:flex items-center gap-5 sm:px-16 px-3 mt-10">
        <div
          className="relative sm:w-1/2 h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-lg"
          style={{
            backgroundImage: "url('/home/banner1.jpg')",
          }}
        >
          {/* Overlay color */}
          <div className="absolute inset-0"></div>

          {/* Centered Play Icon */}
          <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-transparentSilver backdrop-blur-sm cursor-pointer hover:bg-white/50 transition">
            <FaPlay size={26} className="text-white" />
          </div>
        </div>
        <div className="sm:w-1/2 mt-5 sm:mt-0">
          <Typography variant="xlarge" weight="medium">
            Company Name:
          </Typography>
          <Typography variant="large" className="mt-1">
            PolySave
          </Typography>
          <Typography variant="xlarge" weight="medium" className="mt-2">
            Industry:
          </Typography>
          <Typography variant="large" className="mt-1">
            Water Tanks (Vertical Storage Solutions)
          </Typography>
          <Typography variant="xlarge" weight="medium" className="mt-2">
            Headquarters:
          </Typography>
          <Typography variant="large" className="mt-1">
            Dubai, United Arab Emirates
          </Typography>
          <Typography variant="xlarge" weight="medium" className="mt-2">
            Products:
          </Typography>
          <Typography variant="large" className="mt-1">
            Vertical plastic water tanks, Road Barrier, GRP Panel, Fiberglass
          </Typography>
          <Typography variant="xlarge" weight="medium" className="mt-2">
            Focus:
          </Typography>
          <Typography variant="large" className="mt-1">
            Maximizing efficiency with minimal space requirements
          </Typography>
          <Typography variant="xlarge" weight="medium" className="mt-2">
            Commitment:
          </Typography>
          <Typography variant="large" className="mt-1">
            Quality, sustainability, innovation, and customer satisfaction
          </Typography>
        </div>
      </section>
    </>
  )
}
