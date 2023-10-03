import { type LootName } from "@src/interfaces/loot-name";

export interface StartLootRequest {
  type: "content:start-auto-loot";
  name: LootName;
  timer: number;
}

export interface StartLootResponse {
  type: "content:auto-loot";
  response: void;
}

export interface StopLootRequest {
  type: "content:stop-auto-loot";
  name: LootName
}

export interface StopLootResponse {
  type: "content:stop-auto-loot";
  response: void;
}

export type MessageEventRequest = StartLootRequest | StopLootRequest;

export type MessageEventResponse = StartLootResponse | StopLootResponse;

export type ExtractMessageEventReponse<
  U extends MessageEventRequest,
  T extends MessageEventResponse = MessageEventResponse
> = T extends { type: U['type'] } ? T['response'] : never;
