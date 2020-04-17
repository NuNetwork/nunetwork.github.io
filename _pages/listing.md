---
layout: page
title: List NuBits and NuShares
menu: Documentation
show_sidebar: true
redirect_from:
  - /list-nubits
permalink: /listing
---
**List our stable cryptocurrencies and give your traders access to the benefits of NuBits.**

Traders use NuBits for hedging, arbitrage, savings, and transfers between exchanges. USNBT was once #1 in trading volume at Bittrex with $86M/24h. Listing NuBits is an easy way to increase liquidity on your exchange and attract both manual traders and bots.

## Trading Pairs

Liquidity Operations always seeks to provide liquidity on exchanges where NuBits are listed with a robust API. Depending on exchange reputation and scale, you can expect initial dual-side liquidity worth 0.5–2 BTC or 2,000–15,000 USD.

We recommend you list NuBits and NuShares exactly as shown:

Pairing Note | NuShares (NSR) | American NuBits (USNBT) | Chinese NuBits (CNNBT)
|:--|:--|:--|:--
Symbiotic|See NuBit pairs →|**NSR**/USNBT|**NSR**/CNNBT
Fiat|Ask|USNBT/**USD**|CNNBT/**CNY**
Bitcoin|NSR/**BTC**|**BTC**/USNBT|**BTC**/CNNBT
Ethereum|Ask|**ETH**/USNBT|Ask
Litecoin|Ask|**LTC**/USNBT|Ask

<br>

NuBits is by far **most useful being the quote asset in a trading pair (base/quote, e.g. BTC/USNBT)** for the same reason fiat currency tends to be. Everyone will appreciate reading “BTC/USNBT 7350” (which means 1 BTC is worth 7350 USNBT) instead of “USNBT/BTC 0.00013605” (meaning 1 USNBT is worth 0.00013605 BTC).

NuBits is designed as a decentralized store of value using multiple mechanism for stability and its backing, one of which involves a mutualistic liquidity flow with NuShares. Simplified, backing of NuBits today ultimately depends on the liquidity of NuShares, making it **important that you list both NuBits and NuShares on your exchange**.

You can share a single instance of NuBits wallet daemon for every asset you list.

## Wallet Daemon

**[Download](/wallet) or compile NuBits Wallet from [source](/source).**

Create [`nu.conf`](https://nubits.com/wallet-manual) and use recommended *exchange* settings:

```
stakegen=0
avatar=0
```

Ask us for assistance at [team@nubits.com](mailto:team@nubits.com).

### Blockchain Data

Synchronize the blockchain significantly faster with these steps.

1. Start NuBits Wallet once to create its data directory.
2. Close NuBits Wallet.
3. Download [**blk0001.dat**](https://nubits.ams3.digitaloceanspaces.com/blk0001.dat) and optionally [blkindex.dat](https://nubits.ams3.digitaloceanspaces.com/blkindex.dat). *(Total 3.5 GB)*
4. Replace with those the blockchain data files in NuBits Wallet [data directory](https://nubits.com/wallet-manual).
5. Start NuBits Wallet.

## Specifications

| Aspect | Information
|:--|:--|
Name | NuShares; American NuBits; Chinese NuBits
Symbol | NSR; USNBT; CNNBT
Compatibility | Bitcoin [UTXO](https://en.wikipedia.org/wiki/Unspent_transaction_output), JSON-RPC [API](https://nubits.com/api)
Algorithm | Proof-of-Stake
Status | Fully functional.
Launch | 2014
Location | Worldwide with contractors in Sweden, UK, France, and Japan.
Transaction Fee | NuShares: 1.00; NuBits: 0.01 (Fees variable by continuous shareholder vote)
Premine | NuBits or NuShares are created by shareholders for custodians to effect passed motion(s), which may be to meet demand at an exchange or to pay for expenses.
Supply | Shareholders vote for creation of new NuBits or NuShares. Total Supply and Circulating Supply provided via [API](https://nubits.com/api) and in [dashboard](https://grafana.crypto-daio.co.uk/d/000000027/supply-reserves-and-equilibrium?refresh=5m&panelId=13&orgId=1).

## Links

| Target | Link |
|:--|:--|
Website | https://nubits.com
Explorer | https://explorer.nubits.com
Source Code | https://nubits.com/source
Graphics | https://nubits.com/brand (logos and icons in PNG, AI, EPS)
Exchanges | https://nubits.com/exchanges
Bitcointalk | https://bitcointalk.org/index.php?topic=1888853
CoinMarketCap | https://coinmarketcap.com/currencies/nushares/; https://coinmarketcap.com/currencies/nubits/
Twitter | https://twitter.com/OfficialNuBits

# Technical

| Asset | Symbol | Initial | Port | Note |
|---|--:|:-:|---|---|
NuShares | NSR | S | `14001` | 
American NuBits | USNBT | B | `14002` | 
Chinese NuBits | CNNBT | Y | `14003` | 
European NuBits | EUNBT | E | `14004` | 
World NuBits | XNBT | X | `14005` |
South Korean NuBits | KRNBT | W | `14006` |
Japanese NuBits | JPNBT | J | `14007` |

<style>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  td:first-child {
    font-weight: bold;
  }
</style>
