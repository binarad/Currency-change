import { InputProps } from './data'

export default function Input(props: InputProps) {
	const { inputValue, setInputVal } = props
	return (
		<div className='flex flex-col items-center justify-center gap-2'>
			<label htmlFor='amount'>Enter your amount</label>
			<input
				value={inputValue}
				maxLength={20}
				onChange={e => setInputVal(e.target.value)}
				type='text'
				className='border border-black bg-orange-400 p-1'
			/>
		</div>
	)
}
