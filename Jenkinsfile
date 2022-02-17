pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
                sh 'yarn run cy:open cy:ci'
            }

            post {
                always {
                    junit 'results/test-output/test-output-*.xml'
                }
            }
        }
    }
}