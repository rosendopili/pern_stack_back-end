const { Pool } = require('pg');
const pool = new Pool({
 user: 'postgres', 
 host: 'portfolio-instance.caemfhowmnku.us-east-2.rds.amazonaws.com', //change host to your DNS 
 database: 'projects', 
 password: 'password',
 port: '5432',
})
const getProjects = (request, response) => {
 pool.query('SELECT * FROM projects', (error, results) => {
 if(error) {
 throw error;
 }
 response.status(200).json(results.rows);
 })
}

module.exports = { getProjects }
