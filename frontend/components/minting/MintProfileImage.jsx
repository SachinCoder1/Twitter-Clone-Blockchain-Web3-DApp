import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
// import { client } from '../../../lib/client'
import { ABI, networkAddress, pinJSONToIPFS, pinFileToIPFS  } from '../../constants'
import { ethers } from 'ethers'
import Initial from './Initial'
import OnLoading from './OnLoading'
import Finished from './Finished'
import { client } from '../../sanity-client/client'
import { MainContext } from '../../context/MainContext'

// let window;

let metamask;

if (typeof window !== 'undefined') {
  metamask = window.ethereum
}




const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(metamask)
  const signer = provider.getSigner()
  const transactionContract = new ethers.Contract(
    networkAddress,
    ABI,
    signer,
  )

  return transactionContract
}


const MintProfileImage = () => {
  const { currentAccount, setCurrentStatus } = useContext(MainContext)
  const router = useRouter()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('initial')
  const [profileImage, setProfileImage] = useState()

  const mint = async () => {
    if (!name || !description || !profileImage) return
    setStatus('loading')

    const pinataMetaData = {
      name: `${name} - ${description}`,
    }

    const ipfsImageHash = await pinFileToIPFS(profileImage, pinataMetaData)

    await client
      .patch(currentAccount)
      .set({ profileImage: ipfsImageHash })
      .set({ isProfileImageNft: true })
      .commit()

    const imageMetaData = {
      name: name,
      description: description,
      image: `ipfs://${ipfsImageHash}`,
    }

    const ipfsJsonHash = await pinJSONToIPFS(imageMetaData)

    const contract = await getEthereumContract()

    const transactionParameters = {
      to: networkAddress,
      from: currentAccount,
      data: await contract.mintNFT(currentAccount, `ipfs://${ipfsJsonHash}`),
    }

    try {
      await metamask.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      })

      setStatus('finished')
    } catch (error) {
      console.log(error)
      setStatus('finished')
    }
  }

  const renderLogic = (modalStatus = status) => {
    switch (modalStatus) {
      case 'initial':
        return (
          <Initial
            profileImage={profileImage}
            setProfileImage={setProfileImage}
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            mint={mint}
          />
        )

      case 'loading':
        return <OnLoading />

      case 'finished':
        return <Finished />

      default:
        router.push('/')
        setCurrentStatus('error')
        break
    }
  }

  return <>{renderLogic()}</>
}

export default MintProfileImage