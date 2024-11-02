import { setup } from "xstate";

export interface RoundCtx {
  idx: number;
  turnCount: number;
}

export type RoundEvt = { type: "START" } | { type: "NEXT_TURN" } | {
  type: "STOP";
};

export const RoundDgSetup = setup({
  types: { context: {} as RoundCtx, events: {} as RoundEvt },
});
export type RoundDg = ReturnType<typeof RoundDgSetup.createMachine>;
