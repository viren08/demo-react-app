pipeline {
    agent any
    stage('Initialize'){
        def dockerHome = tool 'docker'
        env.PATH = "${dockerHome}/bin:${env.PATH}"
    }
    stages {
        stage('Build and Test') {
            steps {
                script {
                    docker.image('node:12.22.8').inside {             
                        sh 'npm install'
                        sh 'npm test'                     
                    }
                }
            }
        }
        stage('Docker build and push') {
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
