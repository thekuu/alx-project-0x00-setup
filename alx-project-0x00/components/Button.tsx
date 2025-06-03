import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`bg-blue-600 text-white px-4 py-2 font-semibold ${styles}`}>
      <p className="text-sm">{title}</p>
    </button>
  );
}

export default Button;