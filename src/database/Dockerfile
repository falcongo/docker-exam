FROM mysql:5.7

ENV MYSQL_USER scott
ENV MYSQL_PASSWORD scott
ENV MYSQL_ROOT_PASSWORD mysql_scott_password
ENV MYSQL_DATABASE test_docker_d

# 도커환경에서 컨테이너 생성시 스크립트를 실행하는 폴더로
# 미리 작성된 스크립트들을 이동
#COPY ./src/database/scripts /docker-entrypoint-initdb.d

EXPOSE 3306

# 이미지 빌드 명령어 (현 파일과 같은 디렉토리에서)
# docker build -t {이미지명} .

# 실행 명령어 (터미널에 로그 찍히는 것 보기)
# docker run --name {컨테이너명} -it -p 3306:3306 {이미지명}

# 실행 명령어 (데몬으로 실행)
# docker run --name {컨테이너명} -p 3306:3306 -d {이미지명}