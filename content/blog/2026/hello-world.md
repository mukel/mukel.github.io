+++
title = "Hello, World!"
description = "My first post — a quick tour of code highlighting, bash snippets, and admonitions."
date = 2026-05-12
[taxonomies]
tags = ["meta"]
+++

Welcome to my blog! This is the first post.

## A Java snippet

```java
public class Hello {
    public static void main(String[] args) {
        var message = "Hello, JVM!";
        System.out.println(message);
    }
}
```

## Some bash

```bash
#!/usr/bin/env bash
set -euo pipefail

echo "Building..."
zola build
echo "Done in $SECONDS seconds."
```

## Inline stuff

You can write `inline code`, **bold**, *italic*, and ~~strikethrough~~.

Link to [Zola](https://www.getzola.org) or to [another page](@/blog/_index.md).

## Lists and blockquotes

- First item
- Second item
  - Nested item

> This is a blockquote. It can span multiple lines
> and is great for citations or callouts.

## Tables

| Feature   | Status  |
|-----------|---------|
| Zola     | Working |
| Theme    | abridge |
| Colors   | gruvbox |

## Admonitions

> [!NOTE]
> This is a note — useful for supplementary information.

> [!TIP]
> This is a tip — helpful advice to make things easier.

> [!IMPORTANT]
> This is important — key information you shouldn't miss.

> [!WARNING]
> This is a warning — proceed with caution.

> [!CAUTION]
> This is a caution — potential negative consequences ahead.

---

That's it for now.
