import useFetch from '../hooks/useFetch'
import { CODE_TYPE, FormProps } from './data'
import Input from './Input'
import SelectCurrency from './Select'

export default function Forms(props: FormProps) {
	const {
		inputVal,
		setInputVal,
		chosenCurrency,
		setChosenCurrency,
		currencyToConvert,
		setCurrencyToConvert,
	} = props

	const codes_URL =
		'https://v6.exchangerate-api.com/v6/46f2eb700f8b190f570e9f79/codes'
	const codes_data: CODE_TYPE | null = useFetch<CODE_TYPE | null>(codes_URL)
	const supportedCodes = codes_data?.supported_codes

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
		<form className='flex w-full flex-col justify-center items-center '>
			<label htmlFor='currency-select'>Choose Currency</label>
			<SelectCurrency
				selectVal={chosenCurrency}
				setCurrency={setChosenCurrency}
				options={choseYourCurrency}
			/>
			<Input inputValue={inputVal} setInputVal={setInputVal} />
			<label htmlFor='currency-to-convert'>Choose currency to convert</label>
			<SelectCurrency
				selectVal={currencyToConvert}
				setCurrency={setCurrencyToConvert}
				options={convertCurrency}
				name='currency-to-convert'
			/>
		</form>
	)
}
