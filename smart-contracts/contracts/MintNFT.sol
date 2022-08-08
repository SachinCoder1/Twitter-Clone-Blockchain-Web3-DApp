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

    Counters.Counter tokenIds;

    /* Mappings */
    mapping(uint256 => string) s_tokenURIs;

    /* Structs */
    struct Token {
        uint256 id;
        string uri;
        string space;
    }

    /* constructor */
    constructor() ERC721("Minting NFTs", "Mint") {}

    /* Pure/Get Functions */

    function getTokenURI(uint256 _tokenId)
        external
        view
        returns (string memory)
    {
        if (!_exists(_tokenId)) {
            revert MintNFT__TokenDosentExist();
        }

        return s_tokenURIs[_tokenId];
    }

    //  Get all the tokens which exist
    function getAllTokens() external view returns (Token[] memory) {
        uint256 currentId = tokenIds.current();
        Token[] memory newTokens = new Token[](currentId);

        for (uint i = 0; i <= currentId; i++) {
            if (_exists(i)) {
                string memory uri = s_tokenURIs[i];
                newTokens[i] = Token(i, uri, " ");
            }
        }

        return newTokens;
    }

    /* Logics */

    function _setTokenURI(uint256 _tokenId, string memory _tokenURI) private {
        s_tokenURIs[_tokenId] = _tokenURI;
    }

    function mintNFT(address _nftAddress, string memory _tokenURI)
        external
        returns (uint256)
    {
        uint256 currentId = tokenIds.current();
        _mint(_nftAddress, currentId);
        _setTokenURI(currentId, _tokenURI);
        tokenIds.increment();
        return currentId;
    }
}
