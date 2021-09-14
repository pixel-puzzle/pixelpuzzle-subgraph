import { Transfer } from '../generated/OptionNft/OptionNft'
export function handleTransfer(event: Transfer): void {
    let option = new Transfer(event.params.tokenId.toHex())
    option.from = event.params.from
    option.to = event.params.to
    option.tokenId = event.params.tokenId
    option.save()
}