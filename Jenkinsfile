pipeline {
    agent any
    stages {
        stage('Build and Test') {
            steps {
                script {
                    docker.image('node:12.22.8').inside {             
                        sh 'npm install'
                        sh 'npm test'                     
                       /* withSonarQubeEnv("sonar") {
                            sh """${tool("sonar")}/bin/sonar-scanner \
                            -Dsonar.projectKey=react-app \
                            -Dsonar.sources=. \
                            -Dsonar.projectName=react-app \
                            -Dsonar.projectVersion=1.0 """
                        }*/
                    }
                }
            }
        }
        stage('docker build and push') {
            steps {
                script {
                    docker.withRegistry('https://ghcr.io', 'vani0123') {
                        def app = docker.build("vani0123/docker-nodejs-demo:1.0.0-SNAPSHOT", '.').push()
                    }
                }
            }                                    
        }
    }
    post {
        always {
            cleanWs()
        }
    }

}
