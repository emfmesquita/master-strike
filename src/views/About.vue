<template>
  <div class="about">
    <shared-header />

    <v-container class="pt-10 px-6">
      <v-row>
        <v-col cols="12" offset="0" lg="8" offset-lg="2">
          <v-btn 
            small
            color="primary"
            href="https://upperdeckstore.com/games-collectibles/legendary.html"
            target="_blank"
            class="ma-1"
          >
            Buy Legendary
          </v-btn>
          <v-btn 
            small
            color="primary"
            href="https://github.com/emfmesquita/master-strike/issues"
            target="_blank"
            class="ma-1"
          >
            Report Bug
          </v-btn>
          <v-btn small color="primary" to="/donate" class="ma-1">
            Donate
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" offset="0" lg="8" offset-lg="2">
          <h2>Message to Visitors</h2>

          <p>
            Hi, this is Kabalistus and Eruanne. We are a couple that plays "Legendary: A Marvel Deck Building Game," and after buying a handful of expansions it became quite difficult to decide which heroes to use. Especially, when the scheme and/or mastermind gave bonus or disadvantages for specific teams or hero classes.
          </p>

          <p>
            So we decided to create an easier method to search hero cards than looking up them manually or searching on a big text page or spreadsheet. That is how Master Strike was born.
          </p>

          <p>
            Do not forget this is an unofficial page. And please use it for research only. All card contents are <a href="http://www.upperdeck.com/" target="_blank">Upper Deck®</a> creatively owned. We strongly incentive you to <a href="https://upperdeckstore.com/games-collectibles/legendary.html" target="_blank">buy the game</a>, it is very fun and we love it.
          </p>

          <p>
            We plan to keep this page up to date with new expansions and to add more card types, as our free time allows. If you want to give us a morale boost check our <router-link to="/donate">donate page</router-link>.
          </p>

          <p>
            Also, if you find any errors on cards, or have any suggestions, please file a new issue on our <a href="https://github.com/emfmesquita/master-strike/issues" target="_blank">project page on Github</a>.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" offset="0" lg="8" offset-lg="2">
          <h2>Shout-outs</h2>

          <ul>
            <li>
              Humongous shout-out to our comunity that built the <a href="https://www.boardgamegeek.com/wiki/page/Legendary_Marvel_Complete_Card_Text" target="_blank">wiki page with all cards text</a>. And to CaseyFowler that created <a href="https://marveldbg.wordpress.com/" target="_blank">a blog with all card images</a>. Those resources were fundamental to create Master Strike.
            </li>
            <li>
              Huge shout-out to @normware on BGG, he provided all villain groups in a format that I could import to the site way easier than adding all of them manually. That reduced the work at least in 10x. Thank you Neil!
            </li>
            <li>
              Shout-out to House of Mao Gaming (<a href="https://www.twitch.tv/houseofmao" style="text-decoration: none;" target="_blank"><v-icon>mdi-twitch</v-icon></a>, <a href="https://www.youtube.com/channel/UCEN4p2Ugc8tsVYRO--unkcg" style="text-decoration: none;" target="_blank"><v-icon>mdi-youtube</v-icon></a>, <a href="https://twitter.com/houseofmao" style="text-decoration: none;" target="_blank"><v-icon>mdi-twitter</v-icon></a>) for sharing the Annihilation expansion cards before I could grab them. Thank you!
            </li>
            <li>
              Shout-out to Bageltop Games (<a href="https://www.twitch.tv/bageltopgames" style="text-decoration: none;" target="_blank"><v-icon>mdi-twitch</v-icon></a>, <a href="https://www.youtube.com/channel/UCc4LXeuOzl1xndGXk2_8hbQ" style="text-decoration: none;" target="_blank"><v-icon>mdi-youtube</v-icon></a>, <a href="https://twitter.com/BageltopGames" style="text-decoration: none;" target="_blank"><v-icon>mdi-twitter</v-icon></a>) for sharing the Messiah Complex expansion cards (including typing all text!!) before I could grab them. Thank you!
            </li>
          </ul>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" offset="0" lg="8" offset-lg="2">
          <h2 id="fairuse">Fair Use Statement</h2>

          <p>
            Fair use refers to the right to reproduce, use, and share copyrighted works of cultural production without direct permission from or payment to the original copyright holders. It is a designation that is assigned to projects that use copyrighted materials for purposes that include research and content understanding. When a project is protected under fair use provisions, the producers of that project are not subject to sanctions related to copyright infringement. 
          </p>

          <p>
            The material is presented here in a way where we make minimal use and made sure we are not distributing or mischaracterizing the original content since the objective is using it entirely non-profit educational purposes. 
          </p>

          <p>
            And all rights are reserved to the here said owners of this game “Upper Deck®”. We do not support any actions in which the materials on this site are used for purposes that extend beyond fair use.
          </p>

          <p>
            For additional information on copyright law and fair use, please visit <a href="http://www.copyright.gov/fls/fl102.html" target="_blank">http://www.copyright.gov/fls/fl102.html</a>.
          </p>
        </v-col>
      </v-row>
    </v-container>

    <shared-footer />
  </div>
</template>
