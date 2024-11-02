import { setup } from "xstate";
import { iso, Newtype } from "newtype-ts";

interface PlayerId extends Newtype<{ readonly ID: unique symbol }, string> {}
export const PlayerIdIso = iso<PlayerId>();

export interface PlayerCtx {
  id: PlayerId;
}

export const PlayerDgSetup = setup({ types: { context: {} as PlayerCtx } });
export type PlayerDg = ReturnType<typeof PlayerDgSetup.createMachine>;
