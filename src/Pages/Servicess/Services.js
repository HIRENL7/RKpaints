import React from 'react'
import Bluepatch from '../../Components/HomePage/Bluepatch'
import OurFeaturedService from '../../Components/HomePage/OurFeaturedService'


import QuickContact from './QuickContact'
import RecentProjects from './RecentProjects'
import WorkingProcess from './WorkingProcess'

const Services = () => {
    return (
        <>
            <div className=''>
                <OurFeaturedService />
                <Bluepatch />
                <WorkingProcess />
                <RecentProjects />
                <QuickContact />
            </div>
        </>
    )
}

export default Services
