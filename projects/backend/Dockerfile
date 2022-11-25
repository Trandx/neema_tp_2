FROM node:lts-alpine as build-stage

# installe un simple serveur http pour servir un contenu statique
#RUN npm install -g http-server

# définit le dossier 'app' comme dossier de travail
WORKDIR /app

# copie 'package.json' et 'package-lock.json' (si disponible)
#COPY ./clients/nucle-x_sso_front/package*.json ./

# installe les dépendances du projet
#RUN npm install

# copie les fichiers et dossiers du projet dans le dossier de travail (par exemple : le dossier 'app')
COPY ./projects/backend .

# construit l'app pour la production en la minifiant
#RUN npm run build

# FROM nginx:stable-alpine as production-stage

# COPY ./clients/nucle-x_sso_front/.nginx/nginx.conf /etc/nginx/nginx.conf

# RUN mkdir /app
# COPY --from=build-stage /app/dist /app

# EXPOSE 8080
# ENTRYPOINT ["nginx", "-g", "daemon off;"]


EXPOSE 3333

CMD [ "npm", "run", "dev"]
#CMD [ "sh", "-c", "http-server ./dist -p 8080"]
#CMD [ "http-server", "./dist -p 8080" ]
