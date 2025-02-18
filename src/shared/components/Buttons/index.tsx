export interface ButtonInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick: () => void;
  buttonType:
    | 'small-outlined-button'
    | 'large-outlined-button'
    | 'large-filled-button';
}

const style = {
  'small-outlined-button':
    'px-[20px] w-full max-w-[70px] h-[40px] text-primary5 border border-primary5  rounded-md active:bg-primary1',
  'large-outlined-button':
    'px-[20px] w-full max-w-[335px] h-[48px] text-primary5 border border-primary5  rounded-md active:bg-primary1',
  'large-filled-button':
    'px-[20px] w-full max-w-[335px] h-[48px] bg-primary5 text-white text-subtitle-b rounded-medium active:bg-primary7',
};

export function Button({
  text,
  onClick,
  buttonType,
  ...props
}: ButtonInterface) {
  return (
    <div className={'flex justify-center'}>
      <button
        onClick={() => onClick()}
        className={style[buttonType]}
        {...props}
      >
        {text}
      </button>
    </div>
  );
}
