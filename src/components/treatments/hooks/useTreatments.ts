import { useQuery } from 'react-query'
import type { Treatment } from '../../../../../shared/types'
import { axiosInstance } from '../../../axiosInstance'
import { queryKeys } from '../../../react-query/constants'
import { useCustomToast } from '../../app/hooks/useCustomToast'
import { Feedback } from 'react-bootstrap/lib/FormControl'

// for when we need a query function for useQuery
async function getTreatments(): Promise<Treatment[]> {
  const { data } = await axiosInstance.get('/treatments')
  return data
}

export function useTreatments(): Treatment[] {
  // TODO: get data from server via useQuery

  const toast = useCustomToast()
  const fallback = []
  const { data = fallback } = useQuery(queryKeys.treatments, getTreatments, {
    onError: (error) => {
      const title =
        error instanceof Error
          ? error.toString().replace(/^Error: \s*/, '')
          : 'error connecting to the server'
      toast({ title, status: 'error' })
    },
  })
  return data
}
