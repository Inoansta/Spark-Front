import { ReactNode } from 'react';
import { Sheet } from 'react-modal-sheet';
import CustomHeader from './items/CustomHeader';

interface BottomSheetModal {
  open: boolean;
  title: string;
  setClose: () => void;
  contents: ReactNode;
}

function BottomSheetModal({
  open,
  setClose,
  title,
  contents,
}: BottomSheetModal) {
  return (
    <Sheet
      isOpen={open}
      onClose={() => setClose()}
      detent="content-height"
      className={'max-w-[450px] w-full my-0 mx-auto'}
    >
      <Sheet.Container className={'w-full'}>
        <Sheet.Header className={'border-b border-disabled px-[20px]'}>
          <CustomHeader title={title} onClose={() => setClose()} />
        </Sheet.Header>
        <Sheet.Content className={'px-[20px]'}>{contents}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
}

export default BottomSheetModal;
