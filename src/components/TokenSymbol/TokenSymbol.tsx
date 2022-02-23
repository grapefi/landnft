import React from 'react';

//Graveyard ecosystem logos
import tombLogo from '../../assets/img/MvDOLLAR.png';
import tShareLogo from '../../assets/img/MvSHARE.png';
//import tombLogoPNG from '../../assets/img/2omb-01.png';
import tShareLogoPNG from '../../assets/img/MvSHARE.png';
import tBondLogo from '../../assets/img/MvBOND.png';

import tombFtmLpLogo from '../../assets/img/Mv-USDC.png';
//import tshareFtmLpLogo from '../../assets/img/MvS-USDC.png';

import wftmLogo from '../../assets/img/ftm_logo_blue.svg';
import wethLogo from '../../assets/img/weth.png';
//import rtombLogo from '../../assets/img/crypto_tomb_cash.svg';
import shibaLogo from '../../assets/img/mimlogo.png';

//import tombtshares from '../../assets/img/2OMB-2SHARES.png';

import usdc from '../../assets/img/USDC.png';

const logosBySymbol: { [title: string]: string } = {
  //Real tokens
  //=====================
  TOMB: tombLogo,
  '2OMB': tombLogo,
  '2SHARES': tombLogo,
  '2BOND': tBondLogo,
  MvDOLLAR: tombLogo,
  TOMBPNG: tombLogo,
  TSHAREPNG: tShareLogoPNG,
  TSHARE: tShareLogo,
  TBOND: tBondLogo,
  WFTM: wftmLogo,
  WETH: wethLogo,
  MIM: shibaLogo,
  FANG: shibaLogo,

  // RTOMB: rtombLogo,
  '2OMB-FTM-LP': tombFtmLpLogo,
  '2SHARE-FTM-LP': tombFtmLpLogo,
  '2OMB-2SHARE-LP': tombFtmLpLogo,
  'MVDOLLAR-USDC-LP': tombFtmLpLogo,
  USDC: usdc,
};

type LogoProps = {
  symbol: string;
  size?: number;
};

const TokenSymbol: React.FC<LogoProps> = ({ symbol, size = 64 }) => {
  if (symbol === 'TOMB' || symbol === 'TOMBPNG' || symbol === '2OMB' || symbol === 'MvDOLLAR' || symbol === '2SHARES') {
    return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={70} height={55} />;
  } else {
    return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={size} height={size} />;
  }
};

export default TokenSymbol;
