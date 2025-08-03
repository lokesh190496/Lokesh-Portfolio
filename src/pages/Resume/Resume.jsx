import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from '../../components/PageheaderContent/PageHeaderContent'

const Resume = () => {
  return (
    <section id='resume' className='resume'>
      <PageHeaderContent
        headertext="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  )
}
export default Resume