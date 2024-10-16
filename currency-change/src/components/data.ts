export type URL_TYPE = {
	base_code: string
	conversion_rates: Record<string, number>
	documentation: string
	result: string
	term_of_use: string
	time_last_update_unix: number
	time_last_update_utc: string
	time_next_update_unix: number
	time_next_update_utc: string
}

export type SupportedCode = string[]

export interface CODE_TYPE {
	result: string
	documentation: string
	term_of_use: string
	supported_codes: SupportedCode[]
}
