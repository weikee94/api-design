# api-design

Study notes for the **Grokking API Design** course — one markdown file per lesson, with the
course diagrams kept alongside them.

Notes are terse on purpose: bullets and comparison tables rather than prose, written to be
re-read quickly rather than read once.

## Notes

| # | Lesson | Covers |
| - | ------ | ------ |
| 00 | [Introduction to APIs](content/00-introduction-to-apis.md) | benefits of APIs, public/private/partner/composite types, API gateway |
| 01 | [Unpacking API Design](content/01-unpacking-api-design.md) | design lifecycle, design-first vs code-first, functional vs non-functional requirements, traits of a good API |
| 02 | [Business Considerations with APIs](content/02-business-considerations-with-api.md) | APIs in business strategy, monetization models, SLIs / SLOs / SLAs |
| 03 | [Narrow Waist of the Internet](content/03-narrow-waist-of-the-internet.md) | layered architecture, OSI and TCP/IP models |
| 04 | [Latency and Throughput](content/04-latency-and-throughput.md) | throughput, the four components of latency, ways to reduce it |
| 05 | [Network Sockets](content/05-network-sockets-as-a-foundation-for-communication.md) | sockets as an interface, concurrent connections, stream vs datagram sockets |
| 06 | [Important Concepts in Product Architecture](content/06-important-concepts-in-product-architecture.md) | API versioning approaches, evolution strategies, rate limiting, client-adaptive response (Netflix IAC) |
| 07 | [Data-fetching Patterns](content/07-data-fetching-patterns.md) | short polling and its delay problem, long polling (hanging GET) and its costs |
| 08 | [Product Architecture III](content/08-product-architecture-iii.md) | SSR and CSR, the web page load process and what slows it, Shandian, resource hints, debouncing, circuit breaker |

## Layout

```
content/            the notes — one file per lesson (the source of truth)
content/assets/     lesson images
app/ lib/ scripts/  the Next.js + Nextra site that renders them
```

Images use a single sequential counter across all lessons (`000`–`022`, `002` unused), not a
per-lesson one. They are referenced by a path relative to the note, so they render both on
github.com and on the site.

## Running the site locally

Node 20+.

```bash
npm install && npm run dev
```

```bash
npm run build
```

Conventions for adding notes and images are written up in [CLAUDE.md](CLAUDE.md).
