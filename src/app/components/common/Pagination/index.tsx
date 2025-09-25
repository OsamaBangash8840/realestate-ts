import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

export const Pagination = () => {
  return (
    <nav className="flex justify-start mt-6 ">
      {/* Border only around the pagination buttons */}
      <div className="flex items-center gap-1 bg-bgPrimary ">
        {/* Previous Button */}
        <button className="flex items-center justify-center w-8 h-8 text-textPrimaryBody hover:bg-brand-50 border border-gray-100 dark:border-gray-100  hover:text-brand rounded-[10px] p-1">
          <MdChevronLeft size={16} />
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-1">
          <button className="flex items-center justify-center w-8 h-8 text-sm font-medium bg-primary-500 text-white border border-gray-100 dark:border-gray-100 rounded-[10px] text-textPrimaryBody hover:bg-brand-50 hover:text-brand">
            1
          </button>
          <button className="flex items-center justify-center w-8 h-8 text-sm font-medium border border-gray-100 dark:border-gray-100 rounded-[10px] text-textPrimaryBody hover:bg-brand-50 hover:text-brand">
            2
          </button>
          <button className="flex items-center justify-center w-8 h-8 text-sm font-medium border border-gray-100 dark:border-gray-100 rounded-[10px] text-textPrimaryBody hover:bg-brand-50 hover:text-brand">
            3
          </button>
          <span className="flex items-center justify-center w-8 h-8 border border-gray-100 dark:border-gray-100 rounded-[10px] text-gray-400">
            ...
          </span>
          <button className="flex items-center justify-center w-8 h-8 text-sm font-medium  border border-gray-100 dark:border-gray-100  rounded-[10px] text-textPrimaryBody hover:bg-brand-50 hover:text-brand">
            100
          </button>
        </div>

        {/* Next Button */}
        <button className="flex items-center justify-center w-8 h-8 text-textPrimaryBody border border-gray-100 hover:bg-brand-50  hover:text-brand rounded-[10px] p-1">
          <MdChevronRight size={16} />
        </button>
      </div>
    </nav>
  )
}
