pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
                sh './yarn run test cy:ci'
            }

            post {
                always {
                    nodejs 'results/test-output/test-output-*.xml'
                }
            }
        }
    }
}