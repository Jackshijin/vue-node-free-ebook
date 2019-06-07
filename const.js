const env = require('./env')
let resUrl
let mp3FilePath
if (env === 'dev') {
    resUrl = 'http://172.20.81.135:8081'
    mp3FilePath = '/Users/jin/upload/mp3'
} else if (env === 'prod') {
    resUrl = 'http://120.78.222.89'
    mp3FilePath = '/root/nginx/upload/mp3'
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
    mp3FilePath
}