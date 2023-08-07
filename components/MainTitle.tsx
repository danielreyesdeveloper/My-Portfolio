type Prop = {
  title:string;
}

const MainTitle = ({title}: Prop) => {
  return (
    <div className="content flex justify-center items-center flex-col mb-10">
      <h2 className="text-3xl font-bold text-gray-700 flex items-center">{title}</h2>
    </div>
  )
}
export default MainTitle