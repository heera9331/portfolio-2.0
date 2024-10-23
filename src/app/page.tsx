import Card from "@/components/Card";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="grid grid-cols-12 px-40 space-x-6 my-4 relative">
      <Sidebar className={"col-span-3 border !min-h-[95vh]"} />
      <Card className="col-span-9 !min-h-[95vh]">
        <main className="">
          <nav className="">
            <ul className="flex">
              <li className="mr-2 px-2 py-1 border rounded-lg cursor-pointer">Home</li>
              <li className="mr-2 px-2 py-1 border rounded-lg cursor-pointer">Resume</li>
              <li className="mr-2 px-2 py-1 border rounded-lg cursor-pointer">Portfolio</li>
              <li className="mr-2 px-2 py-1 border rounded-lg cursor-pointer">Blog</li>
              <li className="mr-2 px-2 py-1 border rounded-lg cursor-pointer">Contact</li>
            </ul>
          </nav>
          <div className="border rounded-lg bg-primary p-4 mt-4">
              <p>something is here</p>
          </div>
        </main>
      </Card>
    </div>
  );
}
