import { FzfResultItem } from "fzf";

type TFoo = { id: string; title: string; foo: string };

export type InputStates = {
  foo?: Pick<TFoo, "id" | "title">;

  // The input's value
  value: string;

  inputEl?: HTMLElement;

  result?: FzfResultItem<TFoo>[];
}[];

export type NewEventFormData = {
  foos: InputStates;
};
