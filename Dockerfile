# 노드 16버전 이미지 받기
FROM node:16

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# 이미지 내에서 명령어를 실행할(현 위치로 잡을) 디렉토리 설정
WORKDIR /home/web-app

COPY package*.json ./

# 이미지 생성 과정에서 실행할 명령어 ci로 버전 일치
RUN npm ci

# wait-for-it.sh
#COPY wait-for-it.sh ./
#RUN chmod +x wait-for-it.sh

#COPY . .

EXPOSE 3000

# Node ENV
ENV NODE_ENV=production

ENTRYPOINT ["dockerize", "-wait", "tcp://db:3306", "-timeout", "10s"]

# 컨테이너 실행시 실행할 명령어
CMD ["npm", "start"]


# 이미지 생성 명령어 (현 파일과 같은 디렉토리에서)
# docker build -t {이미지명} .

# 컨테이너 생성 & 실행 명령어(데몬)
# docker run -d --name {컨테이너명} -v $(pwd):/home/web-app/bin -p 3000:3000 {이미지명}
# docker run -d --name {컨테이너명} -v /home/user/docker-exam/src/api:/home/web-app/bin -p 3000:3000 {이미지명}

# Dockerfile이 최상위 경로가 아니라면(현 위치는 src/Dockerfile)
# COPY ./package*.json 파일을 찾을수 없다(../package*.json으로 찾을 수 없음)
# -f(--file) 옵션과 Dockerfile의 경로를 알려줘야 한다
# docker build -t {이미지명} -f src/Dockerfile .