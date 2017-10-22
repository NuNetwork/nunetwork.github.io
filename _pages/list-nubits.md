---
layout: page
title: List NuBits and NuShares at your exchange
permalink: /list-nubits
---
List our stable cryptocurrencies and give your traders access to the benefits of NuBits. Include NuShares for investors with minimal additional effort.

Set up NuBits as pairs with -NBT as denominator to attract most traders. They're accustomed to using BTC/USD (or BTC/CNY), and our currency US NuBits is pegged to the US dollar, making BTC/USNBT most intuitive. SouthXchange is an excellent reference.

We will provide peg-supporting liquidity at exchanges where NuBits is paired with Bitcoin, Ethereum, and US dollar (fiat). Our spread is 1% or below, including your trading fee. Our Bitcoin price feed is an average of aggregated sources.

## List NuBits

1. [Download](/wallet) or compile NuBits Wallet from [source](/source).
2. Use our recommended settings in `nu.conf`.
3. Contact [team@nubits.com](mailto:team@nubits.com) at any time.

### Exchange settings for `nu.conf`

```
debug=1
stakegen=0
splitshareoutputs=0
avatar=0
```

### Handle NuShare transactions with many outputs

In order to vote at optimal rate, shareholders split the NuShares in their addresses by 10,000 NSR per output. Trying to send large amounts using split outputs could fail, so we built two mechanisms as workarounds.

- Option `multitx=1` lets the wallet create multiple transactions for the requested fund movements. RPC commands return every resulting transaction ID separated by newline.
- RPC command `mergeoutputs` takes all outputs in every address and sends as many transactions necessary to combine them into one output at each respective address.

#### Use `mergeoutputs` RPC

Quick and easy fix, but may have to be run regularly or occasionally.

1. Unlock using `walletpassphrase` with a long timeout (10–30 minutes).
2. Run `mergeoutputs` without arguments.

#### Use `multitx=1` option

No maintenance once configured.

1. Add `multitx=1` to the `nu.conf`.
2. Use a long `walletpassphrase` timeout (3–10 minutes) to avoid a multi-transaction send being aborted.
3. Make sure your system handles receiving and logging multiple transaction IDs properly.
