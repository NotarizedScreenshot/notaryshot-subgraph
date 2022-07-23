import {Address, BigInt} from "@graphprotocol/graph-ts"
import {
  ChainlinkCancelled,
  ChainlinkFulfilled,
  ChainlinkRequested,
  MintRequestRefused,
  RequestContentHashFulfilled,
  RequestContentHashSent,
  Transfer
} from "../generated/NotaryShot/NotaryShot"
export function handleChainlinkCancelled(event: ChainlinkCancelled): void {}

export function handleChainlinkFulfilled(event: ChainlinkFulfilled): void {}

export function handleChainlinkRequested(event: ChainlinkRequested): void {}

export function handleMintRequestRefused(event: MintRequestRefused): void {}

export function handleRequestContentHashFulfilled(
  event: RequestContentHashFulfilled
): void {}

export function handleRequestContentHashSent(
  event: RequestContentHashSent
): void {}

export function handleTransfer(event: Transfer): void {
    const id = event.params.tokenId;
    let ns = NotarizedScreenshot.load(id)
    if(ns == null){
        ns = new NotarizedScreenshot(id);
    }
    ns.owner = event.params.to;
    ns.save();
}
