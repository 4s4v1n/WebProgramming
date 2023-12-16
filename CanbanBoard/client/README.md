# Run

1. `cd client`
2. `docker build -t frontend .`
3. `docker run -it  -d -p 3000:80 --name web frontend`