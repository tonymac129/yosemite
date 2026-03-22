import { motion } from "framer-motion";

type BtnProps = {
  children: React.ReactNode;
  onclick: () => void;
  primary?: boolean;
};

function Btn({ children, onclick, primary }: BtnProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 1, y: -1 }}
      className={`${primary ? "bg-gray-300 text-gray-950" : "transparent text-gray-300 backdrop-blur-sm"} border-2 border-gray-300 rounded-full cursor-pointer flex items-center gap-x-3 py-2.5 px-5 h-fit font-bold group`}
      onClick={onclick}
    >
      {children}
    </motion.div>
  );
}

export default Btn;
