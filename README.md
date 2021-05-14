# Basic To Do List API using an Express Server

### Author: Carlos Andrés Escalona Contreras 
### Proposed by: Javier Solís
Main file: ExpressServer.js  
Created: 11/05/2021  
Updated: 14/05/2021

## Installation
### `git clone https://github.com/CarlosAEC-KS/ToDoListAPI`

## Start
### `npm run start`

## Testing
### `npm run test`

## Description
* Express server listening to requests on port 3000.

1. Express application to manage a TODO list.

| Endpoint | Method | Description |
|-|-|-|
| /todos | GET |
| /todos | POST |
| /todos/:id | PUT |
| /todos/:id | DELETE |

* Good usage of REST will be evaluated

The application is deployed in an AWS instance using PM2:

2. Security Group:  
Allow PORTS: 443 & 80 for connection from 0.0.0.0  
Allow PORT 22 for for connection from your IP address  
![Security Group](./config/SecurityGroup.png)  

3. Set a proxy pass using nginx. Nginx configuration:

4. Screenshot of PM2 running:
list and monitor

5. IP Address & virtual domain (If you don´t have a domain, the application should be available via a virtual domain /etc/hosts)