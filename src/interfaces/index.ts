export interface FilmProps {
  id: string;
  nome: string;
  sinopse: string;
  foto: string;
}

export interface FilmItemProps {
  data: FilmProps;
}

export interface ModalProps {
  closeModal: () => void;
  modalVisible: boolean;
  title: string;
  sinopse: string;
}