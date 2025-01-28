pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'NodeJS16', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Clone Repository') {
            steps {
                // Pull the project from GitHub
                git branch: 'main', url: 'https://github.com/your-username/your-repo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                // Build the React project
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // Copy the build folder to a server or deploy locally
                sh '''
                mkdir -p /var/www/react-app
                cp -r build/* /var/www/react-app/
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}