import { Connect, SimpleSigner } from 'uport-connect'

const clientId = process.env.REACT_APP_EXPERIMENT_APP_CLIENT_ID;
const signer = process.env.REACT_APP_EXPERIMENT_APP_SIGNER;

export let uport = new Connect('Tom\'s experiment app', {
  clientId: clientId,
  network: 'rinkeby',
  signer: SimpleSigner(signer)
})
export const web3 = uport.getWeb3()
