import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from '../../components/PageheaderContent/PageHeaderContent'

const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio'>
      <PageHeaderContent
        headertext="PortFolio"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  )
}
export default Portfolio