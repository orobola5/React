import { configureStore } from "@reduxjs/toolkit";
import reducers  from "react";

const store=configureStore({reducer:reducers})

export default store