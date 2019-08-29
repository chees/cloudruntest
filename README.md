One time setup:

    gcloud config set run/region europe-west1
    gcloud config set run/platform managed

Build:

    gcloud builds submit --tag gcr.io/cloudruntestje/helloworld

Deploy:

    gcloud beta run deploy --image gcr.io/cloudruntestje/helloworld --allow-unauthenticated

Deploy with env vars:

    gcloud beta run deploy --image gcr.io/cloudruntestje/helloworld --set-env-vars TARGET=Amsterdam

Deploy with [Cloud Run Button](https://github.com/GoogleCloudPlatform/cloud-run-button):

[![Run on Google Cloud](https://storage.googleapis.com/cloudrun/button.svg)](https://console.cloud.google.com/cloudshell/editor?shellonly=true&cloudshell_image=gcr.io/cloudrun/button&cloudshell_git_repo=https://github.com/chees/cloudruntest)
