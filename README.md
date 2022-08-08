# FullStack Twitter DApp (Decentralized Application)
Complete Full Stack Twitter DApp (Decentralized Application) using solidity language for Smart Contract, hardhat for Dev Enviroment, and Next.js Framework for frontend.

_Smart Contract Deployed on **Rinkeby Test Network**_ -> 0x0fb8a28AB6bBE78Ab016a3ff96E2539d65F6718e

**Main Page Of Twitter Dapp**
<a href="https://ibb.co/ZYp2MW3"><img src="https://i.ibb.co/jWPJrgd/Screenshot-272.png" alt="Screenshot-272" border="0"></a>

**For Minting an NFT Image**
<a href="https://ibb.co/5GRVKKT"><img src="https://i.ibb.co/6rW5XXY/Screenshot-271.png" alt="Screenshot-271" border="0"></a>

**When Not Connected**
<a href="https://ibb.co/BjzFk2N"><img src="https://i.ibb.co/xGCdZqH/Screenshot-273.png" alt="Screenshot-273" border="0"></a>


## Functionalities :-
 - **Mint An Image**
 - **Detector whether the profile image is NFT or not**
 - **Get All Tweets**
 - **Get Perticular User Tweets**
 - Twitter User Interface




## How to Setup in your local enviroment :-

### Frontend 
    1. cd frontend
    2. yarn install
    3. yarn run dev


### Blockchain
    1. cd smart-contracts
    2. npm install
    3. setup env for rinkeby test network or you can use localhost.
    4. npx hardhat node
    5. npx hardhat run scripts/deploy.js --network localhost
    
    
    
## Technologies/Frameworks Used :-

### Frontend
1. Next.js
2. Tailwind CSS (For styling).
3. Pinata (For Storing NFT Images).
4. **ethers.js** for Web3 integration.
5. Vercel (For deploying frontend)

## Blockchain
1. **Solidity** (To develop Smart Contract)
2. Javascript (For deploying scripts)
3. **Chai** (For testing Smart Contract)
4. Rinkeby (Test network)
5. Hardhat


## Database
- Sanity.io (For storing the users, and populate dynamic data.)