import clsx from "clsx";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({ text, onClick, className = "" }: ButtonProps) => (
  <button
    onClick={onClick}
    className={clsx("overflow-hidden group relative grid place-items-center bg-[black] text-[white] rounded-[20px] px-1 py-1", className)}
  >
    <div className="pointer-events-none absolute group-hover:translate-y-[-200%] duration-300">
      {text}
    </div>
    <div className="pointer-events-none translate-y-[200%] absolute group-hover:translate-y-[-5%] duration-300">
      {text}
    </div>
  </button>
);

export default Button;