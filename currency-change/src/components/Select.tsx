type SelectProps = {
	selectVal: string
	setCurrency: (value: React.SetStateAction<string>) => void
	options: JSX.Element[] | undefined
	name?: string
}
export default function SelectCurrency(props: SelectProps) {
	const { selectVal, setCurrency, options, name } = props
	return (
		<div>
			<select
				value={selectVal}
				name={name}
				id='currency-select'
				className='bg-slate-400 border border-black'
				onChange={e => {
					e.preventDefault()
					setCurrency(e.target.value)
				}}
			>
				{options}
			</select>
		</div>
	)
}
