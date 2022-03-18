export const Skill = ({ shadowColor, img, name }) => {
  return (
    <div className={`shadow-md md:hover:scale-110 duration-200 ${shadowColor}`}>
      <img className="w-20 mt-2 mx-auto" src={img} alt={`${name} icon`} />
      <p className="my-4">{name}</p>
    </div>
  )
}
