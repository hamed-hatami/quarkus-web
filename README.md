# quarkus-web Project

This project uses Quarkus, the Supersonic Subatomic Java Framework.

If you want to learn more about Quarkus, please visit its website: https://quarkus.io/ .

## Testing the application in dev mode

```bash
curl -i -X GET http://localhost:8080/api/car -H "Content-Type: application/json"

curl -i -X POST http://localhost:8080/api/car -H "Content-Type: application/json" -d '{"manufacturer":"Volkswagen","model":"SportCombi","name":"Golf","Grey":"white","productionYear":"2020","fuel":"GTE"}'
```