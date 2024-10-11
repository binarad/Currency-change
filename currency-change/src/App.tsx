import { useState, useEffect } from 'react'
import useFetch from './hooks/useFetch'
type URL_TYPE = {
	base_code: string
	conversion_rate: object
	documentation: string
	result: string
	term_of_use: string
	time_last_update_unix: number
	time_last_update_utc: string
	time_next_update_unix: number
	time_next_update_utc: string
}

type CODE_TYPE = {
	result: string
	documentation: string
	term_of_use: string
	supported_codes: {}
}
function App() {
	const [chosenCurrency, setChosenCurrency] = useState('')
	const default_currency = 'USD'
	const codes_URL =
		'https://v6.exchangerate-api.com/v6/46f2eb700f8b190f570e9f79/codes'
	const currency_URL = `https://v6.exchangerate-api.com/v6/46f2eb700f8b190f570e9f79/latest/${
		chosenCurrency || default_currency
	}`
	const data: URL_TYPE | null = useFetch<URL_TYPE | null>(currency_URL)
	const codes_data: CODE_TYPE | null = useFetch<CODE_TYPE | null>(codes_URL)
	useEffect(() => {
		// console.log(data)
		console.log(
			fetch(codes_URL).then(resp =>
				resp
					.json()
					.then(data =>
						console.log(data.supported_codes.map(code => console.log(code)))
					)
			)
		)
	}, [])
	return (
		<div className='flex w-full h-screen justify-center items-center flex-col'>
			<form>
				<select
					name='currency-select'
					id='currency-select'
					className='bg-slate-400 border border-black'
					onChange={e => {
						setChosenCurrency(e.target.value)
						console.log(e.target.value)
					}}
				>
					{/* <option value='None'>Select Your Currency</option>
					<option value='USD'>United State Dollar (USD)</option>
					<option value='UAH'>Ukraine Hryvna</option> */}
				</select>
			</form>
		</div>
	)
}

export default App
