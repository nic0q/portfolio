import { SubTitulo } from "./SubTitulo"

export const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full pb-16 flex flex-col text-white footer items-center justify-center text-center"
    >
      <form
        method="POST"
        action="https://getform.io/f/3f6554c3-4748-4ade-bca5-722d58c5ba5b"
        className="md:max-w-[570px] max-w-[400px] w-full"
      >
        <SubTitulo title={"Contact"}></SubTitulo>
        <p className="font-light pt-6 text-center">
          Submit the form bellow or send me an email
          <p className="font-bold">nicolascheneaux@gmail.com</p>
        </p>
        <div className="text-black flex flex-col m-5">
          <input
            type="text"
            name="name"
            className="m-2 h-9 p-3 rounded-xl caret-[#DB077B]
            border-2 border-solid border-white  
            transition
            ease-in-out
            focus:text-gray-700 focus:bg-white focus:border-[#DB077B] focus:outline-none "
            placeholder="Name"
          ></input>
          <input
            type="email"
            name="email"
            className="m-2 h-9 p-3 rounded-xl caret-[#DB077B]
            border-2 border-solid border-white  
            transition
            ease-in-out
            focus:text-gray-700 focus:bg-white focus:border-[#DB077B] focus:outline-none "
            placeholder="Email"
          ></input>
          <textarea
            type="text"
            name="message"
            className="items-start m-2 h-72 p-3 rounded-xl  form-control
            caret-[#DB077B]
            border-2 border-solid border-white  
            transition
            ease-in-out
            focus:text-gray-700 focus:bg-white focus:border-[#DB077B] focus:outline-none "
            placeholder="Message"
          ></textarea>
        </div>
        <button className="font-bold border-none p-1 px-6 text-xl py-2 rounded-full bg-[#DB077B]">
          Let's Collaborate
        </button>
      </form>
    </div>
  )
}
