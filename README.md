# addrbookbe

This is a Sample NodeJS rest server with MariaDB backend

## Setup
- Update OS Packages
- Install NodeJS

```
yum install -y gcc-c++ make git
curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash -
yum -y install nodejs
```

- Clone this project
- Change Dir: `addrbookbe`
- Install Project dependencies

```
npm install --save express body-parser morgan
npm install -D nodemon
npm install --save-dev sequelize-cli
npm install sequelize mysql2 --save
```

- Initialize sequelize CLI

```
npx sequelize-cli init
```

- Update `config/config.json` with DB connection parameters
- Create Database

```
npx sequelize-cli db:create
```

- Generate Models

```
npx sequelize-cli model:generate --name contact --attributes salutation:string,fname:string,mname:string,lname:string,workphone:string,mobile:string,workemail:string,persemail:string
```

- Create Database Tables

```
npx sequelize-cli db:migrate
```

## Deployment
- Clone this repository
- Install Node Project dependencies

```
npm install
```

- As `root` user copy `addrbookbe.service` to `/etc/systemd/system/`
  - Make changes to Project path entry based on your setup directory
- Reload System Daemon

```
systemctl daemon-reload
```

- Enable and Start service

```
systemctl enable addrbookbe
systemctl start addrbookbe
```

## Testing

### Create Contact

```
curl -X POST -H "Content-Type: application/json" -H "Accept: application/json" http://localhost:8081/api/contacts -d '{"fname": "FirstName", "lname": "LastName"}'
```

### Update Contact

```
curl -X PUT -H "Content-Type: application/json" -H "Accept: application/json" http://localhost:8081/api/contacts/1 -d '{"workphone": "111111111111", "mobile": "9999999999"}'
```

### Get all Contacts

```
curl -H "Accept: application/json" http://localhost:8081/api/contacts
```

### Get a Contact

```
curl -H "Accept: application/json" http://localhost:8081/api/contacts/1
```

### Delete a Contact

```
curl -X DELETE http://localhost:8081/api/contacts/1
```
