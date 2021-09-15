import { Transfer } from '../generated/OptionNft/OptionNft'
import { Option } from '../generated/schema'
export function handleTransfer(event: Transfer): void {
    let option = new Option(event.params.tokenId.toHex())
    option.from = event.params.from
    option.to = event.params.to
    option.tokenId = event.params.tokenId
    option.save()
}