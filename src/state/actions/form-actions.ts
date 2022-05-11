import { createAction } from "@reduxjs/toolkit";

export const formStatus = createAction<string | undefined>("form/status");
export const formLoader = createAction<boolean | undefined>("form/loader");
