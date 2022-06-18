import React from 'react'
import './snap.styles.css'
import { SProfile } from '../../assets'
import { Write } from '../../assets'

const Snap = () => {
  return (
    <div className='snap-page'>
      <h1 className='snap-topic'>Supplemental Nutrition Assistance Program</h1>
      <img src={SProfile} className='snap-profile' alt="" />
      <div className='white-bg'>
        <div className="white-text">
          <div className='el-text'>Eligiblity Criteria</div>
          <div className="el-contents">
            <div className='el-image'>
              <img src={Write} alt="" />
            </div>
            <div className="el-points">
              1. A U.S. citizen or Lawful Permanent Resident (18 years or older) <br />
              2. Not exceed income threshold of $1,926 a month <br />
              3. Paid employee working an average of 20 hours a week <br />
              4. Self-employed at least 20 hours each week and have a countable monthly income of at least $1,247 after business costs <br />
              5. Been awarded and have accepted federal work-study (temporary emergency circumstances now allow all students awarded work-study or family EFC $0 to qualify) <br />
              6. Responsible for the care of a child (age requirements apply) <br />
              7. Receiving TANF <br />
              8. In a Workforce Investment Act training program <br />
              9. Receiving unemployment compensation <br />
              10. Participating in at least one Employment Department training program <br />
              11. Unable to work due to physical or physiological difficulties <br />
              <button className='el-button'>Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Snap