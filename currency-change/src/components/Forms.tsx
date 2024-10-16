import { useState } from 'react'
import useFetch from '../hooks/useFetch'
import { URL_TYPE, CODE_TYPE } from './data'
import Input from './Input'
import SelectCurrency from './Select'

export default function Forms() {
	const [inputVal, setInputVal] = useState('')
	const [chosenCurrency, setChosenCurrency] = useState('USD')
	const [currencyToConvert, setCurrencyToConvert] = useState('USD')

	const codes_URL =
		'https://v6.exchangerate-api.com/v6/46f2eb700f8b190f570e9f79/codes'
	const currency_URL = `https://v6.exchangerate-api.com/v6/46f2eb700f8b190f570e9f79/latest/${chosenCurrency}`
	const data: URL_TYPE | null = useFetch<URL_TYPE | null>(currency_URL)
	const codes_data: CODE_TYPE | null = useFetch<CODE_TYPE | null>(codes_URL)
	const supportedCodes = codes_data?.supported_codes
	const currentConversionRate = data?.conversion_rates[currencyToConvert]

	const choseYourCurrency = supportedCodes?.map(value => (
		<option key={value[0]} value={value[0]}>
			{value[1]}
		</option>
	))
	const convertCurrency = supportedCodes?.map(value => (
		<option key={value[0]} value={value[0]}>
			{value[1]}
		</option>
	))
	return (
		<form className='flex w-full flex-col justify-center items-center gap-[20px]'>
			<label htmlFor='currency-select'>Choose Currency</label>
			<SelectCurrency
				selectVal={chosenCurrency}
				setCurrency={setChosenCurrency}
				options={choseYourCurrency}
			/>
			<div className='flex flex-col items-center justify-center gap-2'>
				<Input setInputVal={setInputVal} />
				<label htmlFor='currency-to-convert'>Choose currency to convert</label>
				<SelectCurrency
					selectVal={currencyToConvert}
					setCurrency={setCurrencyToConvert}
					options={convertCurrency}
					name='currency-to-convert'
				/>
			</div>
		</form>
	)
}
