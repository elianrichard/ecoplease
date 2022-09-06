import React from "react";
import { motion } from "framer-motion";

import Characteristics from "./Characteristics";
import Description from "./Description";
import LifeCycle from "./LifeCycle";

const index = (props: any) => {
  return (
    <motion.div {...props}>
      <Description />
      <Characteristics />
      <LifeCycle />
    </motion.div>
  );
};

export default index;
