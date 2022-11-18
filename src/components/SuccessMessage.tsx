import React from 'react'

interface ISuccessData {
  thanksgivingDate: Date
  currentDate: Date
}

const SuccessMessage: React.FC<ISuccessData> = ({ thanksgivingDate, currentDate }) => {
  thanksgivingDate.setDate(thanksgivingDate.getDate() + 1)
  thanksgivingDate.setHours(0, 0, 0, 0)
  console.log(thanksgivingDate, 'current', currentDate)
  const difference = thanksgivingDate.getTime() - currentDate.getTime()
  const daysBetween = Math.ceil(difference / (1000 * 3600 * 24))

  if (daysBetween === 0) {
    return <h1>Today is the LotR marathon!</h1>
  }

  return (
    <div className="row">
      <div className="col-12">
        <h1>It is not the Lotr marathon!</h1>
      </div>
      <div className="col-12">
        <h2>There are {daysBetween} days left</h2>
      </div>
    </div>
  )
}

export default SuccessMessage
