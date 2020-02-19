# boiler_projects
boiler with "server jsonwebtoken" for web/mobile/desktop

sequelize init

sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string

sequelize migration:generate --name migration-skeleton

sequelize db:migrate

