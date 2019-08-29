gcloud config set run/region europe-west1
gcloud config set run/platform managed

gcloud builds submit --tag gcr.io/cloudruntestje/helloworld

gcloud beta run deploy --image gcr.io/cloudruntestje/helloworld --allow-unauthenticated


gcloud beta run deploy --image gcr.io/cloudruntestje/helloworld --set-env-vars TARGET=Amsterdam

