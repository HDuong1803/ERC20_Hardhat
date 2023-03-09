/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Floppy, FloppyInterface } from "../../contracts/Floppy";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526012600a62000014919062000758565b640ba43b7400620000269190620007a9565b6006553480156200003657600080fd5b506040518060400160405280600681526020017f466c6f70707900000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f464c5000000000000000000000000000000000000000000000000000000000008152508160039081620000b4919062000a64565b508060049081620000c6919062000a64565b505050620000e9620000dd6200016360201b60201c565b6200016b60201b60201c565b620001386040518060400160405280601481526020017f6f776e65723a202573202c206361703a20257320000000000000000000000000815250336006546200023160201b620007fb1760201c565b6200014c33600654620002da60201b60201c565b6200015d336200044760201b60201c565b62000e48565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b620002d58383836040516024016200024c9392919062000c30565b6040516020818303038152906040527f0d26b925000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620004dd60201b60201c565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036200034c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003439062000cc4565b60405180910390fd5b62000360600083836200050660201b60201c565b806002600082825462000374919062000ce6565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000427919062000d21565b60405180910390a362000443600083836200050b60201b60201c565b5050565b620004576200051060201b60201c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620004c9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004c09062000db4565b60405180910390fd5b620004da816200016b60201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b505050565b505050565b620005206200016360201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1662000546620005a160201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16146200059f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620005969062000e26565b60405180910390fd5b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b60018511156200065957808604811115620006315762000630620005cb565b5b6001851615620006415780820291505b80810290506200065185620005fa565b945062000611565b94509492505050565b60008262000674576001905062000747565b8162000684576000905062000747565b81600181146200069d5760028114620006a857620006de565b600191505062000747565b60ff841115620006bd57620006bc620005cb565b5b8360020a915084821115620006d757620006d6620005cb565b5b5062000747565b5060208310610133831016604e8410600b8410161715620007185782820a905083811115620007125762000711620005cb565b5b62000747565b62000727848484600162000607565b92509050818404811115620007415762000740620005cb565b5b81810290505b9392505050565b6000819050919050565b600062000765826200074e565b915062000772836200074e565b9250620007a17fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848462000662565b905092915050565b6000620007b6826200074e565b9150620007c3836200074e565b9250828202620007d3816200074e565b91508282048414831517620007ed57620007ec620005cb565b5b5092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200087657607f821691505b6020821081036200088c576200088b6200082e565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620008f67fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620008b7565b620009028683620008b7565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620009456200093f62000939846200074e565b6200091a565b6200074e565b9050919050565b6000819050919050565b620009618362000924565b6200097962000970826200094c565b848454620008c4565b825550505050565b600090565b6200099062000981565b6200099d81848462000956565b505050565b5b81811015620009c557620009b960008262000986565b600181019050620009a3565b5050565b601f82111562000a1457620009de8162000892565b620009e984620008a7565b81016020851015620009f9578190505b62000a1162000a0885620008a7565b830182620009a2565b50505b505050565b600082821c905092915050565b600062000a396000198460080262000a19565b1980831691505092915050565b600062000a54838362000a26565b9150826002028217905092915050565b62000a6f82620007f4565b67ffffffffffffffff81111562000a8b5762000a8a620007ff565b5b62000a9782546200085d565b62000aa4828285620009c9565b600060209050601f83116001811462000adc576000841562000ac7578287015190505b62000ad3858262000a46565b86555062000b43565b601f19841662000aec8662000892565b60005b8281101562000b165784890151825560018201915060208501945060208101905062000aef565b8683101562000b36578489015162000b32601f89168262000a26565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b60005b8381101562000b7c57808201518184015260208101905062000b5f565b60008484015250505050565b6000601f19601f8301169050919050565b600062000ba682620007f4565b62000bb2818562000b4b565b935062000bc481856020860162000b5c565b62000bcf8162000b88565b840191505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000c078262000bda565b9050919050565b62000c198162000bfa565b82525050565b62000c2a816200074e565b82525050565b6000606082019050818103600083015262000c4c818662000b99565b905062000c5d602083018562000c0e565b62000c6c604083018462000c1f565b949350505050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600062000cac601f8362000b4b565b915062000cb98262000c74565b602082019050919050565b6000602082019050818103600083015262000cdf8162000c9d565b9050919050565b600062000cf3826200074e565b915062000d00836200074e565b925082820190508082111562000d1b5762000d1a620005cb565b5b92915050565b600060208201905062000d38600083018462000c1f565b92915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600062000d9c60268362000b4b565b915062000da98262000d3e565b604082019050919050565b6000602082019050818103600083015262000dcf8162000d8d565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600062000e0e60208362000b4b565b915062000e1b8262000dd6565b602082019050919050565b6000602082019050818103600083015262000e418162000dff565b9050919050565b611d498062000e586000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a257806395d89b411161007157806395d89b41146102a6578063a457c2d7146102c4578063a9059cbb146102f4578063dd62ed3e14610324578063f2fde38b146103545761010b565b806370a0823114610232578063715018a61461026257806379cc67901461026c5780638da5cb5b146102885761010b565b8063313ce567116100de578063313ce567146101ac57806339509351146101ca57806340c10f19146101fa57806342966c68146102165761010b565b806306fdde0314610110578063095ea7b31461012e57806318160ddd1461015e57806323b872dd1461017c575b600080fd5b610118610370565b6040516101259190611297565b60405180910390f35b61014860048036038101906101439190611352565b610402565b60405161015591906113ad565b60405180910390f35b610166610425565b60405161017391906113d7565b60405180910390f35b610196600480360381019061019191906113f2565b61042f565b6040516101a391906113ad565b60405180910390f35b6101b461045e565b6040516101c19190611461565b60405180910390f35b6101e460048036038101906101df9190611352565b610467565b6040516101f191906113ad565b60405180910390f35b610214600480360381019061020f9190611352565b61049e565b005b610230600480360381019061022b919061147c565b61050b565b005b61024c600480360381019061024791906114a9565b61051f565b60405161025991906113d7565b60405180910390f35b61026a610567565b005b61028660048036038101906102819190611352565b61057b565b005b61029061059b565b60405161029d91906114e5565b60405180910390f35b6102ae6105c5565b6040516102bb9190611297565b60405180910390f35b6102de60048036038101906102d99190611352565b610657565b6040516102eb91906113ad565b60405180910390f35b61030e60048036038101906103099190611352565b6106ce565b60405161031b91906113ad565b60405180910390f35b61033e60048036038101906103399190611500565b6106f1565b60405161034b91906113d7565b60405180910390f35b61036e600480360381019061036991906114a9565b610778565b005b60606003805461037f9061156f565b80601f01602080910402602001604051908101604052809291908181526020018280546103ab9061156f565b80156103f85780601f106103cd576101008083540402835291602001916103f8565b820191906000526020600020905b8154815290600101906020018083116103db57829003601f168201915b5050505050905090565b60008061040d61089a565b905061041a8185856108a2565b600191505092915050565b6000600254905090565b60008061043a61089a565b9050610447858285610a6b565b610452858585610af7565b60019150509392505050565b60006012905090565b60008061047261089a565b905061049381858561048485896106f1565b61048e91906115cf565b6108a2565b600191505092915050565b6104a6610d6d565b600654816104b2610425565b6104bc91906115cf565b11156104fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f49061164f565b60405180910390fd5b6105078282610deb565b5050565b61051c61051661089a565b82610f41565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61056f610d6d565b610579600061110e565b565b61058d8261058761089a565b83610a6b565b6105978282610f41565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546105d49061156f565b80601f01602080910402602001604051908101604052809291908181526020018280546106009061156f565b801561064d5780601f106106225761010080835404028352916020019161064d565b820191906000526020600020905b81548152906001019060200180831161063057829003601f168201915b5050505050905090565b60008061066261089a565b9050600061067082866106f1565b9050838110156106b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ac906116e1565b60405180910390fd5b6106c282868684036108a2565b60019250505092915050565b6000806106d961089a565b90506106e6818585610af7565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610780610d6d565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036107ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e690611773565b60405180910390fd5b6107f88161110e565b50565b61089583838360405160240161081393929190611793565b6040516020818303038152906040527f0d26b925000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506111d4565b505050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610911576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090890611843565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610980576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610977906118d5565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610a5e91906113d7565b60405180910390a3505050565b6000610a7784846106f1565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610af15781811015610ae3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ada90611941565b60405180910390fd5b610af084848484036108a2565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610b66576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5d906119d3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610bd5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bcc90611a65565b60405180910390fd5b610be08383836111fd565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610c66576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5d90611af7565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d5491906113d7565b60405180910390a3610d67848484611202565b50505050565b610d7561089a565b73ffffffffffffffffffffffffffffffffffffffff16610d9361059b565b73ffffffffffffffffffffffffffffffffffffffff1614610de9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de090611b63565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610e5a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e5190611bcf565b60405180910390fd5b610e66600083836111fd565b8060026000828254610e7891906115cf565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610f2991906113d7565b60405180910390a3610f3d60008383611202565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610fb0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa790611c61565b60405180910390fd5b610fbc826000836111fd565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611042576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161103990611cf3565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282540392505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516110f591906113d7565b60405180910390a361110983600084611202565b505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611241578082015181840152602081019050611226565b60008484015250505050565b6000601f19601f8301169050919050565b600061126982611207565b6112738185611212565b9350611283818560208601611223565b61128c8161124d565b840191505092915050565b600060208201905081810360008301526112b1818461125e565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006112e9826112be565b9050919050565b6112f9816112de565b811461130457600080fd5b50565b600081359050611316816112f0565b92915050565b6000819050919050565b61132f8161131c565b811461133a57600080fd5b50565b60008135905061134c81611326565b92915050565b60008060408385031215611369576113686112b9565b5b600061137785828601611307565b92505060206113888582860161133d565b9150509250929050565b60008115159050919050565b6113a781611392565b82525050565b60006020820190506113c2600083018461139e565b92915050565b6113d18161131c565b82525050565b60006020820190506113ec60008301846113c8565b92915050565b60008060006060848603121561140b5761140a6112b9565b5b600061141986828701611307565b935050602061142a86828701611307565b925050604061143b8682870161133d565b9150509250925092565b600060ff82169050919050565b61145b81611445565b82525050565b60006020820190506114766000830184611452565b92915050565b600060208284031215611492576114916112b9565b5b60006114a08482850161133d565b91505092915050565b6000602082840312156114bf576114be6112b9565b5b60006114cd84828501611307565b91505092915050565b6114df816112de565b82525050565b60006020820190506114fa60008301846114d6565b92915050565b60008060408385031215611517576115166112b9565b5b600061152585828601611307565b925050602061153685828601611307565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061158757607f821691505b60208210810361159a57611599611540565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006115da8261131c565b91506115e58361131c565b92508282019050808211156115fd576115fc6115a0565b5b92915050565b7f466c6f7070793a20636170206578636565646564000000000000000000000000600082015250565b6000611639601483611212565b915061164482611603565b602082019050919050565b600060208201905081810360008301526116688161162c565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b60006116cb602583611212565b91506116d68261166f565b604082019050919050565b600060208201905081810360008301526116fa816116be565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061175d602683611212565b915061176882611701565b604082019050919050565b6000602082019050818103600083015261178c81611750565b9050919050565b600060608201905081810360008301526117ad818661125e565b90506117bc60208301856114d6565b6117c960408301846113c8565b949350505050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061182d602483611212565b9150611838826117d1565b604082019050919050565b6000602082019050818103600083015261185c81611820565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006118bf602283611212565b91506118ca82611863565b604082019050919050565b600060208201905081810360008301526118ee816118b2565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061192b601d83611212565b9150611936826118f5565b602082019050919050565b6000602082019050818103600083015261195a8161191e565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006119bd602583611212565b91506119c882611961565b604082019050919050565b600060208201905081810360008301526119ec816119b0565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611a4f602383611212565b9150611a5a826119f3565b604082019050919050565b60006020820190508181036000830152611a7e81611a42565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611ae1602683611212565b9150611aec82611a85565b604082019050919050565b60006020820190508181036000830152611b1081611ad4565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611b4d602083611212565b9150611b5882611b17565b602082019050919050565b60006020820190508181036000830152611b7c81611b40565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611bb9601f83611212565b9150611bc482611b83565b602082019050919050565b60006020820190508181036000830152611be881611bac565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611c4b602183611212565b9150611c5682611bef565b604082019050919050565b60006020820190508181036000830152611c7a81611c3e565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000611cdd602283611212565b9150611ce882611c81565b604082019050919050565b60006020820190508181036000830152611d0c81611cd0565b905091905056fea26469706673582212203b9d2a3eca4adde3018a45890e754b68fa3427baf4584f00e1090fd801f8cc7964736f6c63430008110033";

type FloppyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FloppyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Floppy__factory extends ContractFactory {
  constructor(...args: FloppyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Floppy> {
    return super.deploy(overrides || {}) as Promise<Floppy>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Floppy {
    return super.attach(address) as Floppy;
  }
  override connect(signer: Signer): Floppy__factory {
    return super.connect(signer) as Floppy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FloppyInterface {
    return new utils.Interface(_abi) as FloppyInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Floppy {
    return new Contract(address, _abi, signerOrProvider) as Floppy;
  }
}
