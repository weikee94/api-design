# Unpacking API Design

## API deisgn lifecycle
![API Development Cycle](https://github.com/weikee94/api-design/blob/main/grokking-api-design/assets/images/003.svg "API Development Cycle")

## The design-first vs code-first approach
- code-first approach: development of the code starts after the business requirement are laid out
- design-first approach: focus on creating API's contract or specification document before writing any code

## API design considerations
![API design considerations](https://github.com/weikee94/api-design/blob/main/grokking-api-design/assets/images/004.svg "API design considerations")

- define the level of access and type of authentication to be implemented in the API
- identify the responses (successes or errors) to different API calls, exception and error handling must be implemented along with well-defined endpoints of the API
- api design should consider scalability as an factor in order to support increasing demands of customers
- api should be adequately documened so the developers can understand the integration,behaviors,structures, and parameters to be defined while using the API

## API requirements
- functional requirements: defined the desired end function of a system and its required parameters, for example a video streaming service, the ability to post comments on a video is a functional requirements
- non-functional requirements: define the performance and quality of the services, example low latency, availability, reliability, consistency

## Characteristics of a good API (design)
| Characteristics | Explnation |
| --------------- | ---------- |
| Sepration between API specification and implementation | clean design allow iterative improvements and changes to the API implementation |
| Concurrency | amount of api calls that can be active simutaneously in a specified period |
| Dynamic rate limiting | strategy to limit access to API within a timeframe, avoids overwhelming the API with an onslaught of requests | 
| Security | well defined security mechanism for authentication and authorization protocols that define who can access the API |
| Error warnings and handling | allows error handling effectively to prevent frustation on the consumer end |
| Minimal but comprehensive and cohesive | API should be as terse as possible but fulfill its goals |
| Fault tolerance | failures are inevitable,but a well designed API can ensure the continued operations of the API even if some components malfunction |