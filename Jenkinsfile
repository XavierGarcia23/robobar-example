pipeline {
    agent any

    stages {
        stage('Build') {
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