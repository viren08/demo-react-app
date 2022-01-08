pipeline {
    agent any
    stages {
         stage('Clean workspace') {
            steps {
                  cleanWs()
            }
        }
     /*   stage('Build') {
            steps {
                script {
                    docker.image('node:16.13.1-alpine').inside {             
                        sh 'npm install'
                        sh 'npm test'                     
                        withSonarQubeEnv("sonar") {
                            sh """${tool("sonar")}/bin/sonar-scanner \
                            -Dsonar.projectKey=react-app \
                            -Dsonar.sources=. \
                            -Dsonar.projectName=react-app \
                            -Dsonar.projectVersion=1.0 """
                        }
                    }
                }
            }
        }*/
        stage('docker build/push') {
            steps {
                script {
                    docker.withRegistry('https://ghcr.io', 'vani0123') {
                        def app = docker.build("vani-docker/docker-nodejs-demo:1.0.0-SNAPSHOT", '.').push()
                    }
                    //dockerImage = docker.build("vani-docker/docker-nodejs-demo:1.0.0-SNAPSHOT", '.')
                }
            }                                    
        }
    }
}
