export default function Input(setInputVal: any) {
	return (
		<div className='flex flex-col items-center justify-center gap-2'>
			<label htmlFor='amount'>Enter your amount</label>
			<input
				maxLength={20}
				onChange={e => setInputVal(e.target.value)}
				type='text'
				name='amount'
				className='border border-black bg-orange-400 p-1'
			/>
		</div>
	)
}
