# search all

curl -X POST -H "Content-Type: application/json;charset=UTF-8" "http://localhost:9090/products"

# search by condition

curl -X POST -H "Content-Type: application/json;charset=UTF-8" -d '{"name":"5", "description":"7"}' "http://localhost:9090/products"

# delete

curl -X DELETE -H "Content-Type: application/json;charset=UTF-8" "http://localhost:9090/product/1"

# update

curl -X PUT -H "Content-Type: application/json;charset=UTF-8" -d '{"description":"abc", "id":"1", "name":"dd"}' "http://localhost:9090/product/1"



