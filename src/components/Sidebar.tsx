import Image from "next/image";
import Card from "./Card";

const Sidebar = ({ className = "" }: { className?: string }) => {
  return (
    <>
      <Card className={`flex flex-col items-center gap-2 ${className}`}>
        <div className="avtar-wrap p-4">
          <Image
            className="p-2 w-3/4 h-3/4 bg-orange-500 rounded-3xl m-auto"
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
            <div className="bg-orange-500 p-2 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined flex items-center justify-center">
                mail
              </span>
            </div>
            <div>
              <p className="font-semibold text-gray-500 text-sm">EMAIL</p>
              <a className="" href="">
                heera9331@gmail.com
              </a>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="bg-orange-500 p-2 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined flex items-center justify-center">
                mail
              </span>
            </div>
            <div>
              <p className="font-semibold text-gray-500 text-sm">EMAIL</p>
              <a className="" href="">
                heera9331@gmail.com
              </a>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="bg-orange-500 p-2 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined flex items-center justify-center">
                mail
              </span>
            </div>
            <div>
              <p className="font-semibold text-gray-500 text-sm">EMAIL</p>
              <a className="" href="">
                heera9331@gmail.com
              </a>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="bg-orange-500 p-2 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined flex items-center justify-center">
                mail
              </span>
            </div>
            <div>
              <p className="font-semibold text-gray-500 text-sm">EMAIL</p>
              <a className="" href="">
                heera9331@gmail.com
              </a>
            </div>
          </li>
        </ul>
      </Card>
    </>
  );
};

export default Sidebar;
