docker build --no-cache -f SQL\Dockerfile.PostgreSql -t tchetyre/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t tchetyre/app ../..
