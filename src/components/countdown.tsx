import Countdown from "react-countdown"

const CountdownTime = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a complete state
      return <span>Ended!</span>
    } else {
      // Render a countdown
      return (
        <>
          <div className="grid grid-cols-4 gap-4 max-sm:gap-3 mb-8 max-sm:mb-6">
            <div className="bg-primary-200 p-2 flex flex-col justify-between items-center rounded-lg">
              <div className="font-bold text-4xl max-sm:text-3xl text-white">{days}</div>
              <div className="font-medium text-base max-sm:text-sm text-nature-400">Days</div>
            </div>
            <div className="bg-primary-200 p-2 flex flex-col justify-between items-center rounded-lg">
              <div className="font-bold text-4xl max-sm:text-3xl text-white">{hours}</div>
              <div className="font-medium text-base max-sm:text-sm text-nature-400">Hours</div>
            </div>
            <div className="bg-primary-200 p-2 flex flex-col justify-between items-center rounded-lg">
              <div className="font-bold text-4xl max-sm:text-3xl text-white">{minutes}</div>
              <div className="font-medium text-base max-sm:text-sm text-nature-400">Mins</div>
            </div>
            <div className="bg-primary-200 p-2 flex flex-col justify-between items-center rounded-lg">
              <div className="font-bold text-4xl max-sm:text-3xl text-white">{seconds}</div>
              <div className="font-medium text-base max-sm:text-sm text-nature-400">Secs</div>
            </div>
          </div>
        </>
      )
    }
  }

  return (
    <Countdown
      key={"public-sale-time"}
      renderer={renderer}
      date={1679648451000}
    />
  )
}

export default CountdownTime
