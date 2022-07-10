# Run React frontend

> cd frontend (Navigate to the folder)
> npm i (install node dependencies)
> npm start (run)

# Run NodeJs backend

> cd backend (Navigate to the folder)
> npm i (install node dependencies)
> npm run dev (run)

# Enter Solidity code input

> Sample Input

`
import "VarysContractBase.sol";
import "VarysContractExtras.sol";

contract VarysContract {
mapping (uint => address) public addresses;
}
`

# Click 'Analyze Code' button to see the results below

> Sample Result 

`
{
  "imports": [
    "VarysContractBase.sol",
    "VarysContractExtras.sol"
  ],
  "contracts": [
    "VarysContract"
  ]
}
`