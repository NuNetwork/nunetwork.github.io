---
layout: page
show_sidebar: true
title: Voting Mechanics
permalink: /nushares/voting-mechanics
menu: NuShares
---
<center><img src="/assets/nushares-logo-full-150-twotone.png" width="150" height="143" alt="nushares-logo-full-150-twotone.png" /></center>
<p>&nbsp;</p>
<a href="#how-does-a-custodian-vote-work"><b>How does a Custodian vote work?</b></a><br>
<a href="#how-does-a-park-rate-vote-work"><b>How does a Park Rate vote work?</b></a><br>
<a href="#how-does-a-motion-vote-work"><b>How does a Motion vote work?</b></a><br>
<a href="#how-does-a-transaction-fee-vote-work"><b>How does a Transaction Fee vote work?</b></a><br>
<a href="#what-are-data-feeds"><b>What are Data Feeds?</b></a><br>
<a href="#why-are-nushareholder-dividends-paid-in-peercoin"><b>Why are NuShareholder dividends paid in Peercoin?</b></a><br>
<br>
<h4 id="how-does-a-custodian-vote-work">How does a Custodian vote work?</h4>
<p>Shareholders vote for a custodian by selecting a specific NuBits address and amount pair. A NuBits address will be provided by the prospective custodian along with the amount (in NuBits) they are requesting for the service they will provide to the network. Custodians submit proposals to NuShareholders that outline these details. An example might be “I will develop an instant messaging service for the Nu network for 20,000 NBT”.</p>
<p>Shareholders wishing to vote for a custodian will enter this address pair into the custodian vote interface in the Nu client. Two measures are calculated to verify if a custodian vote has passed.</p>
<p>First, it takes 5,001 votes in any 10,000 block window for a custodian vote to pass.</p>
<p>Second, the vote must also have more than 50% of share age destroyed from minting in the same rolling 10,000 block window.</p>
<p>Once a vote passes on a custodian's NuBits address the granted NuBits are immediately available for the custodian to use.</p>
<p>Here is a tutorial video showing how to vote for a custodian:</p>
<iframe width="560" height="315" src="//www.youtube.com/embed/VLHjo8VvxD0" frameborder="0" allowfullscreen></iframe>
<p>&nbsp;</p>

<h4 id="how-does-a-park-rate-vote-work">How does a Park Rate vote work?</h4>
<p>Shareholders can vote on interest rates for NuBits parking. This rate is entered into the client as an Annual Percentage Rate (APR). Parking will prevent NuBits from being used for a user specified duration of time, while also earning guaranteed interest at the end of the duration. </p>
<p>There are only 27 duration periods which percentage rates can be voted on. The first duration period starts at 1 minute and doubles each duration period up to 129.5 years. The rate is calculated by a rolling 2,000 block window including the current block. </p>
<p>As originally designed, parking rates are determined based on the rates published for the block that contains a parking transaction. This change uses the rate from 60 blocks in the past. This will permit the parking rates to be known 60 blocks into the future.</p>
<p>Each duration APR is calculated individually against other voted rates for the same duration. Each rate vote is weighted by the share days destroyed (SDD) when a block is minted. The rate will be set at the median APR voted in by counting each SDD as a single vote for a set rate. </p>
<p>Rates can be increased approximately 3% per day (0.002% per block), and can be decreased approximately 6% per day (0.004% per block) if necessary. This is to ensure that the network can be responsive to changing market conditions.</p>
<p>Share days are accrued by shares if they are undisturbed (not sent or staked) after becoming a verified transaction. After seven days, shares are fully matured (usable for minting). Holding shares beyond this date has no impact on the difficulty of minting a block. This creates an incentive for NuShareholders to mint as soon as possible. The client splits transfers up into outputs of 10,000 each as a way to optimize and equalize voting opportunities. This is also why NuShare transaction fees are higher than 1 when transferring large amounts.</p>
<p>Here is a tutorial video showing how to vote for park rates:</p>
<iframe width="560" height="315" src="//www.youtube.com/embed/5JNjkqCHCPY" frameborder="0" allowfullscreen></iframe>
<p>&nbsp;</p>

<h4 id="how-does-a-motion-vote-work">How does a Motion vote work?</h4>
<p>Shareholders can vote on motions which are used to gauge the will of shareholders on a topic. Motions have no direct impact on the network, meaning shareholders, custodians, or developers need to manually carry out the voted upon topic. Like custodian votes, motions votes require more than 50% of blocks and share age destroyed by minting, within a rolling 10,000 block window in order to pass.</p>
<p>An example motion might be “Change the Nu logo to a picture of a teacup pig”. The responsibility would fall on a Nu developer to carry out that action if the network voted in agreement.</p>
<p>Here is a tutorial video showing how to vote for a motion:</p>
<iframe width="560" height="315" src="//www.youtube.com/embed/NDiDwaqYsbk" frameborder="0" allowfullscreen></iframe>
<p>&nbsp;</p>

<h4 id="how-does-a-transaction-fee-vote-work">How does a Transaction Fee vote work?</h4>
<p>This enhancement in Nu v2.0 permits shareholders to vote to set transaction fees. The median vote is the fee. As with parking rates, transaction fees are also set using the fee from 60 blocks in the past. The client uses the highest fee to be charged in the next 10 blocks. Default transaction fees equal to the current transaction fees are applied if there is no transaction fee vote for a particular currency in the majority of share days for the voting period of 2000 blocks.</p>
<p>&nbsp;</p>

<h4 id="what-are-data-feeds">What are Data Feeds?</h4>
<p>Data Feeds allow NuShareholders to automatically update their client with decisions made by a trusted person or group. Monitoring the network can be a time-intensive process, and so Data Feeds ensure that casual NuShareholders can still participate in securing the network without worrying about staying on top of every decision. For example, Alice could choose to subscribe to Bob's Data Feed service in her wallet. Any time Bob makes a decision and pushes it to his subscribers, Alice's client will automatically update with his decision!</p>
<p>&nbsp;</p>

<h4 id="why-are-nushareholder-dividends-paid-in-peercoin">Why are NuShareholder dividends paid in Peercoin?</h4>
<p>We require an asset external to our system to distribute dividends. The purpose of creating NuBits is primarily to meet increased demand for NuBits in a way that prevents the rise of the NuBit price. If we distributed NuBits to shareholders instead of bringing them directly to market, there would be no way of knowing whether shareholders would hold them or sell them, or for how long they would hold them. It wouldn't permit the network to tightly control the supply of available NuBits, which is necessary to maintain the pegged price.</p>
<p>Let's take a look at how a custodian would distribute dividends to NuShareholders:</p>
<iframe width="560" height="315" src="//www.youtube.com/embed/MSVqMjAoYBg" frameborder="0" allowfullscreen></iframe>
<p>&nbsp;</p>
<h4>Where can I find more information?</h4>
<p>For further explanation of the concepts behind NuShares and its voting mechanisms, please read the <a href="/about/white-paper">white paper</a> and <a href="/about/process-map">process map</a>.
<p>Visit our <a href="http://discuss.nubits.com">forum</a> to ask questions and discuss ideas about NuShares.</p>
