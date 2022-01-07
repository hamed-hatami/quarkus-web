# quarkus-web Project

This project uses Quarkus, the Supersonic Subatomic Java Framework.
It's to create a preliminary CRUD Web Application with Quarkus by using H2 as DB.

Used Technology Stack

1) Quarkus 2.6.1.Final
2) Resteasy (MicroProfile implementation)
3) JPA Panache (Hibernate)
4) HTML5 , Javascript
5) H2

## How to build and run application in DEV mode

```bash
mvn clean compile quarkus:dev
```

## How to build and run application in PRODUCTION mode

```bash
mvn clean install -Dquarkus.package.type=uber-jar
java -jar target/quarkus-web-1.0.0-SNAPSHOT-runner.jar
```

## How to browse the UI

Open a browser and address http://localhost:8080/

## Testing the REST API directly

```bash
curl -i -X GET http://localhost:8080/api/car -H "Content-Type: application/json"

curl -i -X POST http://localhost:8080/api/car -H "Content-Type: application/json" -d '{"manufacturer":"Volkswagen","model":"SportCombi","name":"Golf","Grey":"white","productionYear":"2020","fuel":"GTE"}'
```