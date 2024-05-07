import { motion } from "framer-motion";
import React from "react";

const Wrapper = (Component, id) =>
  function HOC() {
    return (
      <motion.div
        className="wrapper-container"
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="wrapper text-white" id={id}>
          <Component />
        </div>
      </motion.div>
    );
  };

export default Wrapper;
