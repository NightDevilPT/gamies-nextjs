"use client";
import store from "@/redux/store";
import { ChildProps } from "@/types/type";
import React from "react";
import { Provider } from "react-redux";

const ReduxProvide = ({ children }: ChildProps) => {
	return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvide;