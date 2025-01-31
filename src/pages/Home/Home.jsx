import React, { useState } from 'react'
import SnapCard from '../../component/SnapCard/SnapCard'
import Header from '../../component/Header/Header'
import Drawer from '../../component/Drawer/Drawer'
import Footer from '../../component/Footer/Footer'

const Home = () => {

    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  
    const [filterData, setfilterData] = useState("");

  return (
    <div className='outer_container'>
     <Header setIsOpenDrawer={setIsOpenDrawer} />
        <Drawer setfilterData={setfilterData} setIsOpenDrawer={setIsOpenDrawer} isOpenDrawer={isOpenDrawer} />
        <SnapCard filterData={filterData} />
        <Footer />
    </div>
  )
}

export default Home
