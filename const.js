const env = require('./env')
let resUrl
let mp3FilePath
let dbHost
let dbUser
let dbPwd
if (env === 'dev') {
    resUrl = 'http://172.20.81.135:8081'
    mp3FilePath = '/Users/jin/upload/mp3'
    dbHost = 'localhost'
    dbUser = 'root'
    dbPwd = '12345'
} else if (env === 'prod') {
    resUrl = 'http://120.78.15.79'
    mp3FilePath = '/root/nginx/upload/mp3'
    dbHost = '120.78.15.79'
    dbUser = 'root'
    dbPwd = 'Wushijin_123'
}

const category = [
    'Biomedicine',
    'BusinessandManagement',
    'ComputerScience',
    'EarthSciences',
    'Economics',
    'Engineering',
    'Education',
    'Environment',
    'Geography',
    'History',
    'Laws',
    'LifeSciences',
    'Literature',
    'SocialSciences',
    'MaterialsScience',
    'Mathematics',
    'MedicineAndPublicHealth',
    'Philosophy',
    'Physics',
    'PoliticalScienceAndInternationalRelations',
    'Psychology',
    'Statistics'
]
module.exports = {
    resUrl,
    category,
    mp3FilePath,
    dbHost,
    dbUser,
    dbPwd
}