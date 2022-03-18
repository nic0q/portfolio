export const PinkButton = ({ text, link = "#" }) => {
  return (
    <button className="font-bold border-none p-1 px-6 text-xl py-2 rounded-full bg-[#E41476]">
      {text}
    </button>
  )
}
