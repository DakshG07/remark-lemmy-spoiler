import { expect, test } from "vitest";
import { splitSpoilers, customRemarkSpoiler } from "./remark";

test('Run splitSpoiler on singe-spoiler text', () => {
  expect(splitSpoilers("Want to know a secret?\
\n::: spoiler Secret\
\nI have a secret!\
\n:::\
\nThat is my secret!")).toEqual([
    "Want to know a secret?",
    "::: spoiler Secret",
    "I have a secret!",
    ":::",
    "That is my secret!",
  ]);
})

test('Run splitSpoiler on double-spoiler text', () => {
  expect(splitSpoilers("Want to know a secret?\
\n::: spoiler Secret\
\nI have a secret!\
\n:::\
\nThat is my secret!\
\nAnother secret I have:\
\n::: spoiler Another Secret!\
\nI love dogs!\
\n:::\
\nThat is my final secret.")).toEqual([
    "Want to know a secret?",
    "::: spoiler Secret",
    "I have a secret!",
    ":::",
    "That is my secret!\nAnother secret I have:",
    "::: spoiler Another Secret!",
    "I love dogs!",
    ":::",
    "That is my final secret."
  ]);
})


// TODO: add tests for customRemarkSpoiler
