// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import { ByteHasher } from './helpers/ByteHasher.sol';
import { IWorldID } from './interfaces/IWorldID.sol';

contract FriendWorld is ERC721URIStorage {
    using ByteHasher for bytes;

    error InvalidNullifier();

    IWorldID internal immutable worldId;

    uint256 internal immutable groupId = 1;

    mapping(uint256 => bool) internal nullifierHashes;

    struct Friend {
      address friend;
      string url;
    }

    Friend[] public friends;

    constructor(IWorldID _worldId) {
      worldId = _worldId;
    }

    function register(
      string memory url,
      address input,
      uint256 root,
      uint256 nullifierHash,
      uint256[8] calldata proof
    ) public payable returns (bool) {
      if (nullifierHashes[nullifierHash]) revert InvalidNullifier();

      worldId.verifyProof(
        root,
        groupId,
        abi.encodePacked(input).hashToField(),
        nullifierHash,
        abi.encodePacked(address(this)).hashToField(),
        proof
      );

      nullifierHashes[nullifierHash] = true;

      friends.push(Friend({
        address: msg.sender,
        url: url
      }));

      return true;
    }
}