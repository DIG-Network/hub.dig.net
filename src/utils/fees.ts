import Wallet, {SendTransactionRequest} from "chia-wallet";

const mojosPerXch = 1e12;
const stdFeeXch = 0.01;
const feePer100MbXch = 0.01;
const walletAddress: string = 'xch1djjwc54ax3gz4n5fthkt5q4nhgerlx8e5n92435gr3scdsxrcf6sh55z5w';

export const sendConstFee = (network: string, numSpendableCoins: number) => {
  const wallet = new Wallet({verbose: true});

  // if the user has 2 spendable coins, send the usage fee
  if (network === 'mainnet' && numSpendableCoins > 1){
    const request: SendTransactionRequest = {
      wallet_id: 1,
      address: walletAddress,
      amount: xchToMojos(stdFeeXch)
    };
    wallet.sendTransaction(request);
  }
};

export const sendVariableFee = (network: string, numSpendableCoins: number, fee: number) => {
  const wallet = new Wallet({verbose: true});

  // if the user has 2 spendable coins, send the usage fee
  if (network === 'mainnet' && numSpendableCoins > 1){
    const request: SendTransactionRequest = {
      wallet_id: 1,
      address: walletAddress,
      amount: xchToMojos(fee)
    };
    wallet.sendTransaction(request);
  }
};

export const calcSizeBasedDeployFee = (sizeMb: number): number => {
  const fee: number = parseFloat( ( (sizeMb / 100) * feePer100MbXch ).toFixed(5) );

  if (fee < stdFeeXch){ // check: fee is less than a mojo
    return stdFeeXch;
  } else {
    return fee;
  }
}

export const xchToMojos = (xch: number):number => {
  return Math.ceil(xch * mojosPerXch);
}