import { Tag } from "./tag"

export const Filters = ({themes, setSelectedFilter, clear, selectedFilter}) => {
  return <div className="flex gap-4 mb-3 flex-wrap">
    {themes?.map(theme => <Tag clear={clear} setSelectedFilter={setSelectedFilter} key={theme} theme={theme} selectedFilter={selectedFilter} />)}
  </div>
}