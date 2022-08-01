const main = async () => {
  const MintNFT = await hre.ethers.getContractFactory(
    'MintNFT',
  )
  const mintNFT = await MintNFT.deploy()

  await mintNFT.deployed()

  console.log('Profile Image Minter deployed to:', mintNFT.address)
}

;(async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()