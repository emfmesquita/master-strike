<template>
  <div class="donations">
    <shared-header />

    <v-container class="pt-10 px-6">
      <v-row>
        <v-col cols="12" offset="0" lg="8" offset-lg="2">
          <p>
            Hello folks, Kabalistus here. Right now we do not pay for hosting, but if the site gets popular and has too much traffic it will stop working at some point in the month until a new one starts. Not something to worry about now at least.
          </p>
          <p>
            But if you want to give us an extra motivation boost I will leave my Paypal and Patreon.
          </p>
          <br/>

          <strong>Paypal</strong>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="YAT28BLY9U2GL" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
          <br/>

          <strong>Patreon</strong><br/>
          <a href="https://www.patreon.com/bePatron?u=626606" target="_blank" data-patreon-widget-type="become-patron-button">Become a Patron!</a>

          <br/><br/>
          <p>
            Thank you very much for the support!
          </p>
        </v-col>
      </v-row>
    </v-container>

    <shared-footer />
  </div>
</template>

<script>
export default {
  name: "Donations",
  data: () => ({}),
  mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://c6.patreon.com/becomePatronButton.bundle.js');
    document.head.appendChild(recaptchaScript)
  },
}
</script>
