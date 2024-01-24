---
title: "Docker MySQL Container 설치와 사용방법"
image: ""
alt: ""
created: 2024-01-24
updated: 2024-01-24
tags:
    - docker
    - mysql
---

1. Docker 설치

    - Docker Desktop

        [https://www.docker.com/](https://www.docker.com/)

    - Docker Engine (Ubuntu) 설치

        1. Add docker repo

        ```bash
            ##### Add Docker's official GPG key: #####
        sudo apt-get update
        sudo apt-get install ca-certificates curl gnupg
        sudo install -m 0755 -d /etc/apt/keyrings
        curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
        sudo chmod a+r /etc/apt/keyrings/docker.gpg
            ##### Add the repository to Apt sources: #####
        echo \
        "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
        $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
        sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
        sudo apt-get update
        ```

        2. Install Docker

        ```bash
        sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
        ```

2. mysql 이미지 다운로드

    ```bash
    docker pull mysql
    ```

3. 다운로드 받은 이미지 확인

    ```bash
    docker images
    ```

4. container 생성 및 구동

    ```bash
    docker run --name mysqlContainer -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=비밀번호 mysql:latest
    ```

    - run : 컨테이너를 생성하고 구동시키는 명령어
    - --name : 컨테이너의 이름
    - -d : 백그라운드에서 실행
    - -p : `외부포트:내부포트` 연결 설정
    - -e : 환경변수 설정

        MYSQL은 `MYSQL_ROOT_PASSWORD`, `MYSQL_DATABASE`, `MYSQL_USER`, `MYSQL_PASSWORD` 가 있다.

    - mysql:latest : 구동하고자 하는 컨테이너(mysql)을 적는다.

5. 구동 중(run)인 컨테이너 확인

    ```bash
    docker ps
    ```

    - -a : 전체 컨테이너를 확인하고자 하는 경우

6. 컨테이너 접속

    ```bash
    docker exec -it mysqlContainer /bin/bash
    ```

    - -i : 사용자가 접근하지 않아도, 계속 입력을 받을 수 있는 상태를 유지
    - -t : 터미널을 사용할 수 있도록 할당해놓음

7. 컨테이너 종료

    ```bash
    docker stop mysqlContainer
    ```

8. 기존 컨테이너 시작

    ```bash
    docker start mysqlContainer
    ```

9. 기존 컨테이너 재시작

    ```bash
    docker restart mysqlContainer
    ```
