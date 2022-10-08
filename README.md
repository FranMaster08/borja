### Borja Proyect

Este proyecto es dedicado a nuestro profe. 


### Build Status

``` npm install ```

### Run 

``` npm start -- npm start:dev ```

### Data base in local directory

``` services:
  borja:
    image: mysql:5.7
    environment:
      MYSQL_DATABASE: 'borja'
      MYSQL_USER: 'fran'
      MYSQL_PASSWORD: '1234'
      MYSQL_ROOT_PASSWORD: '1234'
    volumes:
      # Montamos un volumen para MySQL para no perder los datos de bd
      - ./volumenes/borja:/var/lib/mysql
    expose:
      - 3309
    ports:
      - 3309:3306
    platform: linux/x86_64
```


## Power by

[Fran]