import { BigInt } from "@graphprotocol/graph-ts"
import {
  Transfer,
} from "../generated/OptionOrder/OptionOrder"
import { OptionTransfer } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
  let Transfer = new OptionTransfer(event.params.tokenId.toHex())
  Transfer.tokenId = event.params.tokenId
  Transfer.from = event.params.from
  Transfer.to = event.params.to
  Transfer.save()
}

