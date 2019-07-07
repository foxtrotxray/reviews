var connectionConfig = require('./config/connectionConfig');
var cp = require('child_process')
var command =`mysql -u ${connectionConfig.user} -p '${connectionConfig.password}' -h ${connectionConfig.host} ${connectionConfig.database} < ./database/schema.sql`
cp.exec(command, console.log)
