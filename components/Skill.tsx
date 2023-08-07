type Name = {
  name: string;
}

const Skill = ({name}: Name) => {
  return (
    <div className="bg-slate-800 text-white font-semibold w-[101px] h-24 flex items-center justify-center rounded-md text-center">
      {name}
    </div>
  )
}
export default Skill