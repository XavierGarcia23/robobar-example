pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                nodejs('node-14.18.2') {
                    sh 'yarn install cy:ci'
                }
            }

            post {
                always {
                    junit 'results/*.xml'
                }
            }
        }
    }
}