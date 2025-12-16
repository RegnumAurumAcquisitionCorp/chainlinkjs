const FulfillmentCode = {
    FULFILLED: 0,
    USER_CALLBACK_ERROR: 1,
    INVALID_REQUEST_ID: 2,
    COST_EXCEEDS_COMMITMENT: 3,
    INSUFFICIENT_GAS_PROVIDED: 4,
    SUBSCRIPTION_BALANCE_INVARIANT_VIOLATION: 5,
    INVALID_COMMITMENT: 6
}

const ReturnType = {
    uint: 'uint256',
    uint256: 'uint256',
    int: 'int256',
    int256: 'int256',
    string: 'string',
    bytes: 'bytes',
  }

const Location = {
  Inline: 0,
  Remote: 1,
  DONHosted: 2
};

const CodeLanguage = {
  JavaScript: 0,
};


export { FulfillmentCode, ReturnType, Location, CodeLanguage };