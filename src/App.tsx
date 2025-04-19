import './App.css'
import Accounting from './screen/accounting/Accounting'
import NavigationWeb from './shared/navigationWeb/NavigationWeb'
import Sidebar from './shared/sidebar/Sidebar'
import SideSection from './shared/sideSection/SideSection'
import {MessagesSquare} from 'lucide-react';

function App() {

  return (
    <div className='flex w-full bg-[#603AE51A]'>
      <Sidebar/>
      <div className='w-3/4 flex flex-col'>
        <NavigationWeb/>
        {/* mt-26 */}
        <div className='mt-4 pl-4 pr-4'>
          <Accounting/>
        </div>
      </div>
      <SideSection/>
      <div className='size-14 bg-[#9C85ED] text-white flex justify-center items-center rounded-2xl fixed bottom-8 right-8 hover:bg-[#603AE5] hover:opacity-90'><MessagesSquare /></div>
    </div>
  )
}

export default App
