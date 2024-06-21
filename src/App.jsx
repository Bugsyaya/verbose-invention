import MiniSearch from 'minisearch'
import { useEffect, useState } from 'react'
import './App.css'
import { Card } from './componants/card'
import { Filters } from './componants/filters'
import { Input } from './componants/input'
import { getQuestionsAnswers } from './tools/api'
import { mapperQuestionsAnwsers } from './tools/mapper'

function App() {
  const [result, setResult] = useState()
  const [map, setMap] = useState()
  const [final, setFinal] = useState()
  const [inputValue, setInputValue] = useState()
  const [selectedFilter, setSelectedFilter] = useState()
  const list = selectedFilter ? final?.filter(f => f['Thème principal'] === selectedFilter) : final
  const themes = [...new Set(final?.map(f =>  f['Thème principal']))]

  useEffect(() => {
    getQuestionsAnswers().then(r => setResult(r))
  }, [])

  useEffect(() => {
    setMap(mapperQuestionsAnwsers(result?.values))
  }, [result])
  
  useEffect(() => {
    if(inputValue){
      const rr = new MiniSearch({ fields: ['Questions', "Réponse", "Proposition Raccourcie"], searchOptions: {
        boost: { title: 2 },
        fuzzy: 0.1
      }})
      map && rr.addAll(map)
      const rrr = rr.search(inputValue)
      setFinal(rrr?.map(r => map.filter(f => f['Réponse'])?.find(m => r.id === m.id)))
    } else setFinal(map?.filter(f => f['Réponse']))
  }, [inputValue, map])

  return (
    <div id="container">
      <div id="background"/>
      <div className='flex flex-col w-full lg:w-3/4 m-auto p-2 lg:p-10'>
        <Input setValue={setInputValue} className='mb-5'/>
        <Filters clear={!!selectedFilter} themes={themes} setSelectedFilter={setSelectedFilter} selectedFilter={selectedFilter}/>
        <div id='card-container'>
          {list?.map(m => <Card key={m.id} element={m} />)}
        </div>
      </div>
    </div>
  )
}

export default App
