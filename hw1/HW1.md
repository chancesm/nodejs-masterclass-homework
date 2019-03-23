# Homework 1 (Hello World API)

## About

This is a basic NodeJS API with a single defined route. It will return a simple hello message when the route is hit. I used this opportunity to solidify my understanding of newer JS topics including but not limited to:
* const
* let
* arrow functions
* object destructuring
* object spread syntax
* object declaration redundancy (`{password:password} => {password}`)
---
##  Configuration
The server uses the following configuration settings:
### Ports
| Protocol | ENVIRONMENT | Port |
| -------- | ----------- | ---- |
| HTTP     | Staging     | 3000 |
| HTTPS    | Staging     | 3001 |
| HTTP     | Production  | 8000 |
| HTTPS    | Production  | 8001 |

---
## Endpoints 
The only defined endpoint is listed below:

### Hello Route
#### Path: `/hello`
#### Returned Data and Status
```json
(200)
{
    "message": "The [SERVER_TYPE] Server Says Hello!"
}
```

