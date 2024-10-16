//-------------------------------------------------------------------------------------------------------------------------------
import Forms from './components/Forms'
import Result from './components/Result'
// SEPARATE BLOCKS OF CODE INTO OTHER FILES
//-------------------------------------------------------------------------------------------------------------------------------
function App() {
	return (
		<div className='flex w-full h-screen justify-center items-center flex-col'>
			<Forms />
			<Result />
		</div>
	)
}

export default App
