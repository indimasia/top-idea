import React from 'react'
import { getItems } from '../../../../utils/dbOperations'

function Tabs() {
    const [activeTab, setActiveTab] = React.useState(1)

    const setTab = (tab) => {
        // add hash query to url
        
        setActiveTab(tab)
        switch (tab) {
          case 0:
            window.location.hash = "hot";
            break;
          case 1:
            window.location.hash = "new";
            break;
          case 2:
            window.location.hash = "top";
            break;
        }
    }

  return (
    <div role="tablist" className="tabs tabs-bordered">
        <a role="tab" className={`tab text-lg font-bold ${activeTab == 0 && 'tab-active'}`} onClick={()=>setTab(0)}>
            🔥 Hot</a>
        <a role="tab" className={`tab text-lg font-bold ${activeTab == 1 && 'tab-active'}`} onClick={()=>setTab(1)}>
            ✨ New</a>
        <a role="tab" className={`tab text-lg font-bold ${activeTab == 2 && 'tab-active'}`} onClick={()=>setTab(2)}>
            🏆 Top</a>
    </div>
  )
}

export default Tabs