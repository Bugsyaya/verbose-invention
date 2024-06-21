export const Tag = ({theme, setSelectedFilter, clear, selectedFilter, breakpoint}) => {

  return <p 
    onClick={() => clear ? setSelectedFilter(null) : setSelectedFilter(theme)} 
    className={`text-nowrap w-fit border rounded-lg p-2 my-2 text-base self-end bg-opacity-95 bg-gradient-to-l from-[#9A36E0] to-[#E6255B] text-white ${setSelectedFilter && 'cursor-pointer'} ${theme === selectedFilter && 'border-4 border-[#1D1D1B]'} sm:my-0 text-ellipsis overflow-hidden ${breakpoint === "mobile" && 'max-w-64'}`}>{theme}</p>
}