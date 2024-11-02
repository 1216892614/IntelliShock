import { setup } from "xstate";
import { iso, Newtype } from "newtype-ts";

import type { PlayerDg } from "./Player.ts";
import type { RoundDg } from "./Round.ts";
import { assign } from "xstate";

interface GameId extends Newtype<{ readonly ID: unique symbol }, string> {}
export const GameIdIso = iso<GameId>();

export interface GameCtx {
  id: GameId;
  players: PlayerDg[];
  roundCount: number;
  round: RoundDg[];
}

export type GameEvt = { type: "START" } | { type: "NEXT_ROUND" } | {
  type: "STOP";
};

export const GameDgSetup = setup({
  types: { context: {} as GameCtx, events: {} as GameEvt },
  actions: {
    newRound: ({ context }, { round }: { round: RoundDg }) => {
      context.roundCount += 1;
      context.round = [...context.round, round];
    },
  },
});
export type GameDg = ReturnType<typeof GameDgSetup.createMachine>;
