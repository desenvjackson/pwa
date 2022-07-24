# pwa
react/pwa/server

# Instruções para rodar o projeto:


Instalação: yarn
Executar com: yarn start 

# Divisões:

Na pasta de nome "client" tem a parte do front-end.
Na pasta server tem o backend.


# curl:

ccurl 'http://localhost:4000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:4000' --data-binary '{"query":"# Write your query or mutation here\n{\n list {\n\t\tid\n\t\tindex\n\t\tpicture\n\t\tage\n eyeColor\n\t\tname\n\t\tcompany\n\t\temail\n\t\tphone\n\t\tgreeting\n \n }\n}"}' --compressed

 