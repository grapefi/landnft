// import { ChainId } from '@pancakeswap-libs/sdk';
import { ChainId } from '@spookyswap/sdk';
import { Configuration } from './tomb-finance/config';
import { BankInfo } from './tomb-finance';

const configurations: { [env: string]: Configuration } = {
  development: {
    chainId: 97,
    networkName: 'Bsc Test Net',
    ftmscanUrl: 'https://testnet.bscscan.com/',
    defaultProvider: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    deployments: require('./tomb-finance/deployments/deployments.testing.json'),
    externalTokens: {
      WFTM: ['0xf1277d1ed8ad466beddf92ef448a132661956621', 18],
      FUSDT: ['0xb7f24e6e708eabfaa9e64b40ee21a5adbffb51d6', 6],
      WETH: ['0x14f0C98e6763a5E13be5CE014d36c2b69cD94a1e', 18],
      TOMB: ['0x2317610e609674e53D9039aaB85D8cAd8485A7c5', 0],
      MIM: ['0x39523112753956d19A3d6a30E758bd9FF7a8F3C0', 9],
      USDC: ['0x04068da6c83afcfa0e13ba15a6696662335d5b75', 6],
      FANG: ['0x49894fcc07233957c35462cfc3418ef0cc26129f', 18],
      'USDT-FTM-LP': ['0xE7e3461C2C03c18301F66Abc9dA1F385f45047bA', 18],
      '2OMB-FTM-LP': ['0x13Fe199F19c8F719652985488F150762A5E9c3A8', 18],
      '2SHARE-FTM-LP': ['0x20bc90bB41228cb9ab412036F80CE4Ef0cAf1BD5', 18],
      '2OMB-2SHARE-LP': ['0xd9B5f00d183df52D717046521152303129F088DD', 18],
      'MVDOLLAR-USDC-LP': ['0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c', 18],
      MG: ['0x323fA706Ed9925b56F2e5f3487e6D3069ABa4E52', 18],
    },
    baseLaunchDate: new Date('2021-06-02 13:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    masonryLaunchesAt: new Date('2020-12-11T00:00:00Z'),
    refreshInterval: 10000,
  },
  production: {
    chainId: ChainId.MAINNET,
    networkName: 'Fantom Opera Mainnet',
    ftmscanUrl: 'https://ftmscan.com',
    defaultProvider: 'https://rpc.ftm.tools/',
    deployments: require('./tomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WFTM: ['0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', 18],
      FUSDT: ['0x04068DA6C83AFCFA0e13ba15A6696662335D5B75', 6], // This is actually usdc on mainnet not fusdt
      WETH: ['0x74b23882a30290451A17c44f4F05243b6b58C76d', 18], // BOO: 0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE 18
      TOMB: ['0x6c021ae822bea943b2e66552bde1d2696a53fbb7', 18], // ZOO: 0x09e145a1d53c0045f41aeef25d8ff982ae74dd56 0
      USDC: ['0x04068da6c83afcfa0e13ba15a6696662335d5b75', 6], // SHIBA: 0x9ba3e4f84a34df4e08c112e1a0ff148b81655615 9
      FANG: ['0x49894fcc07233957c35462cfc3418ef0cc26129f', 18],
      'USDT-FTM-LP': ['0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c', 18],
      '2OMB-FTM-LP': ['0xbdc7dfb7b88183e87f003ca6b5a2f81202343478', 18], //
      '2SHARE-FTM-LP': ['0x6398ACBBAB2561553a9e458Ab67dCFbD58944e52', 18],
      '2OMB-2SHARE-LP': ['0xd9B5f00d183df52D717046521152303129F088DD', 18],
      'MVDOLLAR-USDC-LP': ['0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c', 18],
      MG: ['0x323fA706Ed9925b56F2e5f3487e6D3069ABa4E52', 18],
    },
    baseLaunchDate: new Date('2021-06-02 13:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    masonryLaunchesAt: new Date('2020-12-11T00:00:00Z'),
    refreshInterval: 10000,
  },
};

export const genesisDefinitions: { [contractName: string]: BankInfo } = {
  /*
  Explanation:
  name: description of the card
  poolId: the poolId assigned in the contract
  sectionInUI: way to distinguish in which of the 3 pool groups it should be listed
        - 0 = Single asset stake pools
        - 1 = LP asset staking rewarding TOMB
        - 2 = LP asset staking rewarding TSHARE
  contract: the contract name which will be loaded from the deployment.environmnet.json
  depositTokenName : the name of the token to be deposited
  earnTokenName: the rewarded token
  finished: will disable the pool on the UI if set to true
  sort: the order of the pool
  */
  TombFtmRewardPool: {
    name: 'Stake WFTM, earn MvDOLLAR',
    poolId: 0,
    sectionInUI: 0,
    contract: 'TombFtmRewardPool',
    depositTokenName: 'WFTM',
    earnTokenName: 'MvDOLLAR',
    multiplier: '100x',
    finished: false,
    sort: 1,
    closedForStaking: false,
  },
};

export const bankDefinitions: { [contractName: string]: BankInfo } = {
  /*
  Explanation:
  name: description of the card
  poolId: the poolId assigned in the contract
  sectionInUI: way to distinguish in which of the 3 pool groups it should be listed
        - 0 = Single asset stake pools
        - 1 = LP asset staking rewarding TOMB
        - 2 = LP asset staking rewarding TSHARE
  contract: the contract name which will be loaded from the deployment.environmnet.json
  depositTokenName : the name of the token to be deposited
  earnTokenName: the rewarded token
  finished: will disable the pool on the UI if set to true
  sort: the order of the pool
  */

  MiniGuineas: {
    name: 'Stake Mini, earn MvDOLLAR',
    poolId: 0,
    sectionInUI: 10,
    contract: 'MiniGuineas',
    depositTokenName: 'MG',
    earnTokenName: 'MvDOLLAR',
    multiplier: '100x',
    finished: false,
    sort: 1,
    closedForStaking: false,
    genesisFinished: false,
  },
  // TshareDividends: {
  //   name: 'Earn USDC dividends by staking 2SHARES',
  //   poolId: 0,
  //   sectionInUI: 3,
  //   contract: 'TombTshareLPTShareRewardPool',
  //   depositTokenName: '2SHARES',
  //   earnTokenName: 'USDC',
  //   multiplier: "0x",
  //   finished: false,
  //   sort: 9,
  //   closedForStaking: false,
  // },
};

export default configurations['production'];
