import Image from "next/image";
import Card from "./Card";

const Sidebar = ({ className = "" }: { className?: string }) => {
  return (
    <>
      <Card
        className={`flex flex-col items-center gap-2 sm:hidden md:flex ${className}`}
      >
        <div className="avtar-wrap p-4">
          <Image
            className="p-2 w-3/4 h-3/4 bg-ternary rounded-3xl m-auto"
            src="/images/avatars/heera.png"
            alt=""
            width={1000}
            height={1000}
          />
        </div>
        <h1 className="text-3xl font-bold w-full text-center">
          Heera Singh Lodhi
        </h1>
        <p className="text-center w-4/5 profession bg-red-800 text-white font-semibold px-2 py-1 rounded-md mt-2">
          Web Developer
        </p>

        <hr className="border w-full my-8 opacity-60" />

        <ul className="flex flex-col gap-6">
          <li className="flex gap-4">
            <div className="bg-ternary p-2 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined flex items-center justify-center">
                phone
              </span>
            </div>
            <div>
              <p className="font-semibold text-gray-500 text-sm">Mobile</p>
              <a className="" href="">
                8085589371
              </a>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="bg-ternary p-2 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined flex items-center justify-center">
                place
              </span>
            </div>
            <div>
              <p className="font-semibold text-gray-500 text-sm">ADDRESS</p>
              <a className="" href="">
                Sagar, MP-470001
              </a>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="bg-ternary p-2 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined flex items-center justify-center">
                mail
              </span>
            </div>
            <div>
              <p className="font-semibold text-gray-500 text-sm">Email</p>
              <a className="" href="">
                heera9331@gmail.com
              </a>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="bg-ternary p-2 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined flex items-center justify-center">
                link
              </span>
            </div>
            <div>
              <p className="font-semibold text-gray-500 text-sm">Github</p>
              <a className="" href="">
                github.com/heera9331
              </a>
            </div>
          </li>
        </ul>
      </Card>
    </>
  );
};

export default Sidebar;
