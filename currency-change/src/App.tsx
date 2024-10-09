import { useState, useEffect } from 'react'

function App() {
	const [data, setData] = useState()

	const CurrencyFunc = () => {}
	const fetchData = async (curr: string) => {
		const resp = await fetch(
			`https://v6.exchangerate-api.com/v6/46f2eb700f8b190f570e9f79/latest/${curr}`
		)
		const data = await resp.json()

		setData(data)
		console.log(data)
	}
	return (
		<div className='flex h-full justify-center items-center flex-col'>
			<form>
				<select name='currency-select' id='currency-select'>
					<option value='None'>Select Your Currency</option>
					<option value='USD'>United State Dollar (USD)</option>
					<option value='UAH'>Ukraine Hryvna</option>
				</select>
			</form>
		</div>
	)
}

export default App
