import React from "react";
import { ImgModalDeleteIcon } from "../../../assets/images";
import { Button } from "../../Atom";
import ModalTemplate from "../../Template/ModalTemplate";

interface ModalDeleteProps {
  onCancel(): void;
  onDelete(): void;
  activity: string;
  isListItem?: boolean;
}

export default function ModalDelete(props: ModalDeleteProps) {
  const { onDelete, onCancel, activity, isListItem } = props;
  return (
    <ModalTemplate dataCy="modal-delete">
      <div className="w-[490px] bg-white rounded-xl flex-col justify-center items-center px-12 py-10">
        <img
          data-cy="modal-delete-icon"
          src={ImgModalDeleteIcon}
          width={84}
          height={84}
          className="mb-9 mx-auto"
        />
        <p
          data-cy="modal-delete-title"
          className="font-poppins-medium text-lg text-black text-center mb-10"
        >
          {`Apakah anda yakin ingin menghapus ${
            isListItem ? "List Item" : "activity"
          }`}
          <span className="font-poppins-bold"> "{`${activity}`}"</span>
        </p>
        <div className="flex justify-center">
          <Button
            dataCy="modal-delete-cancel-button"
            className="mr-3 px-10"
            color="bg-gray"
            onClick={onCancel}
          >
            <p className="font-poppins-semibold text-lg text-black">Batal</p>
          </Button>
          <Button
            dataCy="modal-delete-confirm-button"
            className="px-10"
            color="bg-red"
            onClick={onDelete}
          >
            <p className="font-poppins-semibold text-lg text-white">Hapus</p>
          </Button>
        </div>
      </div>
    </ModalTemplate>
  );
}
