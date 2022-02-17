pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'yarn install cy:open cy:ci'
            }

            post {
                always {
                    nodejs('node-14.18.2') {

                    }
                }
            }
        }
    }
}