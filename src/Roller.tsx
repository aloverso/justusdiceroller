import React, { ReactElement, useState } from "react";
import { Die } from "./domain/Die";
import { Roll } from "./domain/Roll";
import { Loader } from "./Loader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import * as client from "./JustusClient";

export const Roller = (): ReactElement => {
  const MIN = 1;
  const MAX = 99;

  const [roll, setRoll] = useState<Roll | undefined>(undefined);
  const [count, setCount] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingDieType, setIsLoadingDieType] = useState<Die>("d4");

  const handleClick = (die: Die): void => {
    setIsLoadingDieType(die);
    setIsLoading(true);
    client.rollDie(die, count, {
      onSuccess: (roll: Roll) => {
        setIsLoading(false);
        setRoll(roll);
      },
      onError: () => {
        setIsLoading(false);
      },
    });
  };

  const displayTotalOrLoader = (): ReactElement => {
    if (isLoading) {
      return <Loader dieType={loadingDieType} />;
    } else if (roll) {
      return (
        <div>
          <h1 className="align-center text-xxl text-white">{roll.total}</h1>
          {roll.rolls.length > 1 && (
            <div className="ptd text-m align-center">{roll.rolls.join(" + ")}</div>
          )}
        </div>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div className="container">
      <div className="row mts">
        <a className="pull-right phs" href="/history">
          roll history
        </a>
        <a className="pull-right phs" href="/about">
          about
        </a>
      </div>
      <div className="row ptl">
        <div className="col-xs-12 fdr fjc">
          <button onClick={(): void => handleClick("d4")}>
            <img className="width-100" src={"/assets/d4.svg"} alt="d4" />
          </button>
          <button onClick={(): void => handleClick("d6")}>
            <img className="width-100" src={"/assets/d6.svg"} alt="d6" />
          </button>
          <button onClick={(): void => handleClick("d8")}>
            <img className="width-100" src={"/assets/d8.svg"} alt="d8" />
          </button>
          <button onClick={(): void => handleClick("d10")}>
            <img className="width-100" src={"/assets/d10.svg"} alt="d10" />
          </button>
          <button onClick={(): void => handleClick("d12")}>
            <img className="width-100" src={"/assets/d12.svg"} alt="d12" />
          </button>
          <button onClick={(): void => handleClick("d20")}>
            <img className="width-100" src={"/assets/d20.svg"} alt="d20" />
          </button>
        </div>
      </div>

      <div className="row ptl">
        <div className="col-xs-12 fdr fjc text-xl">
          <span className="prd">rolling</span>
          <button
            title="decrement"
            onClick={(): void => {
              if (count > MIN) setCount(count - 1);
            }}
          >
            <RemoveCircleIcon />
          </button>

          <span className="bad count">{count}</span>

          <button
            title="increment"
            onClick={(): void => {
              if (count < MAX) setCount(count + 1);
            }}
          >
            <AddCircleIcon />
          </button>
          <span className="pld">{count > 1 ? "dice" : "die"}</span>
        </div>
      </div>

      <div className="row ptl">
        <div className="col-xs-12 fdr fjc fac">{displayTotalOrLoader()}</div>
      </div>
    </div>
  );
};
