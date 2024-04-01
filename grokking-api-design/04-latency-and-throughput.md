# Latency and throughput
Knowing what constitutes the latency and throughput enhances our understanding how to write better API services level agreements and some possible way to reduce latency. 

## Throughput
- refers to the data rate that passes through many network hops. if we have a 1Mbps effective throughput we cant sent more than 1Mb of data in a second.


![throughput](https://github.com/weikee94/api-design/blob/main/grokking-api-design/assets/images/010.png "throughput")

## Latency
- refers to a user-level message takes to travel from the sender to the receiver. we often more concerned about the user-perceived delay, which is a function of the round trip time(RTT).
- latency = transmission delay + propagation delay + queuing delay + switch/node processing delay

### Transmission Delay

![transmission](https://github.com/weikee94/api-design/blob/main/grokking-api-design/assets/images/011.png "transmission")

- transmission delay = packetSize / bandwidth
- size of packet and transmission media capacity affect the transmission delay, sending the compressed data over the network helps to reduce data size

### Propagation delay

![propagation](https://github.com/weikee94/api-design/blob/main/grokking-api-design/assets/images/012.png "propagation")

- propagation delay = distance / speed

### Queuing delay

![queuing](https://github.com/weikee94/api-design/blob/main/grokking-api-design/assets/images/013.png "queuing")

- refer to the time needed for a node to hold the packet before it can be proceed. 
- queuing delays depends on multiple factors, such as: the time interval between the packets, transmission capacity of the outgoing link, current congestion conditions at the routes

### Processing delay

![processing](https://github.com/weikee94/api-design/blob/main/grokking-api-design/assets/images/014.png "processing")

- refer the time the node(routers) and end hosts(server) take to process the packet (depends on the processing speed of the nodes and end host)

## Jitter

![jitter](https://github.com/weikee94/api-design/blob/main/grokking-api-design/assets/images/015.png "jitter")

- refer to the latency changes from one packet to the next (网路抖动), such as queuing delays, changes in the route and so on.

```
ping -c 5 educative.io
```

![jitter calculation](https://github.com/weikee94/api-design/blob/main/grokking-api-design/assets/images/016.png "jitter calculation")

