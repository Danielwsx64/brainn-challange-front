APP := challange-front
RUN := docker-compose run $(APP)

run:
	docker-compose up

bash:
	$(RUN) /bin/bash

build:
	docker-compose build
