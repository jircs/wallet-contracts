/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface SequenceUtilsInterface extends ethers.utils.Interface {
  functions: {
    "callBalanceOf(address)": FunctionFragment;
    "callBlockNumber()": FunctionFragment;
    "callBlockhash(uint256)": FunctionFragment;
    "callChainId()": FunctionFragment;
    "callCode(address)": FunctionFragment;
    "callCodeHash(address)": FunctionFragment;
    "callCodeSize(address)": FunctionFragment;
    "callCoinbase()": FunctionFragment;
    "callDifficulty()": FunctionFragment;
    "callGasLeft()": FunctionFragment;
    "callGasLimit()": FunctionFragment;
    "callGasPrice()": FunctionFragment;
    "callOrigin()": FunctionFragment;
    "callTimestamp()": FunctionFragment;
    "lastImageHashUpdate(bytes32)": FunctionFragment;
    "lastSignerUpdate(address)": FunctionFragment;
    "lastWalletUpdate(address)": FunctionFragment;
    "multiCall(tuple[])": FunctionFragment;
    "publishConfig(address,uint256,tuple[],bool)": FunctionFragment;
    "publishInitialSigners(address,bytes32,uint256,bytes,bool)": FunctionFragment;
    "requireMinNonce(address,uint256)": FunctionFragment;
    "requireNonExpired(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "callBalanceOf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "callBlockNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "callBlockhash",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "callChainId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "callCode", values: [string]): string;
  encodeFunctionData(
    functionFragment: "callCodeHash",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "callCodeSize",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "callCoinbase",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "callDifficulty",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "callGasLeft",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "callGasLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "callGasPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "callOrigin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "callTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastImageHashUpdate",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lastSignerUpdate",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lastWalletUpdate",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "multiCall",
    values: [
      {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "publishConfig",
    values: [
      string,
      BigNumberish,
      { weight: BigNumberish; signer: string }[],
      boolean
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "publishInitialSigners",
    values: [string, BytesLike, BigNumberish, BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "requireMinNonce",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requireNonExpired",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "callBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callBlockNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callBlockhash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "callCode", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "callCodeHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callCodeSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callCoinbase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callDifficulty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callGasLeft",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callGasLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callGasPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "callOrigin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "callTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastImageHashUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastSignerUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastWalletUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "multiCall", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "publishConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "publishInitialSigners",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requireMinNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requireNonExpired",
    data: BytesLike
  ): Result;

  events: {
    "RequiredConfig(address,bytes32,uint256,bytes)": EventFragment;
    "RequiredSigner(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RequiredConfig"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequiredSigner"): EventFragment;
}

export class SequenceUtils extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: SequenceUtilsInterface;

  functions: {
    callBalanceOf(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "callBalanceOf(address)"(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    callBlockNumber(overrides?: CallOverrides): Promise<[BigNumber]>;

    "callBlockNumber()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    callBlockhash(
      _i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "callBlockhash(uint256)"(
      _i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    callChainId(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { id: BigNumber }>;

    "callChainId()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { id: BigNumber }>;

    callCode(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<[string] & { code: string }>;

    "callCode(address)"(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<[string] & { code: string }>;

    callCodeHash(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<[string] & { codeHash: string }>;

    "callCodeHash(address)"(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<[string] & { codeHash: string }>;

    callCodeSize(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { size: BigNumber }>;

    "callCodeSize(address)"(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { size: BigNumber }>;

    callCoinbase(overrides?: CallOverrides): Promise<[string]>;

    "callCoinbase()"(overrides?: CallOverrides): Promise<[string]>;

    callDifficulty(overrides?: CallOverrides): Promise<[BigNumber]>;

    "callDifficulty()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    callGasLeft(overrides?: CallOverrides): Promise<[BigNumber]>;

    "callGasLeft()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    callGasLimit(overrides?: CallOverrides): Promise<[BigNumber]>;

    "callGasLimit()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    callGasPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    "callGasPrice()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    callOrigin(overrides?: CallOverrides): Promise<[string]>;

    "callOrigin()"(overrides?: CallOverrides): Promise<[string]>;

    callTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    "callTimestamp()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastImageHashUpdate(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "lastImageHashUpdate(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    lastSignerUpdate(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "lastSignerUpdate(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    lastWalletUpdate(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "lastWalletUpdate(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    multiCall(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "multiCall(tuple[])"(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    publishConfig(
      _wallet: string,
      _threshold: BigNumberish,
      _members: { weight: BigNumberish; signer: string }[],
      _index: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "publishConfig(address,uint256,tuple[],bool)"(
      _wallet: string,
      _threshold: BigNumberish,
      _members: { weight: BigNumberish; signer: string }[],
      _index: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    publishInitialSigners(
      _wallet: string,
      _hash: BytesLike,
      _sizeMembers: BigNumberish,
      _signature: BytesLike,
      _index: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "publishInitialSigners(address,bytes32,uint256,bytes,bool)"(
      _wallet: string,
      _hash: BytesLike,
      _sizeMembers: BigNumberish,
      _signature: BytesLike,
      _index: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    requireMinNonce(
      _wallet: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "requireMinNonce(address,uint256)"(
      _wallet: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    requireNonExpired(
      _expiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "requireNonExpired(uint256)"(
      _expiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  callBalanceOf(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;

  "callBalanceOf(address)"(
    _addr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

  "callBlockNumber()"(overrides?: CallOverrides): Promise<BigNumber>;

  callBlockhash(_i: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "callBlockhash(uint256)"(
    _i: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callChainId(overrides?: CallOverrides): Promise<BigNumber>;

  "callChainId()"(overrides?: CallOverrides): Promise<BigNumber>;

  callCode(_addr: string, overrides?: CallOverrides): Promise<string>;

  "callCode(address)"(
    _addr: string,
    overrides?: CallOverrides
  ): Promise<string>;

  callCodeHash(_addr: string, overrides?: CallOverrides): Promise<string>;

  "callCodeHash(address)"(
    _addr: string,
    overrides?: CallOverrides
  ): Promise<string>;

  callCodeSize(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;

  "callCodeSize(address)"(
    _addr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callCoinbase(overrides?: CallOverrides): Promise<string>;

  "callCoinbase()"(overrides?: CallOverrides): Promise<string>;

  callDifficulty(overrides?: CallOverrides): Promise<BigNumber>;

  "callDifficulty()"(overrides?: CallOverrides): Promise<BigNumber>;

  callGasLeft(overrides?: CallOverrides): Promise<BigNumber>;

  "callGasLeft()"(overrides?: CallOverrides): Promise<BigNumber>;

  callGasLimit(overrides?: CallOverrides): Promise<BigNumber>;

  "callGasLimit()"(overrides?: CallOverrides): Promise<BigNumber>;

  callGasPrice(overrides?: CallOverrides): Promise<BigNumber>;

  "callGasPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

  callOrigin(overrides?: CallOverrides): Promise<string>;

  "callOrigin()"(overrides?: CallOverrides): Promise<string>;

  callTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  "callTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

  lastImageHashUpdate(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "lastImageHashUpdate(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lastSignerUpdate(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "lastSignerUpdate(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lastWalletUpdate(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "lastWalletUpdate(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  multiCall(
    _txs: {
      delegateCall: boolean;
      revertOnError: boolean;
      gasLimit: BigNumberish;
      target: string;
      value: BigNumberish;
      data: BytesLike;
    }[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "multiCall(tuple[])"(
    _txs: {
      delegateCall: boolean;
      revertOnError: boolean;
      gasLimit: BigNumberish;
      target: string;
      value: BigNumberish;
      data: BytesLike;
    }[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  publishConfig(
    _wallet: string,
    _threshold: BigNumberish,
    _members: { weight: BigNumberish; signer: string }[],
    _index: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "publishConfig(address,uint256,tuple[],bool)"(
    _wallet: string,
    _threshold: BigNumberish,
    _members: { weight: BigNumberish; signer: string }[],
    _index: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  publishInitialSigners(
    _wallet: string,
    _hash: BytesLike,
    _sizeMembers: BigNumberish,
    _signature: BytesLike,
    _index: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "publishInitialSigners(address,bytes32,uint256,bytes,bool)"(
    _wallet: string,
    _hash: BytesLike,
    _sizeMembers: BigNumberish,
    _signature: BytesLike,
    _index: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  requireMinNonce(
    _wallet: string,
    _nonce: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  "requireMinNonce(address,uint256)"(
    _wallet: string,
    _nonce: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  requireNonExpired(
    _expiration: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  "requireNonExpired(uint256)"(
    _expiration: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    callBalanceOf(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "callBalanceOf(address)"(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    callBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    "callBlockNumber()"(overrides?: CallOverrides): Promise<BigNumber>;

    callBlockhash(_i: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "callBlockhash(uint256)"(
      _i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    callChainId(overrides?: CallOverrides): Promise<BigNumber>;

    "callChainId()"(overrides?: CallOverrides): Promise<BigNumber>;

    callCode(_addr: string, overrides?: CallOverrides): Promise<string>;

    "callCode(address)"(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<string>;

    callCodeHash(_addr: string, overrides?: CallOverrides): Promise<string>;

    "callCodeHash(address)"(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<string>;

    callCodeSize(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "callCodeSize(address)"(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    callCoinbase(overrides?: CallOverrides): Promise<string>;

    "callCoinbase()"(overrides?: CallOverrides): Promise<string>;

    callDifficulty(overrides?: CallOverrides): Promise<BigNumber>;

    "callDifficulty()"(overrides?: CallOverrides): Promise<BigNumber>;

    callGasLeft(overrides?: CallOverrides): Promise<BigNumber>;

    "callGasLeft()"(overrides?: CallOverrides): Promise<BigNumber>;

    callGasLimit(overrides?: CallOverrides): Promise<BigNumber>;

    "callGasLimit()"(overrides?: CallOverrides): Promise<BigNumber>;

    callGasPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "callGasPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    callOrigin(overrides?: CallOverrides): Promise<string>;

    "callOrigin()"(overrides?: CallOverrides): Promise<string>;

    callTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "callTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    lastImageHashUpdate(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "lastImageHashUpdate(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastSignerUpdate(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "lastSignerUpdate(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastWalletUpdate(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "lastWalletUpdate(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    multiCall(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: CallOverrides
    ): Promise<
      [boolean[], string[]] & { _successes: boolean[]; _results: string[] }
    >;

    "multiCall(tuple[])"(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: CallOverrides
    ): Promise<
      [boolean[], string[]] & { _successes: boolean[]; _results: string[] }
    >;

    publishConfig(
      _wallet: string,
      _threshold: BigNumberish,
      _members: { weight: BigNumberish; signer: string }[],
      _index: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "publishConfig(address,uint256,tuple[],bool)"(
      _wallet: string,
      _threshold: BigNumberish,
      _members: { weight: BigNumberish; signer: string }[],
      _index: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    publishInitialSigners(
      _wallet: string,
      _hash: BytesLike,
      _sizeMembers: BigNumberish,
      _signature: BytesLike,
      _index: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "publishInitialSigners(address,bytes32,uint256,bytes,bool)"(
      _wallet: string,
      _hash: BytesLike,
      _sizeMembers: BigNumberish,
      _signature: BytesLike,
      _index: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    requireMinNonce(
      _wallet: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "requireMinNonce(address,uint256)"(
      _wallet: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    requireNonExpired(
      _expiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "requireNonExpired(uint256)"(
      _expiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    RequiredConfig(
      _wallet: string | null,
      _imageHash: BytesLike | null,
      _threshold: null,
      _signers: null
    ): TypedEventFilter<
      [string, string, BigNumber, string],
      {
        _wallet: string;
        _imageHash: string;
        _threshold: BigNumber;
        _signers: string;
      }
    >;

    RequiredSigner(
      _wallet: string | null,
      _signer: string | null
    ): TypedEventFilter<[string, string], { _wallet: string; _signer: string }>;
  };

  estimateGas: {
    callBalanceOf(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "callBalanceOf(address)"(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    callBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    "callBlockNumber()"(overrides?: CallOverrides): Promise<BigNumber>;

    callBlockhash(
      _i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "callBlockhash(uint256)"(
      _i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    callChainId(overrides?: CallOverrides): Promise<BigNumber>;

    "callChainId()"(overrides?: CallOverrides): Promise<BigNumber>;

    callCode(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "callCode(address)"(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    callCodeHash(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "callCodeHash(address)"(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    callCodeSize(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "callCodeSize(address)"(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    callCoinbase(overrides?: CallOverrides): Promise<BigNumber>;

    "callCoinbase()"(overrides?: CallOverrides): Promise<BigNumber>;

    callDifficulty(overrides?: CallOverrides): Promise<BigNumber>;

    "callDifficulty()"(overrides?: CallOverrides): Promise<BigNumber>;

    callGasLeft(overrides?: CallOverrides): Promise<BigNumber>;

    "callGasLeft()"(overrides?: CallOverrides): Promise<BigNumber>;

    callGasLimit(overrides?: CallOverrides): Promise<BigNumber>;

    "callGasLimit()"(overrides?: CallOverrides): Promise<BigNumber>;

    callGasPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "callGasPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    callOrigin(overrides?: CallOverrides): Promise<BigNumber>;

    "callOrigin()"(overrides?: CallOverrides): Promise<BigNumber>;

    callTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "callTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    lastImageHashUpdate(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "lastImageHashUpdate(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastSignerUpdate(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "lastSignerUpdate(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastWalletUpdate(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "lastWalletUpdate(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    multiCall(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "multiCall(tuple[])"(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    publishConfig(
      _wallet: string,
      _threshold: BigNumberish,
      _members: { weight: BigNumberish; signer: string }[],
      _index: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "publishConfig(address,uint256,tuple[],bool)"(
      _wallet: string,
      _threshold: BigNumberish,
      _members: { weight: BigNumberish; signer: string }[],
      _index: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    publishInitialSigners(
      _wallet: string,
      _hash: BytesLike,
      _sizeMembers: BigNumberish,
      _signature: BytesLike,
      _index: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "publishInitialSigners(address,bytes32,uint256,bytes,bool)"(
      _wallet: string,
      _hash: BytesLike,
      _sizeMembers: BigNumberish,
      _signature: BytesLike,
      _index: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    requireMinNonce(
      _wallet: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "requireMinNonce(address,uint256)"(
      _wallet: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    requireNonExpired(
      _expiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "requireNonExpired(uint256)"(
      _expiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    callBalanceOf(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "callBalanceOf(address)"(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    callBlockNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "callBlockNumber()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    callBlockhash(
      _i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "callBlockhash(uint256)"(
      _i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    callChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "callChainId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    callCode(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "callCode(address)"(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    callCodeHash(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "callCodeHash(address)"(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    callCodeSize(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "callCodeSize(address)"(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    callCoinbase(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "callCoinbase()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    callDifficulty(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "callDifficulty()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    callGasLeft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "callGasLeft()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    callGasLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "callGasLimit()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    callGasPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "callGasPrice()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    callOrigin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "callOrigin()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    callTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "callTimestamp()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastImageHashUpdate(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "lastImageHashUpdate(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastSignerUpdate(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "lastSignerUpdate(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastWalletUpdate(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "lastWalletUpdate(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    multiCall(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "multiCall(tuple[])"(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    publishConfig(
      _wallet: string,
      _threshold: BigNumberish,
      _members: { weight: BigNumberish; signer: string }[],
      _index: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "publishConfig(address,uint256,tuple[],bool)"(
      _wallet: string,
      _threshold: BigNumberish,
      _members: { weight: BigNumberish; signer: string }[],
      _index: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    publishInitialSigners(
      _wallet: string,
      _hash: BytesLike,
      _sizeMembers: BigNumberish,
      _signature: BytesLike,
      _index: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "publishInitialSigners(address,bytes32,uint256,bytes,bool)"(
      _wallet: string,
      _hash: BytesLike,
      _sizeMembers: BigNumberish,
      _signature: BytesLike,
      _index: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    requireMinNonce(
      _wallet: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "requireMinNonce(address,uint256)"(
      _wallet: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    requireNonExpired(
      _expiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "requireNonExpired(uint256)"(
      _expiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
