import { Tag } from "./tag"

export const Filters = ({themes, setSelectedFilter, clear, selectedFilter}) => {
  return <div className="flex flex-nowrap gap-4 mb-3">
    {themes?.map(theme => <Tag clear={clear} setSelectedFilter={setSelectedFilter} key={theme} theme={theme} selectedFilter={selectedFilter} />)}
  </div>
}