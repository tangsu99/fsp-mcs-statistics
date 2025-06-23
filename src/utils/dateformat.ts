import { format } from 'date-fns'

export const formattedDate = (date: string, formatStr: string) => format(new Date(date), formatStr)
