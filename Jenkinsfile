pipeline {
    agent any 
   
    
    stages { 
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/ThisaruDissanayake/Pipeline-to-Dockerize-applications--Assignmet_2_EG_2020_3912'
                }
            }
        }
        stage('Build Docker Image') {
            steps {  
                bat 'docker build -t thisarudissanayake/nodeapp-cuban:%BUILD_NUMBER% .'
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'test-dockerhubpassword', variable: 'thiasarumitd')]) {
    // some block
     bat'docker login -u thisarudissanayake -p ${thiasarumitd}'
}
              
            }
        }
        stage('Push Image') {
            steps {
                bat 'docker push thisarudissanayake/nodeapp-cuban:%BUILD_NUMBER%'
            }
        }
    }
    post {
        always {
            bat 'docker logout'
        }
    }
}