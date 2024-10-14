import { useState, useEffect } from 'react'
import useFetch from './hooks/useFetch'
type URL_TYPE = {
	base_code: string
	conversion_rates: object
	documentation: string
	result: string
	term_of_use: string
	time_last_update_unix: number
	time_last_update_utc: string
	time_next_update_unix: number
	time_next_update_utc: string
}

type SupportedCode = string[]

interface CODE_TYPE {
	result: string
	documentation: string
	term_of_use: string
	supported_codes: SupportedCode[]
}

function App() {
	const [chosenCurrency, setChosenCurrency] = useState('')
	// const default_currency = 'USD'
	const codes_URL =
		'https://v6.exchangerate-api.com/v6/46f2eb700f8b190f570e9f79/codes'
	const currency_URL = `https://v6.exchangerate-api.com/v6/46f2eb700f8b190f570e9f79/latest/${chosenCurrency}`
	const data: URL_TYPE | null = useFetch<URL_TYPE | null>(currency_URL)
	const codes_data: CODE_TYPE | null = useFetch<CODE_TYPE | null>(codes_URL)
	const supportedCodes = codes_data?.supported_codes
	let conversionRates = data?.conversion_rates

	const choseYourCurrency = supportedCodes?.map(value => (
		<option key={value[0]} value={value[0]}>
			{value[1]}
		</option>
	))

	//----------------------------------------------------------------------------------------------------------
	// CURRENT TODO: FIGURE OUT HOW I CAN OPERATE WITH CONVERSION_RATES OBJECT 0:48
	//----------------------------------------------------------------------------------------------------------
	// useEffect(() => {
	// console.log(supportedCodes)
	// }, [])
	return (
		<div className='flex w-full h-screen justify-center items-center flex-col'>
			<form className='flex w-full flex-col justify-center items-center gap-[20px]'>
				<label htmlFor='currency-select'>Choose Currency</label>
				<select
					value={chosenCurrency}
					name='currency-select'
					id='currency-select'
					className='bg-slate-400 border border-black'
					onChange={e => {
						e.preventDefault()
						setChosenCurrency(e.target.value)
						console.log(data)
						console.log(conversionRates)
					}}
				>
					<option value='Null'> - </option>
					{choseYourCurrency}
				</select>
				<div className='flex flex-col items-center justify-center'>
					<label htmlFor='amount'>Enter your amount</label>
					<input
						type='text'
						name='amount'
						className='border border-black bg-orange-400 p-1'
					/>
				</div>
			</form>
		</div>
	)
}

export default App
