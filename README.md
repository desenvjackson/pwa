# pwa
react/pwa/server

Executar com: yarn start 
porta 4000


curl -H "Authorization: bearer token" -X POST -d " \
 { \
   \"query\": \"query { list { {
  list(name: "") {
    _id
    index
    picture
    age
    eyeColor
    name
    company
    email
    phone
    greeting
    friends{
      age
    eyeColor
    name
    company
    email
    }
  }
} }}\" \
 } \
" http://localhost:4000/graphql

 