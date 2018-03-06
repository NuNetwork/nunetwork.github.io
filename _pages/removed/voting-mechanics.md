---
layout: page
show_sidebar: true
title: Voting Mechanics
permalink: /nushares/voting-mechanics
menu: NuShares
---
<center><img src="{{ site.url }}{{ site.baseurl }}/assets/nushares-logo-full-150-twotone.png" width="150" height="143" alt="nushares-logo-full-150-twotone.png" /></center>

[**How does a Custodian vote work?**](#how-does-a-custodian-vote-work)  
[**How does a Park Rate vote work?**](#how-does-a-park-rate-vote-work)  
[**How does a Motion vote work?**](#how-does-a-motion-vote-work)  
[**How does a Transaction Fee vote work?**](#how-does-a-transaction-fee-vote-work)  
[**What are Data Feeds?**](#what-are-data-feeds)  
[**Why are NuShareholder dividends paid in Peercoin?**](#why-are-nushareholder-dividends-paid-in-peercoin)  

#### How does a Custodian vote work?

Shareholders vote for a custodian by selecting a specific NuBits address and amount pair. A NuBits address will be provided by the prospective custodian along with the amount (in NuBits) they are requesting for the service they will provide to the network. Custodians submit proposals to NuShareholders that outline these details. An example might be “I will develop an instant messaging service for the Nu network for 20,000 NBT”.

Shareholders wishing to vote for a custodian will enter this address pair into the custodian vote interface in the Nu client. Two measures are calculated to verify if a custodian vote has passed.

First, it takes 5,001 votes in any 10,000 block window for a custodian vote to pass.

Second, the vote must also have more than 50% of share age destroyed from minting in the same rolling 10,000 block window.

Once a vote passes on a custodian's NuBits address the granted NuBits are immediately available for the custodian to use.


#### Park Rates (Tier 5)

Shareholders can offer interest on NuBits taken out of circulation in order to stimulate demand. An Annual Percentage Rate (APR) is calculated from a 2,000-block window offset by 60 blocks in the past to enable prediction of rates 60 minutes ahead. Parking will lock the NuBits from spending for the duration chosen.

Each duration APR is calculated individually against other voted rates for the same duration. Each rate vote is weighted by the share days destroyed (SDD) when a block is minted. Effective rate is the median APR from counting each SDD as a single vote for a set rate.

Rates can be increased approximately 3% per day (0.002% per block), and can be decreased approximately 6% per day (0.004% per block) if necessary to ensure the network can be responsive to changing market conditions.

Share days are accrued by shares if they are undisturbed (not sent or staked) after becoming a verified transaction. After seven days, shares are fully matured (usable for voting). Holding shares beyond this date has no impact on the difficulty of minting a block creating an incentive for shareholders to vote as soon as possible. Split outputs into 10,000 NSR chunks to optimize for voting (note that transaction fee may increase).

#### Motions

Shareholders announce their intentions by passing motions. Motions have no direct impact on the network, meaning shareholders, custodians, or developers need to manually apply the contents. Motions require over 50% of blocks and share days destroyed by minting within 10,000 blocks to pass.

#### Transaction Fees

Median vote is the fee. 60 blocks in the past. NuBits Wallet defaults to the highest fee to be charged in the next 10 blocks. Default transaction fees equal to the current transaction fees are applied if there is no transaction fee vote for a particular currency in the majority of share days for the voting period of 2000 blocks.

#### Data Feeds

Shareholders can subscribe to the decisions made by a trusted person or group. Data feeds enable participation in securing the network by minting while delegating the responsibility of network management.

> Alice subscribes to Bob's data feed. When Bob makes a decision and shares it in his data feed, Alice's NuBits Wallet will automatically vote accordingly.
