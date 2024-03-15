import { useState } from 'react'
import { InputBox } from './Components/index.js'
import usecurrencyapi from './hook/usecurrencyapi'

function App() {

  const [amount, setamount] = useState(0)
  const [from, setfrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertAmount, setconvertAmount] = useState(0)

  const currencyInfo = usecurrencyapi(from)
  const option = Object.keys(currencyInfo)

  const swap = () => {
    setTo(from)
    setfrom(to)
    setamount(convertAmount)
    setconvertAmount(convertAmount)
  }

  const convert = () => {
    setconvertAmount(Math.round( amount * currencyInfo[to]))
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://i.pinimg.com/564x/07/a6/bb/07a6bb442e7889fd360cd8bdfd422b57.jpg')`,
      }}>
      <div className=' w-full '>
        <div className=' ml-[200px] w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className=' w-full mb-1'>
              <InputBox
                label="from"
                amount={amount}
                currencyOption={option}
                onCureencyChange={(currency) => setfrom(currency)}
                selectedCurrency={from}
                onAmountChange={(amount)=> setamount(amount)}
              />

            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}

              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="to"
                amount={convertAmount}
                currencyOption={option}
                onCureencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDiasabled
                

              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>

          </form>

        </div>
      </div>
    </div>

  )
}

export default App
