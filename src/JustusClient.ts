import { Roll } from "./domain/Roll";
import { Die } from "./domain/Die";
import { Error } from "./domain/Error";
import { Observer } from "./domain/Client";
import dayjs from "dayjs";

export const rollDie = (die: Die, count: number, observer: Observer<Roll>): void => {
  const dieMax = parseInt(die.slice(1));
  const dieSecondMax = dieMax - 1;

  const roll = {
    die: die,
    count: count,
    rolls: [] as number[],
    total: 0,
    timestamp: dayjs().toISOString(),
  };

  for (let i = 0; i < count; i++) {
    const result = Math.random() > 0.5 ? dieMax : dieSecondMax;
    roll.rolls.push(result);
    roll.total += result;
  }

  const rollHistory = JSON.parse(window.localStorage.getItem("justus-dice-roller-history") || "[]");
  rollHistory.push(roll);
  localStorage.setItem("justus-dice-roller-history", JSON.stringify(rollHistory));
  setTimeout(() => {
    observer.onSuccess(roll);
  }, 650);
};

export const getHistory = (observer: Observer<Roll[]>): void => {
  try {
    const rollHistory = JSON.parse(
      window.localStorage.getItem("justus-dice-roller-history") || "[]"
    );
    observer.onSuccess(rollHistory);
  } catch {
    return observer.onError(Error.SYSTEM_ERROR);
  }
};
