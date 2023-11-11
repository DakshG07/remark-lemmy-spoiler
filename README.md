# `remark-lemmy-spoiler`
A remark and rehype plugin that adds support for Lemmy spoilers.

## PSA
**At the current moment, this plugin is very untested. Proceed with caution.**

This plugin (ab)uses how `remark` handles its syntax tree to introduce spoilers.
Since we comb through many syntax trees and match using regexes, performance will most likely be impacted.
Also, since this method relies on certain properties of the syntax tree, it may not work in certain edge cases, and may break entirely in the future.
Therefore, it's mostly advised against using this plugin for a reliable, high-performance product. Instead, consider implementing a `micromark` parser and an `mdast` extension: these will be both much faster and much more reliable.

_(If you do go down this route, consider dropping a PR for it on this repository. While I've taken the lazy approach here, it would be nice to someday replace this with a more reliable option.)_

## Usage
You'll probably want to use this with `ReactMarkdown`, as this plugin creates custom `spoiler` tags which can be rendered however you like.

Here's an example, rendering the spoilers using the `<details>` tag:
```tsx
    <Markdown
      components={{
        // @ts-ignore <- Typescript complains when we add an extra component
        spoiler: (props) => (
          <details>
            <summary>{props.title}</summary>
            {props.children}
          </details>
        ),
      }}
      remarkPlugins={[customRemarkSpoiler]}
      rehypePlugins={[customRehypeSpoiler]}
    />
  );
```
The `props` exposes a `title` property that you can use to retrieve the spoiler's title.
