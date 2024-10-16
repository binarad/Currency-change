import { useState } from 'react'
import Forms from './components/Forms'
import Result from './components/Result'
import { URL_TYPE } from './components/data'
import useFetch from './hooks/useFetch'

function App() {
	const [inputVal, setInputVal] = useState('')
	const [chosenCurrency, setChosenCurrency] = useState('USD')
	const [currencyToConvert, setCurrencyToConvert] = useState('USD')
	const currency_URL = `https://v6.exchangerate-api.com/v6/46f2eb700f8b190f570e9f79/latest/${chosenCurrency}`
	const data: URL_TYPE | null = useFetch<URL_TYPE | null>(currency_URL)
	const currentConversionRate = data?.conversion_rates[currencyToConvert]
	return (
		<div className='flex w-full h-screen justify-center items-center flex-col'>
			<Forms
				inputVal={inputVal}
				setInputVal={setInputVal}
				setChosenCurrency={setChosenCurrency}
				chosenCurrency={chosenCurrency}
				currencyToConvert={currencyToConvert}
				setCurrencyToConvert={setCurrencyToConvert}
			/>
			<Result
				inputVal={inputVal}
				currentConversionRate={currentConversionRate}
			/>
		</div>
	)
}

export default App
