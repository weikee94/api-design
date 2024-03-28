# Narrow waist of the internet

## Layer architecture
- Any Nth layer in the M layered architecture provides services to the Nth - 1 and get services from Nth + 1 layer.
- advantages:
    - provides modularity so that each layer performs its own operations
    - provides ease in troubleshooting the network
    - modification in one layer has no impact on the other
    - flexibility accommodates different types of application

![layered architecture](https://github.com/weikee94/api-design/blob/main/grokking-api-design/assets/images/006.png "layered architecture")

- each layer has at least one protocol that determines the following information:
    - the order of message over network
    - the actions that we perform on the message transmission
    - the structure of the messages
    - the message's receipt
    - error detection and correction

## Layer models
- standard systems used worldwide to ensure communication and interoperability

### The OSI model
- open system interconnection consists of seven layer

![osi model](https://github.com/weikee94/api-design/blob/main/grokking-api-design/assets/images/007.png "osi model")

| Layer | Desc | 
| ----- | ---- |
| data | responsible for data manipulation |
| presentation | add presentation layer header to it |
| session | manages session during the communication |
| transport | divides data into segments, add sender and receiver port numbers |
| network | convert segments into packets and add IP addresses of the sender and receiver |
| data link | convert packets into frames, adds MAC address of the immediate next hop in the path; add data layers header and data trailer to defined the boundaries of a frame |
| physical | convert frames into the bit streams |

Application layer: The sender interacts with the application layer, and it includes different protocols, for example, HTTP and SMTP protocols.

Presentation layer: It takes care of the data's format on the sender and receiver sides. It ensures the data is understandable at the receiver end. Also, it may perform encryption, decryption, and compression of the data.

Session layer: It creates, manages, and terminates the sessions between end-to-end devices. It’s also responsible for authentication and reconnections.

Transport layer: It’s responsible for data ordering, reliability, and error checking.

Network layer: IP addressing and routing is the responsibility of the network layer. A node connected to the internet needs to have an IP address for communication with peers.

Data link layer: This layer is responsible for frame transmission, address for local area network (LAN), and logical link control. In OSI models, the data unit is considered to be a packet in the network layer and a frame in the data link layer.

Physical layer: It handles the transmission of bitstreams on the physical link between the sender and the immediate next hop receiver. The physical link can be Ethernet, DSL, and so forth.

## THE TCP/IP model

![tcp/ip model](https://github.com/weikee94/api-design/blob/main/grokking-api-design/assets/images/008.png "tcp/ip model")

- The physical layer and data link layer are combined in the network access layer. It consists of multiple network technologies such as Ethernet. 
- The internet layer is responsible for logical data transmission over the network. 
- The transport layer determines the application using the port number and sends the data to the relevant application on the remote peer. 
- The application layer, we have multiple protocols—such as HTTP, SMTP, FTP, and so on—to interpret and display the data on the screen. 

## New narrow waist of the Internet
![new narrow waist of the internet](https://github.com/weikee94/api-design/blob/main/grokking-api-design/assets/images/009.png "new narrow waist of the internet")