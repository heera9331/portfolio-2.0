import Image from "next/image";
import Card from "./Card";
import toast from "react-hot-toast";

// Function to copy text to clipboard and show toast
const copyToClipboard = (text: string, message: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => toast.success(message))
    .catch(() => toast.error("Failed to copy!"));
};

const MobileHeader = () => {
  return (
    <Card className="card flex flex-col gap-4 col-span-12 md:hidden">
      <div className="flex gap-4">
        <div className="flex items-center justify-center p-0 bg-ternary rounded-2xl">
          <Image
            className="w-[150px] rounded-full"
            width={200}
            height={200}
            src="https://avatars.githubusercontent.com/u/71516269?v=4"
            alt="Heera Singh Lodhi"
          />
        </div>
        <div className="flex flex-col gap-2 my-1">
          <h1 className="text-3xl font-semibold">Heera Singh Lodhi</h1>
          <p className="px-3 py-1 rounded-lg bg-red-500 text-white text-center w-fit">
            Web Developer
          </p>
        </div>
      </div>

      <ul className="flex flex-row justify-between gap-6 mt-1 mx-1">
        <li
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => copyToClipboard("8085589371", "Phone number copied!")}
        > 
          <div className="bg-ternary p-4 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px] text-yellow">phone</span>
          </div>
          <p className="text-sm text-gray-500 hidden sm:block">8085589371</p>
        </li>

        <li
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => copyToClipboard("Sagar, MP-470001", "Address copied!")}
        >
          <div className="bg-ternary p-4 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px] text-yellow">place</span>
          </div>
          <p className="text-sm text-gray-500 hidden sm:block">
            Sagar, MP-470001
          </p>
        </li>

        <li
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() =>
            copyToClipboard("heera9331@gmail.com", "Email copied!")
          }
        >
          <div className="bg-ternary p-4 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px] text-yellow">mail</span>
          </div>
          <p className="text-sm text-gray-500 hidden sm:block">
            heera9331@gmail.com
          </p>
        </li>

        <li
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() =>
            copyToClipboard(
              "https://github.com/heera9331",
              "GitHub link copied!"
            )
          }
        >
          <div className="bg-ternary p-4 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px] text-yellow">link</span>
          </div>
          <p className="text-sm text-gray-500 hidden sm:block">
            github.com/heera9331
          </p>
        </li>
      </ul>
    </Card>
  );
};

export default MobileHeader;
