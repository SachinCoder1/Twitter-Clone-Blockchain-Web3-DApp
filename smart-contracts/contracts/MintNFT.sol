// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;


/* Imports  */
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/* Errors */
error MintNFT__TokenDosentExist();

contract MintNFT is ERC721, Ownable {
    /* State Variables */
    using Counters for Counters.Counter;
    using Strings for uint256;

    Counters.Counter = _tokenIds;

    /* Mappings */
    mapping (uint256 => string) s_tokenURIs;

   /* Structs */
    struct Token {
        uint256 id;
        string uri;
        string space;        
    }

    /* constructor */
     constructor() ERC721("Minting NFTs", "Mint"){
        
     }


     /* Pure/Get Functions */

     function getTokenURI(uint256 _tokenId) external view returns(string memory){
        if(!_exists(_tokenId)){
            revert MintNFT__TokenDosentExist();
        }

        return s_tokenURIs[_tokenId];
     }

    

     /* Logics */

     function _setTokenURI(uint256 _tokenId, string memory _tokenURI){
         s_tokenURIs[_tokenId] = _tokenURI;
     }


}