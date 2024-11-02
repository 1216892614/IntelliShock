import { setup } from "xstate";

export interface TurnCtx {
  idx: number;
}

export type TurnEvt = { type: "START" } | { type: "NEXT_TURN" } | {
  type: "STOP";
};

export const TurnDgSetup = setup({
  types: { context: {} as TurnCtx, events: {} as TurnEvt },
});
export type TurnDg = ReturnType<typeof TurnDgSetup.createMachine>;
