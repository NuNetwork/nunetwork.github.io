---
layout: page
title: Exchange Listing
menu: Documentation
show_sidebar: true
permalink: /list-nubits
---
**List our stable cryptocurrencies and give your traders access to the benefits of NuBits.**

## NuBits

Traders use NuBits for hedging, arbitrage, savings, and transfers between exchanges. USNBT was #1 in trading volume at Bittrex with $86M/24h in February. Listing NuBits is an easy way to increase liquidity on your exchange.

| Asset | Symbol | Initial | Port | Note |
|---|--:|:-:|---|---|
NuShares | NSR | S | `14001` | 
United States NuBits | USNBT | B | `14002` | 
Chinese NuBits | CNNBT | Y | `14003` | 
European NuBits | EUNBT | E | `14004` | 
World NuBits | XNBT | X | `14005` |
South Korean NuBits | KRNBT | W | `14006` |
Japanese NuBits | JPNBT | J | `14007` |

## Wallet

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

## Trading Pairs

Create the following pairs and notify [liquidity@nubits.com](mailto:liquidity@nubits.com). Liquidity Operations will provide liquidity on exchanges where NuBits are listed with a robust API.

- **BTC**/USNBT
- **ETH**/EUNBT
- **BCH**/CNNBT
- USNBT/**USD**
- CNNBT/**CNY**

Set NuBits as ‘quote’ asset (/USNBT) for all but any associated fiat currency trading pair (EUNBT/EUR).

- NSR/**BTC**
- NSR/**USNBT**

**List NuShares to enable Tier 6 in our liquidity flow.**

## Specifications

| Name | NuShares, NuBits
|:--|:--|
Symbol | NSR, USNBT, CNNBT, EUNBT, XNBT, KRNBT, JPNBT
Compatibility | Bitcoin [UTXO](https://en.wikipedia.org/wiki/Unspent_transaction_output), JSON-RPC [API](https://nubits.com/api)
Algorithm | Proof-of-Stake
Status | Fully functional.
Launch | 2014
Location | Worldwide with contractors in Sweden, UK, France, and Japan.
Website | https://nubits.com
Exchanges | https://nubits.com/exchanges
Graphics | https://nubits.com/brand (logos and icons in PNG, AI, EPS)
CoinMarketCap | https://coinmarketcap.com/currencies/nubits/
Twitter | https://twitter.com/OfficialNuBits
Explorer | https://explorer.nubits.com
Source Code | https://nubits.com/source
TxFee | NuBits: 0.01; NuShares: 1.00 (Fees variable by continuous shareholder vote)
Premine | None. Created according to demand.
Supply | Shareholders vote for creation of new units. Total Supply and Circulating Supply provided via [API](https://nubits.com/api) and in [dashboard](https://grafana.crypto-daio.co.uk/d/000000027/supply-reserves-and-equilibrium?refresh=5m&panelId=13&orgId=1).

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
