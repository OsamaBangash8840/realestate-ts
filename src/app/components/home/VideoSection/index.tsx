import { FaPlay } from 'react-icons/fa6'

export const VideoSection = () => {
  return (
    <section
      className="relative h-[450px] md:h-[580px] 2xl:h-[700px] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('/home/videoImg.svg')",
      }}
    >
      {/* Overlay color */}
      <div className="absolute inset-0"></div>

      {/* Centered Play Icon */}
      <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-transparentSilver cursor-pointer hover:bg-white/50 transition">
        <FaPlay size={26} className="text-white" />
      </div>
    </section>
  )
}
