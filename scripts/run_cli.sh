ghz \
  --insecure \
  --async \
  --proto ./proto/users.proto \
  --call users.Users/GetUser \
  --data '{"id": 1}' \
  --concurrency 100 \
  --total 1000  \
  -x 1s \
  localhost:3000
