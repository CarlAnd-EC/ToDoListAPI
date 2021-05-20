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
* Application to manage a to-do list running on an Express server which listens to requests on port 3000.

| Endpoint | Method | Description |
|-|-|-|
| /todos | GET |
| /todos | POST |
| /todos/:id | PUT |
| /todos/:id | DELETE |

### Configuration
The application is deployed in an AWS EC2 instance using PM2 and NGINX as reverse proxy:

2. Security Group:  
Ports 443 & 80 allowed for connection from 0.0.0.0  
Port 22 allowed for connection from administration IP address
![Security Group](./config/SecurityGroup.png)  

3. Proxypass NGINX configuration:
![NGINX Config](./config/NGINX_config_1.png) 
![NGINX Config](./config/NGINX_config_2.png)

4. PM2 running:
* list
![PM2 Running 1](./config/PM2_running_list.png)  
* monitor
![PM2 Running 2](./config/PM2_running_monit.png)  
5. Deployment
#### http://carlandescape.tk

Notes:

Your node.js application should not be directly accesible via port 3000. Nginx should take the HTTP requests and transfer them to the node app.
You are posting some sensitive data, like the IP address of your router