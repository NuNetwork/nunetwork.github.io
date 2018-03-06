---
layout: page
show_sidebar: true
title: NuShares
permalink: /nushares
redirect_from:
- /nushares/introduction
- /nushares/voting-mechanics
menu: Documentation
---
<img src="{{ site.url }}{{ site.baseurl }}/assets/nushares-logo-full-150-twotone.png" width="150" height="143" alt="" style="float: left; margin: 10px 60px 40px 20px">
**NuShares is the company stock and the backbone reserve for NuBits. Shareholders control the network by voting, and have power to …**

- Issue new NuBits (USNBT, CNNBT, EUNBT, KRNBT, JPNBT, XNBT).
- Issue new NuShares (NSR).
- Adjust transaction fees.
- Adjust park rates (tier 5).

*Learn the essentials of NuBits' [liquidity model](https://discuss.nubits.com/t/nubits-liquidity-model/5395) and view [current supply figures](https://nubits.com/supply).*

New NuShares are created only by passing of a grant, and from the voting reward (40 NSR per vote). Every 10,000 NSR allow one vote per 7 days. Once cast, the involved NuShares cannot be moved temporarily.

Grants and motions require over 50% of YES votes within any 7 days to be passed in protocol. Grants directly increase the coin supply. Motions only tell humans what shareholders want.

Issuance of NuBits and NuShares requires majority vote, while transaction fees and park rates are adjusted continuously to the median of the latest day and a half of votes.

In order to initially offer NuBits at an exchange, shareholders find a trusted agent that will place them on the exchange order book. Agent presents an unused NuBit address, they agree to an amount, and supporting shareholders vote for the grant proposal. If the grant passes, the amount is created at the agent's NuBit address.

## Grants

Shareholders can create new funds at any address that hasn't previously received a grant. Grants pass after over 50% of YES votes and share days destroyed (SDD) in 10,000 blocks (7 days). Grants can pass in 3½ days with support from all voting shareholders.

## Motions

Shareholders announce their intentions by passing motions. Motions have no direct impact on the network, meaning shareholders, custodians, or developers need to manually apply the contents. Motions require over 50% of blocks and share days destroyed by minting within 10,000 blocks to pass.

## Transaction Fees

Median vote is the fee. 60 blocks in the past. NuBits Wallet defaults to the highest fee to be charged in the next 10 blocks. Default transaction fees equal to the current transaction fees are applied if there is no transaction fee vote for a particular currency in the majority of share days for the voting period of 2000 blocks.

## Park Rates (Tier 5)

Shareholders can offer interest on NuBits taken out of circulation in order to stimulate demand. An Annual Percentage Rate (APR) is calculated from a 2,000-block window offset by 60 blocks in the past to enable prediction of rates 60 minutes ahead. Parking will lock the NuBits from spending for the duration chosen.

Each duration APR is calculated individually against other voted rates for the same duration. Each rate vote is weighted by the share days destroyed (SDD) when a block is minted. Effective rate is the median APR from counting each SDD as a single vote for a set rate.

Rates can be increased approximately 3% per day (0.002% per block), and can be decreased approximately 6% per day (0.004% per block) if necessary to ensure the network can be responsive to changing market conditions.

Share days are accrued by shares if they are undisturbed (not sent or staked) after becoming a verified transaction. After seven days, shares are fully matured (usable for voting). Holding shares beyond this date has no impact on the difficulty of minting a block creating an incentive for shareholders to vote as soon as possible. Split outputs into 10,000 NSR chunks to optimize for voting (note that transaction fee may increase).

## Data Feeds

Shareholders can subscribe to the decisions made by a trusted person or group. Data feeds enable participation in securing the network by minting while delegating the responsibility of network management.

> Alice subscribes to Bob's data feed. When Bob makes a decision and shares it in his data feed, Alice's NuBits Wallet will automatically vote accordingly.
