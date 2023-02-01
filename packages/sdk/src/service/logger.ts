import chalk from 'chalk';
import { getEnv } from "../config/env.js";

export async function logVersion() {
  console.log(chalk.blue(`The version is ${(await getEnv()).VERSION}`));
}