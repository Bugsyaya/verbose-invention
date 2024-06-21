import { Tag } from "./tag"

export const Card = ({element}) => {
  return <div className="flex flex-col border rounded-lg p-2 my-2 font-normal text-base bg-[#EEDDC5] bg-opacity-95 text-[#1D1D1B]">
    <p className="font-semibold text-lg text-center mb-2">{element['Questions']}</p>
    <p>{element["Réponse"]}</p>
    <p>{element["Proposition Raccourcie"]}</p>
    {element["Reponse additionnelle"] && <><p className="font-semibold text-sm">{element["Question additonnelle"]}</p>
    <p className="text-sm">{element['Reponse additionnelle']}</p></>
    }
    <Tag theme={element['Thème principal']}/>
  </div>
}