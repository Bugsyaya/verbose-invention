import { useState } from "react"
import { Tag } from "./tag"

export const Card = ({element, breakpoint}) => {
  const [seeMore, setSeeMore] = useState(true)
  return <div className="flex flex-col border rounded-lg p-2 my-2 font-normal text-base bg-[#EEDDC5] bg-opacity-95 text-[#1D1D1B]">
    <p className="font-semibold text-lg text-center mb-2">{element['Questions']}</p>
    <div>
      {element["Proposition Raccourcie"] ? <p>{element["Proposition Raccourcie"]}</p> : <p>{element["Réponse"]}</p>}
      {!seeMore && <p className="mt-8">{element["Réponse"]}</p>}
    </div>
    {element["Proposition Raccourcie"] && <p className="cursor-pointer underline font-light text-center m-3" onClick={() => setSeeMore(!seeMore)}>{seeMore ? "Voir plus" : "Voir moins"}</p>}
    {element["Reponse additionnelle"] && <><p className="font-semibold text-sm">{element["Question additonnelle"]}</p>
    <p className="text-sm">{element['Reponse additionnelle']}</p></>
    }
    <Tag theme={element['Thème principal']} breakpoint={breakpoint}/>
  </div>
}