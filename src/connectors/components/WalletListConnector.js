// @flow

import { connect } from 'react-redux'

import type { connectorProps } from '../../components/modals/WalletListModal'
import { WalletListModal } from '../../components/modals/WalletListModal'
import { getActiveWalletIds } from '../../modules/UI/selectors.js'
import type { State } from '../../types/reduxTypes.js'

export const mapStateToProps = (state: State): connectorProps => {
  const wallets = state.ui.wallets.byId
  const activeWalletIds = getActiveWalletIds(state).filter(id => !(wallets[id] != null && wallets[id].type === 'wallet:fio'))
  return {
    state,
    activeWalletIds
  }
}

const WalletListConnector = connect(mapStateToProps)(WalletListModal)

export { WalletListConnector }
