pipeline {
    agent {
        docker { image 'node:16.13.1-alpine' }
    }
    tools {
        dockerTool 'myDocker'
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}
