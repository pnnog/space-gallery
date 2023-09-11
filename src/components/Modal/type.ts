import { ICard } from "../Gallery/Card/types"

export type ModalProps = {
  modalCard: ICard | null
  onToggleFav: (card:ICard) => void
  onToggleModal: (card:null) => void

}