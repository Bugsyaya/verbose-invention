export const Input = ({setValue, className}) => {
  return <input className={`bg-[#EEDDC5] text-[#1D1D1B] w-full p-1 text-lg border rounded-lg ${className}`} placeholder="J'ai une question..." onChange={(e) => setValue(e.target.value)}/>
}