// @flow

import { type Reducer, combineReducers } from 'redux'

import { type CoreState, core } from '../modules/Core/reducer.js'
import { type ExchangeRatesState, exchangeRates } from '../modules/ExchangeRates/reducer.js'
import { type UiState, ui } from '../modules/UI/reducer.js'
import { type Action } from '../types/reduxTypes.js'
import { type ContactsState, contacts } from './ContactsReducer.js'
import { type CryptoExchangeState, cryptoExchange } from './CryptoExchangeReducer.js'
import { type PermissionsState, permissions } from './PermissionsReducer.js'
import { type VendorLogsState, vendorLogs } from './VendorPluginLogsReducer.js'

export { core, ui, cryptoExchange, exchangeRates, permissions, contacts }

export type RootState = {
  +contacts: ContactsState,
  +core: CoreState,
  +cryptoExchange: CryptoExchangeState,
  +exchangeRates: ExchangeRatesState,
  +permissions: PermissionsState,
  +ui: UiState,
  +vendorLogs: VendorLogsState
}

export const rootReducer: Reducer<RootState, Action> = combineReducers({
  contacts,
  core,
  cryptoExchange,
  exchangeRates,
  permissions,
  vendorLogs,
  ui,
})
