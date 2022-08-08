import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { urls } from "../constants";
import {client} from "../sanity-client/client"

const defaultProfileImg = "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1659534767~exp=1659535367~hmac=524171c5543d6fa034d5d02fe05ae668748d4580eac8c77bdf21a0f439d9d276"

export const MainContext = createContext("");

export const MainContextProvider = ({ children }) => {
  const router = useRouter();
  const possibleStatus = {
    connected: "connected",
    notConnected: "notConnected",
    loading: "loading",
    noMetamask: "noMetamask",
    error: "error",
  };
  const { connected, notConnected, loading, noMetamask, error } =
    possibleStatus;

  /* Use States */
  const [currentStatus, setCurrentStatus] = useState(notConnected);
  const [currentAccount, setCurrentAccount] = useState("");
  const [allTweets, setAllTweets] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  const requestAccount = async () => {
    return await window.ethereum.request({
      method: "eth_requestAccounts",
    });
  };

  const isWalletConnected = async () => {
    if (!window.ethereum) {
      setCurrentStatus(noMetamask);
      return;
    }

    // if (localStorage.getItem("isConnected") == "web3") {
      try {
        const allAddresses = await requestAccount();
        if (allAddresses.length) {
          setCurrentStatus(connected);
          setCurrentAccount(allAddresses[0]);
          createUserAccount(allAddresses[0])
        } else {
          setCurrentStatus(notConnected);
          setCurrentAccount();
        }
      } catch (err) {
        console.log("Error while connecting if wallet connected", err);
        setCurrentAccount("");
        setCurrentStatus(error);
      // }
    } 
    // else {
    //   setCurrentStatus(notConnected);
    // }
  };

  const connectWallet = async () => {
    if (!window.ethereum) {
      setCurrentStatus(noMetamask);
      return;
    }
    try {
      setCurrentStatus(loading);
      const allAddresses = await requestAccount();
      if (allAddresses.length) {
        setCurrentAccount(allAddresses[0]);
        setCurrentStatus(connected);
        // localStorage.setItem("isConnected", "web3");
      } else {
        router.push(urls.home);
        setCurrentAccount("");
        setCurrentStatus(notConnected);
      }
    } catch (err) {
      console.log("Error while connecting wallet ", err);
      setCurrentStatus(error);
    }
  };



  // Creating an account in sanity
  const createUserAccount = async (userWalletAddress=currentAccount) => {
    if(!window.ethereum){
      setCurrentStatus(noMetamask);
      setCurrentAccount("");
      return;
    }

    try {
      const userDoc = {
        _type: "users",
        _id: userWalletAddress,
        name: "Unnamed",
        isProfileImageNft: false,
        profileImage: defaultProfileImg,
        walletAddress : userWalletAddress
      }

      await client.createIfNotExists(userDoc)
      
    } catch (err) {
      console.log("Error while creating user account ", err);
      
    }


  }


  // Get Profile Image Url

  const getProfileImageURI = async (imageURI, isNFT) => {
    if(isNFT){
      return `https://gateway.pinata.cloud/ipfs/${imageURI}`;

    }else{
      return imageURI;
    }
  }




  // Fetch All the tweets;
  const fetchTweets = async () => {
    const query = `
      *[_type == "tweets"]{
        "owner": owner->{name, walletAddress, profileImage, isProfileImageNft},
        tweet,
        timestamp
      }|order(timestamp desc)
    `

   const sanityResponse = await client.fetch(query)
   console.log(sanityResponse)

    setAllTweets([])

    await sanityResponse?.forEach(async item => {
      const profileImageUrl = await getProfileImageURI(
        item?.owner?.profileImage,
        item?.owner?.isProfileImageNft,
      )

      if (item?.owner?.isProfileImageNft) {
        const newItem = {
          tweet: item.tweet,
          timestamp: item.timestamp,
          owner: {
            name: item.owner.name,
            walletAddress: item.owner.walletAddress,
            profileImage: profileImageUrl,
            isProfileImageNft: item.owner.isProfileImageNft,
          },
        }

        setAllTweets(prevState => [...prevState, newItem])
        console.log(allTweets)
      } else {
        setAllTweets(prevState => [...prevState, item])
        console.log(allTweets)
      }
    })
  }



  // CurrentAccount tweets;
  const getCurrentUserDetails = async (userAccount = currentAccount) => {
    if (currentStatus !== 'connected') {
      return;
    }
    // setCurrentStatus(loading)
    const query = `
      *[_type == "users" && _id == "${userAccount}"]{
        "tweets": tweets[]->{timestamp, tweet}|order(timestamp desc),
        name,
        profileImage,
        isProfileImageNft,
        coverImage,
        walletAddress
      }
    `
    const response = await client.fetch(query)

    const profileImageUri = await getProfileImageURI(
      response[0].profileImage,
      response[0].isProfileImageNft,
    )

    setCurrentUser({
      tweets: response[0].tweets,
      name: response[0].name,
      profileImage: profileImageUri,
      walletAddress: response[0].walletAddress,
      coverImage: response[0].coverImage,
      isProfileImageNft: response[0].isProfileImageNft,
    })

  }


  // useEffect(() => {
  //   isWalletConnected();
  // }, []);


  useEffect(() => {
    if(!currentAccount || currentStatus != "connected") return
    getCurrentUserDetails(currentAccount);
  }, [currentAccount, currentStatus]);

  return (
    <MainContext.Provider
      value={{ currentAccount, currentStatus, setCurrentStatus, connectWallet, fetchTweets, getCurrentUserDetails, allTweets, currentUser }}
    >
      {children}
    </MainContext.Provider>
  );
};
