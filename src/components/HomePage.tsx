import React, { useEffect, useState } from 'react'
import { useGetThanksgivingDateQuery } from '../api/holiday_api'
import ErrorMessage from './ErrorMessage'
import LoadingMessage from './LoadingMessage'
import SuccessMessage from './SuccessMessage'

const HomePage: React.FC = () => {
  const [today] = useState(new Date())
  today.setHours(0, 0, 0, 0)
  const currentYear = today.getFullYear()
  const [requestedYear, setRequestedYear] = useState(currentYear)

  const { data, isSuccess, isLoading, isError } = useGetThanksgivingDateQuery({
    year: requestedYear.toString(),
  })

  useEffect(() => {
    if (isSuccess && data && data !== '') {
      const thanksgivingDate = new Date(data)
      thanksgivingDate.setDate(thanksgivingDate.getDate() + 1)
      if (thanksgivingDate < today && currentYear === thanksgivingDate.getFullYear()) {
        setRequestedYear(currentYear + 1)
      }
    }
  }, [currentYear, data, isSuccess, today])

  return (
    <div className="homePage">
      {isSuccess && data && <SuccessMessage thanksgivingDate={new Date(data)} currentDate={today} />}
      {isLoading && <LoadingMessage />}
      {isError && <ErrorMessage />}
    </div>
  )
}

export default HomePage
