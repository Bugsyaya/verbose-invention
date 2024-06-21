export const Tag = ({theme, setSelectedFilter, clear, selectedFilter}) => {
  return <p 
    onClick={() => clear ? setSelectedFilter(null) : setSelectedFilter(theme)} 
    className={`w-fit border rounded-lg p-2 my-2 text-base self-end bg-opacity-95 bg-gradient-to-l from-[#9A36E0] to-[#E6255B] text-white ${setSelectedFilter && 'cursor-pointer'} ${theme === selectedFilter && 'border-4 border-[#1D1D1B]'}`}>{theme}</p>
}