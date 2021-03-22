/* eslint-disable */
import { SORT_STATUS } from "../constants/constant";

export function handleStatusSort(status) {
  return SORT_STATUS[
    Object.keys(SORT_STATUS).find(
      el => SORT_STATUS[el].status === status
    )
  ]
}
