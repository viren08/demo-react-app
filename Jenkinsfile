pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    docker.image('node:16.13.1-alpine').inside {             
                        sh 'npm install --only=dev'
                        sh 'npm test'
                    }
                }
            }
        }
    }
}
