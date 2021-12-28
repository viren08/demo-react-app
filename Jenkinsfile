pipeline {
    agent {
        docker { image 'node:16.13.1-alpine' }
    }
    stages {
        stage('Initialize'){
            steps{
                script {
                    env.dockerHome = "${tool 'myDocker'}"
                    env.PATH="${env.dockerHome}/bin:${env.PATH}"
                    sh 'docker --v'
                }
            }
        }
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}
