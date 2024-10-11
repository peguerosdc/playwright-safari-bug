"use server";

import { redirect } from "next/navigation";

export const onSubmit = async () => {
  redirect("/second");
};
