FROM ECR_NODE_BASE:14
WORKDIR /usr/src/app
COPY ./package*.json .
RUN npm install
COPY . /usr/src/app
ENV NODE_ENV 'production'
RUN npm run build
CMD ["npm", "run", "start"]
EXPOSE 3000