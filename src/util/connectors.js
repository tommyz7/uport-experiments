import { Connect, SimpleSigner } from 'uport-connect'

const clientId = process.env.EXPERIMENTAPPCLIENTID;
const signer = process.env.EXPERIMENTAPPSIGNER;

export let uport = new Connect('Tom\'s experiment app', {
  clientId: clientId,
  network: 'rinkeby',
  signer: SimpleSigner(signer)
})
export const web3 = uport.getWeb3()
