import { Input } from "@/components/ui/input"
import { Search, SunMedium, Bell, Ellipsis} from "lucide-react"
import knight from "./assets/images/knight.webp"

export function App() {
  return (
    <>
      <header className="w-full h-20 px-6 pt-2 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/shopsenseNB.png" alt="" className="w-14 h-14"/>
          <p className="text-2xl font-medium">
            <span className="text-[#5647CE]">Shop</span>
            <span className="text-[#000000]">Sense</span>
          </p>
        </div>

        <div className="relative w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5"></Search> 
          <Input 
            className="pl-10 w-96 h-11 mr-80 placeholder:text-sm placeholder:text-gray-600 border-none bg-[#F9F9F9] rounded-2xl " 
            placeholder="Search"
          />
        </div>
        <div className="h-12 flex gap-3">
          <div className="flex gap-6 items-center">
            <SunMedium fill="#545162" stroke="#545162" className="fill[#545162] w-6 h-6"></SunMedium>
            <Bell fill="#545162" stroke="#545162" className="fill[#545162] w-5 h-5"></Bell>
          </div>

          <div className="w-px h-12 bg-gray-100 items-center"></div>

          <div className="h-full flex items-center gap-2">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={knight}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
              <div className="h-auto flex-column items-center mr-2">
                <p className="font-semibold">Vinícius José</p>
                <p className="font-normal text-[12px] text-gray-400 text-left font-medium">Shop Admin</p>
              </div>
                <Ellipsis stroke="#545162" className="h-6 w-10 fill-green-500"/> 
          </div>
        </div>

      </header>
    </>
  )
}
