import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)


  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)


  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


 return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('data:image/jpeg;base64,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')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setAmount(amount)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
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
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={from}
                                amountDisable
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
