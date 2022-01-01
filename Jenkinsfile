pipeline {
    agent any
    stages {
        /*stage('Initialize'){
            steps{
                script {
                    env.dockerHome = "${tool 'myDocker'}"
                    env.PATH="${env.dockerHome}/bin:${env.PATH}"
                    sh 'docker -v'
                }
            }
        }*/
        stage('Build') {
            steps {
                script {
                    docker.image('maven:3.3.3-jdk-8').inside {             
                    sh 'mvn --version'
                    }
                }
            }
        }
    }
}
