pipeline {
    agent any

    stages {
        stage('Build') {
            nodejs('node-14.18.2') {
                // some block
            steps {
                sh 'yarn run cy:open cy:ci'
            }
            }

            post {
                always {
                    junit 'results/test-output/test-output-*.xml'
                }
            }
        }
    }
}