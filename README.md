# api-design

Study notes for the **Grokking API Design** course — one markdown file per lesson, with the
course diagrams kept alongside them.

Notes are terse on purpose: bullets and comparison tables rather than prose, written to be
re-read quickly rather than read once.

## Notes

| # | Lesson | Covers |
| - | ------ | ------ |
| 00 | [Introduction to APIs](grokking-api-design/00-introduction-to-apis.md) | benefits of APIs, public/private/partner/composite types, API gateway |
| 01 | [Unpacking API Design](grokking-api-design/01-unpacking-api-design.md) | design lifecycle, design-first vs code-first, functional vs non-functional requirements, traits of a good API |
| 02 | [Business Considerations with APIs](grokking-api-design/02-business-considerations-with-api.md) | APIs in business strategy, monetization models, SLIs / SLOs / SLAs |
| 03 | [Narrow Waist of the Internet](grokking-api-design/03-narrow-waist-of-the-internet.md) | layered architecture, OSI and TCP/IP models |
| 04 | [Latency and Throughput](grokking-api-design/04-latency-and-throughput.md) | throughput, the four components of latency, ways to reduce it |
| 05 | [Network Sockets](grokking-api-design/05-network-sockets-as-a-foundation-for-communication.md) | sockets as an interface, concurrent connections, stream vs datagram sockets |
| 06 | [Important Concepts in Product Architecture](grokking-api-design/06-important-concepts-in-product-architecture.md) | API versioning approaches, evolution strategies, rate limiting, client-adaptive response (Netflix IAC) |
| 07 | [Data-fetching Patterns](grokking-api-design/07-data-fetching-patterns.md) | short polling and its delay problem, long polling (hanging GET) and its costs |

## Layout

```
grokking-api-design/
├── NN-lesson-title.md      # one file per lesson, NN = course order
└── assets/images/          # NNN.png|svg — one counter across the whole course
```

Images use a single sequential counter across all lessons (`000`–`022`, `002` unused), not a
per-lesson one, and are referenced by absolute GitHub URL so they render on github.com. They
will not render in an offline markdown preview — that is a known tradeoff, not a bug.

Conventions for adding notes and images are written up in [CLAUDE.md](CLAUDE.md).
