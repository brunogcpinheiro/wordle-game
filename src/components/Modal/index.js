import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ isCorrect, solution, turn }) => {
  return (
    <Backdrop>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {isCorrect && (
          <div>
            <h1>Você venceu!</h1>
            <p className="solution">
              A palavra era: <span>{solution.toUpperCase()}</span>
            </p>
            <p>
              Você achou a solução com <strong>{turn}</strong> palpites :)
            </p>
            <button
              className="modal-btn"
              onClick={() => document.location.reload()}
            >
              Jogar novamente!
            </button>
          </div>
        )}
        {!isCorrect && (
          <div>
            <h1>Poxa! Não deu!</h1>
            <p className="solution">
              A palavra era: <span>{solution.toUpperCase()}</span>
            </p>
            <p>Na próxima você consegue :)</p>
            <button
              className="modal-btn"
              onClick={() => document.location.reload()}
            >
              Tentar novamente!
            </button>
          </div>
        )}
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
