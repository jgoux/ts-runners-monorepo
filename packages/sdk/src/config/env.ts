import { pathExists } from "find-up";

export async function getEnv() {
  await pathExists(".env");
  return {
    VERSION: "0.0.0",
  };
}