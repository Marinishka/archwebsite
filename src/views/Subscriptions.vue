<template>
  <b-row>
    <b-col>
      <h3>Subscriptions</h3>
      <hr>
      <b-alert show variant="warning" class="text-dark">
        <b-icon-check2-circle variant="success"></b-icon-check2-circle> Currently, you have <b>Basic plan</b> activated
        <a href="" class="float-right text-muted"><small>Cancel subscription</small></a>
      </b-alert>
      <b-card class="border-2">
        <b-card-text>
          <b-row>
            <b-col>
              <h4>Basic</h4>
              <div class="mt-4">
                <div class="mt-1"><b-icon-check-circle variant="dark"></b-icon-check-circle> 7 scenes</div>
                <div class="mt-1"><b-icon-check-circle variant="dark"></b-icon-check-circle> 10 mb storage</div>
                <div class="mt-1"><b-icon-check-circle class="muted-text"></b-icon-check-circle> <span class="muted-text">Other options</span></div>
                <div class="mt-1"><b-icon-check-circle class="muted-text"></b-icon-check-circle> <span class="muted-text">Other preferences</span></div>
              </div>
            </b-col>
            <b-col>
              <h1 class="float-right">Free</h1>
              <b-button variant="secondary" block disabled class="subscription-button text-white muted">Activated</b-button>  
            </b-col>
          </b-row>
        </b-card-text>
      </b-card>
      <b-card class="mt-4 border-2" border-variant="primary">
        <b-card-text>
          <b-row>
            <b-col>
              <h4 class="subscription-1-text">Advanced</h4>
              <div class="mt-4">
                <div class="mt-1"><b-icon-check-circle variant="dark"></b-icon-check-circle> 7 scenes</div>
                <div class="mt-1"><b-icon-check-circle variant="dark"></b-icon-check-circle> 10 mb storage</div>
                <div class="mt-1"><b-icon-check-circle></b-icon-check-circle> Other options</div>
                <div class="mt-1"><b-icon-check-circle class="muted-text"></b-icon-check-circle> <span class="muted-text">Other preferences</span></div>
              </div>
            </b-col>
            <b-col>
              <h1 class="float-right">10$</h1>
              <div class="clearfix"></div>
              <span class="float-right muted-text"><b>/ month</b></span>
              <b-button variant="primary" block class="subscription-button subscription-1-button text-white">Upgrade <b-icon-arrow-right scale=0.75 class="ml-2"></b-icon-arrow-right></b-button>  
            </b-col>
          </b-row>
        </b-card-text>
      </b-card>
      <b-card class="mt-4 border-2">
        <b-card-text>
          <b-row>
            <b-col>
              <h4 class="subscription-2-text">Business</h4>
              <div class="mt-4">
                <div class="mt-1"><b-icon-check-circle variant="dark"></b-icon-check-circle> 7 scenes</div>
                <div class="mt-1"><b-icon-check-circle variant="dark"></b-icon-check-circle> 10 mb storage</div>
                <div class="mt-1"><b-icon-check-circle></b-icon-check-circle> Other options</div>
                <div class="mt-1"><b-icon-check-circle></b-icon-check-circle> Other preferences</div>
              </div>
            </b-col>
            <b-col>
              <h1 class="float-right">49$</h1>
              <div class="clearfix"></div>
              <span class="float-right muted-text"><b>/ month</b></span>
              <b-button variant="primary" block class="subscription-button subscription-2-button text-white">Upgrade <b-icon-arrow-right scale=0.75 class="ml-2"></b-icon-arrow-right></b-button>  
            </b-col>
          </b-row>
        </b-card-text>
      </b-card>
    </b-col>
  </b-row>
</template>