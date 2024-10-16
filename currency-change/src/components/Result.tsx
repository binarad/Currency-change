import { ResultProps } from './data'

export default function Result(props: ResultProps) {
	const inputValue = props.inputVal
	const currentConversionRate = props.currentConversionRate
	return (
		<div>
			{(parseFloat(inputValue) * currentConversionRate!).toFixed(2) || '...'}
		</div>
	)
}
