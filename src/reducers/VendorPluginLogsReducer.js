// @flow

import type { Action } from '../types/reduxTypes.js'

export const initialState = {

}

export type VendorLogsState = { [string]: Array<string> }

export const vendorPluginLogs = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case 'VENDOR_PLUGIN_LOGS': {
      const { data } = action
      const { vendor, logs } = data
      const currentVendorLogs = state[vendor]
      currentVendorLogs.push(logs)
      return {
        ...state,
        [vendor]: currentVendorLogs
      }
    }

    default:
      return state
  }
}
