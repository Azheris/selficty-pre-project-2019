## SELFCITY Pre-Project

The goal of this project is to provide the list of all bike stations in Toulouse.

The user can then select a specific station to display the number of bikes and stands available at the moment.

The request refresh every 2m if the page isn't reloaded manually.

# Languages

- Javascript (React & Material-UI)

### Requirements

* [NPM] - Package manager for JS and the world's largest software registry
* [Node] - As an asynchronous event driven Javascript runtime, Node is designed to build scalable network applications.

### JCDecaux API

| Route | Method | Usage |
| ------ | ------ | ----- |
| /stations | GET | retrieve the list of all bike stations and informations |

### Compilation

```sh
$ npm start
```
or
```sh
$ docker-compose build && docker-compose up
```

**Authors**

Guilhem AMARDEILH

[Node]: <http://nodejs.org>
[NPM]: <https://www.npmjs.com/>
