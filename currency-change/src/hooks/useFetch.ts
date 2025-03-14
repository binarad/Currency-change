import { useEffect, useState } from 'react'

const useFetch = <T>(url: string) => {
	const [data, setData] = useState<T | null>(null)

	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(data => setData(data))
	}, [url])

	return data
}

export default useFetch
