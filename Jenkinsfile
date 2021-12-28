pipeline {
    agent any
    stages {
        stage('Initialize'){
            steps{
                script {
                    env.dockerHome = "${tool 'myDocker'}"
                    env.PATH="${env.dockerHome}/bin:${env.PATH}"
                    sh 'chmod 777 /var/run/docker.sock'
                    sh 'docker -v'
                }
            }
        }
        stage('Build') {
            agent {
                docker {
                    image 'node:16.13.1-alpine'
                    // Run the container on the node specified at the top-level of the Pipeline, in the same workspace, rather than on a new node entirely:
                    reuseNode true
                }
            }
            steps {
                sh 'node --version'
            }
        }
    }
}
