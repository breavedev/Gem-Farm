export type GemFarm = {
  "version": "0.1.0",
  "name": "gem_farm",
  "instructions": [
    {
      "name": "initFarm",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "farmManager",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "farmAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardAPot",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardAMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardBPot",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardBMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bank",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "gemBank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "feeAcc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpAuth",
          "type": "u8"
        },
        {
          "name": "bumpTreasury",
          "type": "u8"
        },
        {
          "name": "rewardTypeA",
          "type": {
            "defined": "RewardType"
          }
        },
        {
          "name": "rewardTypeB",
          "type": {
            "defined": "RewardType"
          }
        },
        {
          "name": "farmConfig",
          "type": {
            "defined": "FarmConfig"
          }
        },
        {
          "name": "maxCounts",
          "type": {
            "option": {
              "defined": "MaxCounts"
            }
          }
        },
        {
          "name": "farmTreasury",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "updateFarm",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmManager",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "config",
          "type": {
            "option": {
              "defined": "FarmConfig"
            }
          }
        },
        {
          "name": "manager",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "maxCounts",
          "type": {
            "option": {
              "defined": "MaxCounts"
            }
          }
        }
      ]
    },
    {
      "name": "payoutFromTreasury",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmManager",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "farmAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpAuth",
          "type": "u8"
        },
        {
          "name": "bumpTreasury",
          "type": "u8"
        },
        {
          "name": "lamports",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addToBankWhitelist",
      "accounts": [
        {
          "name": "farm",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmManager",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "farmAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "addressToWhitelist",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "whitelistProof",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gemBank",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpAuth",
          "type": "u8"
        },
        {
          "name": "whitelistType",
          "type": "u8"
        }
      ]
    },
    {
      "name": "removeFromBankWhitelist",
      "accounts": [
        {
          "name": "farm",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmManager",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "farmAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "addressToRemove",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "whitelistProof",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gemBank",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpAuth",
          "type": "u8"
        },
        {
          "name": "bumpWl",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initFarmer",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "identity",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "bank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gemBank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "feeAcc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "stake",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "identity",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "bank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gemBank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeAcc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpAuth",
          "type": "u8"
        },
        {
          "name": "bumpFarmer",
          "type": "u8"
        }
      ]
    },
    {
      "name": "unstake",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "identity",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "bank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gemBank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeAcc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpAuth",
          "type": "u8"
        },
        {
          "name": "bumpTreasury",
          "type": "u8"
        },
        {
          "name": "bumpFarmer",
          "type": "u8"
        },
        {
          "name": "skipRewards",
          "type": "bool"
        }
      ]
    },
    {
      "name": "claim",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "identity",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rewardAPot",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardAMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardADestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardBPot",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardBMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardBDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpAuth",
          "type": "u8"
        },
        {
          "name": "bumpFarmer",
          "type": "u8"
        },
        {
          "name": "bumpPotA",
          "type": "u8"
        },
        {
          "name": "bumpPotB",
          "type": "u8"
        }
      ]
    },
    {
      "name": "flashDeposit",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "identity",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "bank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gemBox",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gemDepositReceipt",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gemSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gemMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gemRarity",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gemBank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeAcc",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpFarmer",
          "type": "u8"
        },
        {
          "name": "bumpVaultAuth",
          "type": "u8"
        },
        {
          "name": "bumpRarity",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "refreshFarmer",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "identity",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "refreshFarmerSigned",
      "docs": [
        "this one needs to be called by the farmer themselves",
        "it's useful if for some reason they can't re-enroll in another fixed reward cycle (eg reward exhausted)",
        "but they want to be able to refresh themselves and claim their earned rewards up to this point"
      ],
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "identity",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "reenroll",
          "type": "bool"
        }
      ]
    },
    {
      "name": "authorizeFunder",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmManager",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "funderToAuthorize",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authorizationProof",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "deauthorizeFunder",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmManager",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "funderToDeauthorize",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authorizationProof",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "fundReward",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authorizationProof",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authorizedFunder",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rewardPot",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpProof",
          "type": "u8"
        },
        {
          "name": "bumpPot",
          "type": "u8"
        },
        {
          "name": "variableRateConfig",
          "type": {
            "option": {
              "defined": "VariableRateConfig"
            }
          }
        },
        {
          "name": "fixedRateConfig",
          "type": {
            "option": {
              "defined": "FixedRateConfig"
            }
          }
        }
      ]
    },
    {
      "name": "cancelReward",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmManager",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "farmAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardPot",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpAuth",
          "type": "u8"
        },
        {
          "name": "bumpPot",
          "type": "u8"
        }
      ]
    },
    {
      "name": "lockReward",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmManager",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rewardMint",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "addRaritiesToBank",
      "accounts": [
        {
          "name": "farm",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmManager",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "farmAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gemBank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpAuth",
          "type": "u8"
        },
        {
          "name": "rarityConfigs",
          "type": {
            "vec": {
              "defined": "RarityConfig"
            }
          }
        }
      ]
    },
    {
      "name": "flashDepositPnft",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "identity",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "bank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gemBox",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gemDepositReceipt",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gemSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gemMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gemRarity",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gemBank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeAcc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gemMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gemEdition",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ownerTokenRecord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destTokenRecord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructions",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authorizationRulesProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpFarmer",
          "type": "u8"
        },
        {
          "name": "bumpVaultAuth",
          "type": "u8"
        },
        {
          "name": "bumpRarity",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "rulesAccPresent",
          "type": "bool"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "authorizationProof",
      "docs": [
        "if this PDA exists, this means the funder recorded below has been authorized by the",
        "farm recorded below to fund rewards"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authorizedFunder",
            "type": "publicKey"
          },
          {
            "name": "farm",
            "type": "publicKey"
          },
          {
            "name": "reserved",
            "docs": [
              "reserved for future updates, has to be /8"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "farmer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "farm",
            "type": "publicKey"
          },
          {
            "name": "identity",
            "docs": [
              "the identity of the farmer = their public key"
            ],
            "type": "publicKey"
          },
          {
            "name": "vault",
            "docs": [
              "vault storing all of the farmer's gems"
            ],
            "type": "publicKey"
          },
          {
            "name": "state",
            "type": {
              "defined": "FarmerState"
            }
          },
          {
            "name": "gemsStaked",
            "docs": [
              "total number of gems at the time when the vault is locked"
            ],
            "type": "u64"
          },
          {
            "name": "rarityPointsStaked",
            "docs": [
              "total number of gems * rarity of each gem (1 if un-appraised)"
            ],
            "type": "u64"
          },
          {
            "name": "minStakingEndsTs",
            "docs": [
              "this will be updated when they decide to unstake taking into acc. config set at farm level"
            ],
            "type": "u64"
          },
          {
            "name": "cooldownEndsTs",
            "docs": [
              "this will be updated when they decide to unstake taking into acc. config set at farm level"
            ],
            "type": "u64"
          },
          {
            "name": "rewardA",
            "type": {
              "defined": "FarmerReward"
            }
          },
          {
            "name": "rewardB",
            "type": {
              "defined": "FarmerReward"
            }
          },
          {
            "name": "reserved",
            "docs": [
              "reserved for future updates, has to be /8"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "farm",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u16"
          },
          {
            "name": "farmManager",
            "docs": [
              "authorizes funders, whitelists mints/creators, sets farm config params",
              "can update itself to another Pubkey"
            ],
            "type": "publicKey"
          },
          {
            "name": "farmTreasury",
            "docs": [
              "used for collecting any fees earned by the farm"
            ],
            "type": "publicKey"
          },
          {
            "name": "farmAuthority",
            "docs": [
              "signs off on treasury payouts and on any operations related to the bank",
              "(configured as bank manager)"
            ],
            "type": "publicKey"
          },
          {
            "name": "farmAuthoritySeed",
            "type": "publicKey"
          },
          {
            "name": "farmAuthorityBumpSeed",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "bank",
            "docs": [
              "each farm controls a single bank. each farmer gets a vault in that bank"
            ],
            "type": "publicKey"
          },
          {
            "name": "config",
            "type": {
              "defined": "FarmConfig"
            }
          },
          {
            "name": "farmerCount",
            "docs": [
              "total count, including initialized but inactive farmers"
            ],
            "type": "u64"
          },
          {
            "name": "stakedFarmerCount",
            "docs": [
              "currently staked farmer count"
            ],
            "type": "u64"
          },
          {
            "name": "gemsStaked",
            "docs": [
              "currently staked gem count"
            ],
            "type": "u64"
          },
          {
            "name": "rarityPointsStaked",
            "docs": [
              "currently staked gem count, where each gem is multiplied by its rarity score (1 if absent)"
            ],
            "type": "u64"
          },
          {
            "name": "authorizedFunderCount",
            "docs": [
              "how many accounts can create funding schedules"
            ],
            "type": "u64"
          },
          {
            "name": "rewardA",
            "type": {
              "defined": "FarmReward"
            }
          },
          {
            "name": "rewardB",
            "type": {
              "defined": "FarmReward"
            }
          },
          {
            "name": "maxCounts",
            "type": {
              "defined": "MaxCounts"
            }
          },
          {
            "name": "reserved",
            "docs": [
              "reserved for future updates, has to be /8"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "reserved2",
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          },
          {
            "name": "reserved3",
            "type": {
              "array": [
                "u8",
                4
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "RarityConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "rarityPoints",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "Number128",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "n",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "FarmerReward",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "paidOutReward",
            "docs": [
              "total, not per rarity point. Never goes down (ie is cumulative)"
            ],
            "type": "u64"
          },
          {
            "name": "accruedReward",
            "docs": [
              "total, not per rarity point. Never goes down (ie is cumulative)"
            ],
            "type": "u64"
          },
          {
            "name": "variableRate",
            "docs": [
              "only one of these two (fixed and variable) will actually be used, per reward"
            ],
            "type": {
              "defined": "FarmerVariableRateReward"
            }
          },
          {
            "name": "fixedRate",
            "type": {
              "defined": "FarmerFixedRateReward"
            }
          },
          {
            "name": "reserved",
            "docs": [
              "reserved for future updates, has to be /8"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "FarmerVariableRateReward",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lastRecordedAccruedRewardPerRarityPoint",
            "docs": [
              "used to keep track of how much of the variable reward has been updated for this farmer",
              "(read more in variable rate config)"
            ],
            "type": {
              "defined": "Number128"
            }
          },
          {
            "name": "reserved",
            "docs": [
              "reserved for future updates, has to be /8"
            ],
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "FarmerFixedRateReward",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "beginStakingTs",
            "docs": [
              "this is the time the farmer staked",
              "can be WAY BACK in the past, if we've rolled them multiple times"
            ],
            "type": "u64"
          },
          {
            "name": "beginScheduleTs",
            "docs": [
              "this is the time the latest reward schedule they subscribed to begins",
              "(this + promised duration = end_schedule_ts)"
            ],
            "type": "u64"
          },
          {
            "name": "lastUpdatedTs",
            "docs": [
              "always set to upper bound, not just now_ts (except funding)"
            ],
            "type": "u64"
          },
          {
            "name": "promisedSchedule",
            "docs": [
              "when a farmer stakes with the fixed schedule, at the time of staking,",
              "we promise them a schedule for a certain duration (eg 1 token/rarity point/s for 100s)",
              "that then \"reserves\" a certain amount of funds so that they can't be promised to other farmers",
              "only if the farmer unstakes, will the reserve be void, and the funds become available again",
              "for either funding other farmers or withdrawing (when the reward is cancelled)"
            ],
            "type": {
              "defined": "FixedRateSchedule"
            }
          },
          {
            "name": "promisedDuration",
            "type": "u64"
          },
          {
            "name": "reserved",
            "docs": [
              "reserved for future updates, has to be /8"
            ],
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "FarmConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "minStakingPeriodSec",
            "type": "u64"
          },
          {
            "name": "cooldownPeriodSec",
            "type": "u64"
          },
          {
            "name": "unstakingFeeLamp",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "MaxCounts",
      "docs": [
        "refers to staked counts"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maxFarmers",
            "type": "u32"
          },
          {
            "name": "maxGems",
            "type": "u32"
          },
          {
            "name": "maxRarityPoints",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "FundsTracker",
      "docs": [
        "these numbers should only ever go up - ie they are cummulative"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalFunded",
            "type": "u64"
          },
          {
            "name": "totalRefunded",
            "type": "u64"
          },
          {
            "name": "totalAccruedToStakers",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "TimeTracker",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "durationSec",
            "docs": [
              "total duration for which the reward has been funded",
              "updated with each new funding round"
            ],
            "type": "u64"
          },
          {
            "name": "rewardEndTs",
            "type": "u64"
          },
          {
            "name": "lockEndTs",
            "docs": [
              "this will be set = to reward_end_ts if farm manager decides to lock up their reward",
              "gives stakers the certainty it won't be withdrawn"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "FarmReward",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rewardMint",
            "docs": [
              "in v0 the next 3 fields (mint, pot type) are set ONLY once, at farm init",
              "and can't ever be changed for security reasons",
              "potentially in v1++ might find a way around it, but for now just use a new farm"
            ],
            "type": "publicKey"
          },
          {
            "name": "rewardPot",
            "docs": [
              "where the reward is stored"
            ],
            "type": "publicKey"
          },
          {
            "name": "rewardType",
            "type": {
              "defined": "RewardType"
            }
          },
          {
            "name": "fixedRate",
            "docs": [
              "only one of these two (fixed and variable) will actually be used, per reward"
            ],
            "type": {
              "defined": "FixedRateReward"
            }
          },
          {
            "name": "variableRate",
            "type": {
              "defined": "VariableRateReward"
            }
          },
          {
            "name": "funds",
            "type": {
              "defined": "FundsTracker"
            }
          },
          {
            "name": "times",
            "type": {
              "defined": "TimeTracker"
            }
          },
          {
            "name": "reserved",
            "docs": [
              "reserved for future updates, has to be /8"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "TierConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rewardRate",
            "docs": [
              "tokens/denominator/rarity point / sec"
            ],
            "type": "u64"
          },
          {
            "name": "requiredTenure",
            "docs": [
              "min amount of time that needs to pass for the above rate to come into effect"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "FixedRateSchedule",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "baseRate",
            "docs": [
              "tokens/denominator / sec"
            ],
            "type": "u64"
          },
          {
            "name": "tier1",
            "type": {
              "option": {
                "defined": "TierConfig"
              }
            }
          },
          {
            "name": "tier2",
            "type": {
              "option": {
                "defined": "TierConfig"
              }
            }
          },
          {
            "name": "tier3",
            "type": {
              "option": {
                "defined": "TierConfig"
              }
            }
          },
          {
            "name": "denominator",
            "docs": [
              "needed to slow down the payout schedule (else min would be 1 token/rarity point/s or 86k/rarity point/day",
              "only used in fixed rate - in variable overall duration serves as sufficient speed regulator"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "FixedRateConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "schedule",
            "type": {
              "defined": "FixedRateSchedule"
            }
          },
          {
            "name": "amount",
            "docs": [
              "total amount that is being sent with the ix - will be added ON TOP of existing available funding"
            ],
            "type": "u64"
          },
          {
            "name": "durationSec",
            "docs": [
              "duration the funding is being committed for",
              "eg if commit funding for 100s and a farmer shows up 3s in, they will be promised 97s at above schedule",
              "set this carefully!",
              "every farmer enrolled will be \"reserved\" an amount to cover the schedule for this duration"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "FixedRateReward",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "schedule",
            "docs": [
              "configured on funding"
            ],
            "type": {
              "defined": "FixedRateSchedule"
            }
          },
          {
            "name": "reservedAmount",
            "docs": [
              "amount that has been promised to existing stakers and hence can't be withdrawn"
            ],
            "type": "u64"
          },
          {
            "name": "reserved",
            "docs": [
              "reserved for future updates, has to be /8"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "VariableRateConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "docs": [
              "total amount of reward"
            ],
            "type": "u64"
          },
          {
            "name": "durationSec",
            "docs": [
              "over which period it's active"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "VariableRateReward",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rewardRate",
            "docs": [
              "in tokens/s, = calculated as total reward pot at initialization / reward duration"
            ],
            "type": {
              "defined": "Number128"
            }
          },
          {
            "name": "rewardLastUpdatedTs",
            "docs": [
              "set to upper bound, not just now_ts (except funding, when there is no upper bound)"
            ],
            "type": "u64"
          },
          {
            "name": "accruedRewardPerRarityPoint",
            "docs": [
              "this is somewhat redundant with total_accrued_to_stakers in funds, but necessary",
              "think of it as a \"flag in the ground\" that gets moved forward as more rewards accrue to the pool",
              "when a farmer tries to figure out how much they're due from the pool, we:",
              "1) compare their latest record of flag position, with actual flag position",
              "2) multiply the difference by the amount they have staked",
              "3) update their record of flag position, so that next time we don't count this distance again"
            ],
            "type": {
              "defined": "Number128"
            }
          },
          {
            "name": "reserved",
            "docs": [
              "reserved for future updates, has to be /8"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "FarmerState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Unstaked"
          },
          {
            "name": "Staked"
          },
          {
            "name": "PendingCooldown"
          }
        ]
      }
    },
    {
      "name": "RewardType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Variable"
          },
          {
            "name": "Fixed"
          }
        ]
      }
    },
    {
      "name": "FixedRateRewardTier",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Base"
          },
          {
            "name": "Tier1"
          },
          {
            "name": "Tier2"
          },
          {
            "name": "Tier3"
          }
        ]
      }
    }
  ]
};

export const IDL: GemFarm = {
  "version": "0.1.0",
  "name": "gem_farm",
  "instructions": [
    {
      "name": "initFarm",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "farmManager",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "farmAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardAPot",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardAMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardBPot",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardBMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bank",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "gemBank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "feeAcc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpAuth",
          "type": "u8"
        },
        {
          "name": "bumpTreasury",
          "type": "u8"
        },
        {
          "name": "rewardTypeA",
          "type": {
            "defined": "RewardType"
          }
        },
        {
          "name": "rewardTypeB",
          "type": {
            "defined": "RewardType"
          }
        },
        {
          "name": "farmConfig",
          "type": {
            "defined": "FarmConfig"
          }
        },
        {
          "name": "maxCounts",
          "type": {
            "option": {
              "defined": "MaxCounts"
            }
          }
        },
        {
          "name": "farmTreasury",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "updateFarm",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmManager",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "config",
          "type": {
            "option": {
              "defined": "FarmConfig"
            }
          }
        },
        {
          "name": "manager",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "maxCounts",
          "type": {
            "option": {
              "defined": "MaxCounts"
            }
          }
        }
      ]
    },
    {
      "name": "payoutFromTreasury",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmManager",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "farmAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpAuth",
          "type": "u8"
        },
        {
          "name": "bumpTreasury",
          "type": "u8"
        },
        {
          "name": "lamports",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addToBankWhitelist",
      "accounts": [
        {
          "name": "farm",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmManager",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "farmAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "addressToWhitelist",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "whitelistProof",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gemBank",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpAuth",
          "type": "u8"
        },
        {
          "name": "whitelistType",
          "type": "u8"
        }
      ]
    },
    {
      "name": "removeFromBankWhitelist",
      "accounts": [
        {
          "name": "farm",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmManager",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "farmAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "addressToRemove",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "whitelistProof",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gemBank",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpAuth",
          "type": "u8"
        },
        {
          "name": "bumpWl",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initFarmer",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "identity",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "bank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gemBank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "feeAcc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "stake",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "identity",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "bank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gemBank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeAcc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpAuth",
          "type": "u8"
        },
        {
          "name": "bumpFarmer",
          "type": "u8"
        }
      ]
    },
    {
      "name": "unstake",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "identity",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "bank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gemBank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeAcc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpAuth",
          "type": "u8"
        },
        {
          "name": "bumpTreasury",
          "type": "u8"
        },
        {
          "name": "bumpFarmer",
          "type": "u8"
        },
        {
          "name": "skipRewards",
          "type": "bool"
        }
      ]
    },
    {
      "name": "claim",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "identity",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rewardAPot",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardAMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardADestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardBPot",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardBMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardBDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpAuth",
          "type": "u8"
        },
        {
          "name": "bumpFarmer",
          "type": "u8"
        },
        {
          "name": "bumpPotA",
          "type": "u8"
        },
        {
          "name": "bumpPotB",
          "type": "u8"
        }
      ]
    },
    {
      "name": "flashDeposit",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "identity",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "bank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gemBox",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gemDepositReceipt",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gemSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gemMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gemRarity",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gemBank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeAcc",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpFarmer",
          "type": "u8"
        },
        {
          "name": "bumpVaultAuth",
          "type": "u8"
        },
        {
          "name": "bumpRarity",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "refreshFarmer",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "identity",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "refreshFarmerSigned",
      "docs": [
        "this one needs to be called by the farmer themselves",
        "it's useful if for some reason they can't re-enroll in another fixed reward cycle (eg reward exhausted)",
        "but they want to be able to refresh themselves and claim their earned rewards up to this point"
      ],
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "identity",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "reenroll",
          "type": "bool"
        }
      ]
    },
    {
      "name": "authorizeFunder",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmManager",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "funderToAuthorize",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authorizationProof",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "deauthorizeFunder",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmManager",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "funderToDeauthorize",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authorizationProof",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "fundReward",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authorizationProof",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authorizedFunder",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rewardPot",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpProof",
          "type": "u8"
        },
        {
          "name": "bumpPot",
          "type": "u8"
        },
        {
          "name": "variableRateConfig",
          "type": {
            "option": {
              "defined": "VariableRateConfig"
            }
          }
        },
        {
          "name": "fixedRateConfig",
          "type": {
            "option": {
              "defined": "FixedRateConfig"
            }
          }
        }
      ]
    },
    {
      "name": "cancelReward",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmManager",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "farmAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardPot",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpAuth",
          "type": "u8"
        },
        {
          "name": "bumpPot",
          "type": "u8"
        }
      ]
    },
    {
      "name": "lockReward",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmManager",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rewardMint",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "addRaritiesToBank",
      "accounts": [
        {
          "name": "farm",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmManager",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "farmAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gemBank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpAuth",
          "type": "u8"
        },
        {
          "name": "rarityConfigs",
          "type": {
            "vec": {
              "defined": "RarityConfig"
            }
          }
        }
      ]
    },
    {
      "name": "flashDepositPnft",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "identity",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "bank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gemBox",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gemDepositReceipt",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gemSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gemMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gemRarity",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gemBank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeAcc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gemMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gemEdition",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ownerTokenRecord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destTokenRecord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructions",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authorizationRulesProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpFarmer",
          "type": "u8"
        },
        {
          "name": "bumpVaultAuth",
          "type": "u8"
        },
        {
          "name": "bumpRarity",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "rulesAccPresent",
          "type": "bool"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "authorizationProof",
      "docs": [
        "if this PDA exists, this means the funder recorded below has been authorized by the",
        "farm recorded below to fund rewards"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authorizedFunder",
            "type": "publicKey"
          },
          {
            "name": "farm",
            "type": "publicKey"
          },
          {
            "name": "reserved",
            "docs": [
              "reserved for future updates, has to be /8"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "farmer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "farm",
            "type": "publicKey"
          },
          {
            "name": "identity",
            "docs": [
              "the identity of the farmer = their public key"
            ],
            "type": "publicKey"
          },
          {
            "name": "vault",
            "docs": [
              "vault storing all of the farmer's gems"
            ],
            "type": "publicKey"
          },
          {
            "name": "state",
            "type": {
              "defined": "FarmerState"
            }
          },
          {
            "name": "gemsStaked",
            "docs": [
              "total number of gems at the time when the vault is locked"
            ],
            "type": "u64"
          },
          {
            "name": "rarityPointsStaked",
            "docs": [
              "total number of gems * rarity of each gem (1 if un-appraised)"
            ],
            "type": "u64"
          },
          {
            "name": "minStakingEndsTs",
            "docs": [
              "this will be updated when they decide to unstake taking into acc. config set at farm level"
            ],
            "type": "u64"
          },
          {
            "name": "cooldownEndsTs",
            "docs": [
              "this will be updated when they decide to unstake taking into acc. config set at farm level"
            ],
            "type": "u64"
          },
          {
            "name": "rewardA",
            "type": {
              "defined": "FarmerReward"
            }
          },
          {
            "name": "rewardB",
            "type": {
              "defined": "FarmerReward"
            }
          },
          {
            "name": "reserved",
            "docs": [
              "reserved for future updates, has to be /8"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "farm",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u16"
          },
          {
            "name": "farmManager",
            "docs": [
              "authorizes funders, whitelists mints/creators, sets farm config params",
              "can update itself to another Pubkey"
            ],
            "type": "publicKey"
          },
          {
            "name": "farmTreasury",
            "docs": [
              "used for collecting any fees earned by the farm"
            ],
            "type": "publicKey"
          },
          {
            "name": "farmAuthority",
            "docs": [
              "signs off on treasury payouts and on any operations related to the bank",
              "(configured as bank manager)"
            ],
            "type": "publicKey"
          },
          {
            "name": "farmAuthoritySeed",
            "type": "publicKey"
          },
          {
            "name": "farmAuthorityBumpSeed",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "bank",
            "docs": [
              "each farm controls a single bank. each farmer gets a vault in that bank"
            ],
            "type": "publicKey"
          },
          {
            "name": "config",
            "type": {
              "defined": "FarmConfig"
            }
          },
          {
            "name": "farmerCount",
            "docs": [
              "total count, including initialized but inactive farmers"
            ],
            "type": "u64"
          },
          {
            "name": "stakedFarmerCount",
            "docs": [
              "currently staked farmer count"
            ],
            "type": "u64"
          },
          {
            "name": "gemsStaked",
            "docs": [
              "currently staked gem count"
            ],
            "type": "u64"
          },
          {
            "name": "rarityPointsStaked",
            "docs": [
              "currently staked gem count, where each gem is multiplied by its rarity score (1 if absent)"
            ],
            "type": "u64"
          },
          {
            "name": "authorizedFunderCount",
            "docs": [
              "how many accounts can create funding schedules"
            ],
            "type": "u64"
          },
          {
            "name": "rewardA",
            "type": {
              "defined": "FarmReward"
            }
          },
          {
            "name": "rewardB",
            "type": {
              "defined": "FarmReward"
            }
          },
          {
            "name": "maxCounts",
            "type": {
              "defined": "MaxCounts"
            }
          },
          {
            "name": "reserved",
            "docs": [
              "reserved for future updates, has to be /8"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "reserved2",
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          },
          {
            "name": "reserved3",
            "type": {
              "array": [
                "u8",
                4
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "RarityConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "rarityPoints",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "Number128",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "n",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "FarmerReward",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "paidOutReward",
            "docs": [
              "total, not per rarity point. Never goes down (ie is cumulative)"
            ],
            "type": "u64"
          },
          {
            "name": "accruedReward",
            "docs": [
              "total, not per rarity point. Never goes down (ie is cumulative)"
            ],
            "type": "u64"
          },
          {
            "name": "variableRate",
            "docs": [
              "only one of these two (fixed and variable) will actually be used, per reward"
            ],
            "type": {
              "defined": "FarmerVariableRateReward"
            }
          },
          {
            "name": "fixedRate",
            "type": {
              "defined": "FarmerFixedRateReward"
            }
          },
          {
            "name": "reserved",
            "docs": [
              "reserved for future updates, has to be /8"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "FarmerVariableRateReward",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lastRecordedAccruedRewardPerRarityPoint",
            "docs": [
              "used to keep track of how much of the variable reward has been updated for this farmer",
              "(read more in variable rate config)"
            ],
            "type": {
              "defined": "Number128"
            }
          },
          {
            "name": "reserved",
            "docs": [
              "reserved for future updates, has to be /8"
            ],
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "FarmerFixedRateReward",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "beginStakingTs",
            "docs": [
              "this is the time the farmer staked",
              "can be WAY BACK in the past, if we've rolled them multiple times"
            ],
            "type": "u64"
          },
          {
            "name": "beginScheduleTs",
            "docs": [
              "this is the time the latest reward schedule they subscribed to begins",
              "(this + promised duration = end_schedule_ts)"
            ],
            "type": "u64"
          },
          {
            "name": "lastUpdatedTs",
            "docs": [
              "always set to upper bound, not just now_ts (except funding)"
            ],
            "type": "u64"
          },
          {
            "name": "promisedSchedule",
            "docs": [
              "when a farmer stakes with the fixed schedule, at the time of staking,",
              "we promise them a schedule for a certain duration (eg 1 token/rarity point/s for 100s)",
              "that then \"reserves\" a certain amount of funds so that they can't be promised to other farmers",
              "only if the farmer unstakes, will the reserve be void, and the funds become available again",
              "for either funding other farmers or withdrawing (when the reward is cancelled)"
            ],
            "type": {
              "defined": "FixedRateSchedule"
            }
          },
          {
            "name": "promisedDuration",
            "type": "u64"
          },
          {
            "name": "reserved",
            "docs": [
              "reserved for future updates, has to be /8"
            ],
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "FarmConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "minStakingPeriodSec",
            "type": "u64"
          },
          {
            "name": "cooldownPeriodSec",
            "type": "u64"
          },
          {
            "name": "unstakingFeeLamp",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "MaxCounts",
      "docs": [
        "refers to staked counts"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maxFarmers",
            "type": "u32"
          },
          {
            "name": "maxGems",
            "type": "u32"
          },
          {
            "name": "maxRarityPoints",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "FundsTracker",
      "docs": [
        "these numbers should only ever go up - ie they are cummulative"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalFunded",
            "type": "u64"
          },
          {
            "name": "totalRefunded",
            "type": "u64"
          },
          {
            "name": "totalAccruedToStakers",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "TimeTracker",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "durationSec",
            "docs": [
              "total duration for which the reward has been funded",
              "updated with each new funding round"
            ],
            "type": "u64"
          },
          {
            "name": "rewardEndTs",
            "type": "u64"
          },
          {
            "name": "lockEndTs",
            "docs": [
              "this will be set = to reward_end_ts if farm manager decides to lock up their reward",
              "gives stakers the certainty it won't be withdrawn"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "FarmReward",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rewardMint",
            "docs": [
              "in v0 the next 3 fields (mint, pot type) are set ONLY once, at farm init",
              "and can't ever be changed for security reasons",
              "potentially in v1++ might find a way around it, but for now just use a new farm"
            ],
            "type": "publicKey"
          },
          {
            "name": "rewardPot",
            "docs": [
              "where the reward is stored"
            ],
            "type": "publicKey"
          },
          {
            "name": "rewardType",
            "type": {
              "defined": "RewardType"
            }
          },
          {
            "name": "fixedRate",
            "docs": [
              "only one of these two (fixed and variable) will actually be used, per reward"
            ],
            "type": {
              "defined": "FixedRateReward"
            }
          },
          {
            "name": "variableRate",
            "type": {
              "defined": "VariableRateReward"
            }
          },
          {
            "name": "funds",
            "type": {
              "defined": "FundsTracker"
            }
          },
          {
            "name": "times",
            "type": {
              "defined": "TimeTracker"
            }
          },
          {
            "name": "reserved",
            "docs": [
              "reserved for future updates, has to be /8"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "TierConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rewardRate",
            "docs": [
              "tokens/denominator/rarity point / sec"
            ],
            "type": "u64"
          },
          {
            "name": "requiredTenure",
            "docs": [
              "min amount of time that needs to pass for the above rate to come into effect"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "FixedRateSchedule",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "baseRate",
            "docs": [
              "tokens/denominator / sec"
            ],
            "type": "u64"
          },
          {
            "name": "tier1",
            "type": {
              "option": {
                "defined": "TierConfig"
              }
            }
          },
          {
            "name": "tier2",
            "type": {
              "option": {
                "defined": "TierConfig"
              }
            }
          },
          {
            "name": "tier3",
            "type": {
              "option": {
                "defined": "TierConfig"
              }
            }
          },
          {
            "name": "denominator",
            "docs": [
              "needed to slow down the payout schedule (else min would be 1 token/rarity point/s or 86k/rarity point/day",
              "only used in fixed rate - in variable overall duration serves as sufficient speed regulator"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "FixedRateConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "schedule",
            "type": {
              "defined": "FixedRateSchedule"
            }
          },
          {
            "name": "amount",
            "docs": [
              "total amount that is being sent with the ix - will be added ON TOP of existing available funding"
            ],
            "type": "u64"
          },
          {
            "name": "durationSec",
            "docs": [
              "duration the funding is being committed for",
              "eg if commit funding for 100s and a farmer shows up 3s in, they will be promised 97s at above schedule",
              "set this carefully!",
              "every farmer enrolled will be \"reserved\" an amount to cover the schedule for this duration"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "FixedRateReward",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "schedule",
            "docs": [
              "configured on funding"
            ],
            "type": {
              "defined": "FixedRateSchedule"
            }
          },
          {
            "name": "reservedAmount",
            "docs": [
              "amount that has been promised to existing stakers and hence can't be withdrawn"
            ],
            "type": "u64"
          },
          {
            "name": "reserved",
            "docs": [
              "reserved for future updates, has to be /8"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "VariableRateConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "docs": [
              "total amount of reward"
            ],
            "type": "u64"
          },
          {
            "name": "durationSec",
            "docs": [
              "over which period it's active"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "VariableRateReward",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rewardRate",
            "docs": [
              "in tokens/s, = calculated as total reward pot at initialization / reward duration"
            ],
            "type": {
              "defined": "Number128"
            }
          },
          {
            "name": "rewardLastUpdatedTs",
            "docs": [
              "set to upper bound, not just now_ts (except funding, when there is no upper bound)"
            ],
            "type": "u64"
          },
          {
            "name": "accruedRewardPerRarityPoint",
            "docs": [
              "this is somewhat redundant with total_accrued_to_stakers in funds, but necessary",
              "think of it as a \"flag in the ground\" that gets moved forward as more rewards accrue to the pool",
              "when a farmer tries to figure out how much they're due from the pool, we:",
              "1) compare their latest record of flag position, with actual flag position",
              "2) multiply the difference by the amount they have staked",
              "3) update their record of flag position, so that next time we don't count this distance again"
            ],
            "type": {
              "defined": "Number128"
            }
          },
          {
            "name": "reserved",
            "docs": [
              "reserved for future updates, has to be /8"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "FarmerState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Unstaked"
          },
          {
            "name": "Staked"
          },
          {
            "name": "PendingCooldown"
          }
        ]
      }
    },
    {
      "name": "RewardType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Variable"
          },
          {
            "name": "Fixed"
          }
        ]
      }
    },
    {
      "name": "FixedRateRewardTier",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Base"
          },
          {
            "name": "Tier1"
          },
          {
            "name": "Tier2"
          },
          {
            "name": "Tier3"
          }
        ]
      }
    }
  ]
};
