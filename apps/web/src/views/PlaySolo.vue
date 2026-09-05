<template>
  <div class="play-solo">
    <shared-header />

    <v-container class="play-container">
      <v-row v-if="!ready">
        <v-col cols="12" class="text-center">
          <div class="grey--text mb-4">Pick a mastermind and scheme first.</div>
          <v-btn color="primary" block to="/solo">Back to Solo</v-btn>
        </v-col>
      </v-row>

      <template v-if="ready">
        <v-row align="center" class="score-row">
          <v-col cols="6" sm="5" class="py-2 d-flex align-center">
            <v-btn text small class="px-1" :to="soloTo">
              <v-icon left small>mdi-arrow-left</v-icon>
              <span class="hidden-xs-only">Setup</span>
            </v-btn>
            <v-btn
              icon
              :small="isXs"
              title="Change mastermind and scheme"
              @click="openEditor"
            >
              <v-icon :small="isXs">mdi-pencil</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="6" sm="7" class="py-2 text-right">
            <v-chip color="pink" class="white--text font-weight-bold score-chip" :small="isXs">
              {{ scoreLabel }}
            </v-chip>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6" class="pb-2">
            <div class="section-label d-flex align-center">
              <span>Mastermind</span>
              <v-btn icon x-small class="ml-1" title="Change mastermind" @click="openEditor('mastermind')">
                <v-icon small>mdi-pencil</v-icon>
              </v-btn>
            </div>
            <div class="mm-stack" :style="stackStyle">
              <div
                v-for="idx in tacticDeck.length"
                :key="'back-' + idx"
                class="tactic-back"
                :style="backStyle(idx)"
              />
              <div class="mm-front">
                <HeroCard v-if="mastermindCard.overrideType === 1" :height="cardHeight" :card="mastermindCard" />
                <VillainCard v-else-if="mastermindCard.overrideType === 4" :height="cardHeight" :card="mastermindCard" />
                <MastermindCard v-else :height="cardHeight" :card="mastermindCard" />
              </div>
            </div>
            <div class="caption mt-2 text-center">{{ tacticDeck.length }} tactic{{ tacticDeck.length === 1 ? "" : "s" }} remaining</div>
          </v-col>
          <v-col cols="12" md="6" class="pb-2">
            <div class="section-label d-flex align-center">
              <span>Scheme</span>
              <v-btn icon x-small class="ml-1" title="Change scheme" @click="openEditor('scheme')">
                <v-icon small>mdi-pencil</v-icon>
              </v-btn>
            </div>
            <div class="scheme-wrap">
              <MastermindCard v-if="schemeCard.overrideType === 2" :height="schemeHeight" :card="schemeCard" />
              <SchemeCard v-else :height="schemeHeight" :card="schemeCard" />
            </div>
          </v-col>
        </v-row>

        <v-row v-if="revealedTactics.length">
          <v-col cols="12" class="pb-1">
            <div class="section-label">Defeated Tactics</div>
          </v-col>
          <v-col
            v-for="tactic in revealedTactics"
            :key="tactic.uid || tactic.name"
            cols="6"
            sm="4"
            md="3"
            class="py-1"
          >
            <MastermindCard :height="defeatedHeight" :card="tactic" />
          </v-col>
        </v-row>
      </template>
    </v-container>

    <div v-if="ready" class="play-actions">
      <v-container class="py-2">
        <v-row dense>
          <v-col cols="4">
            <v-btn
              block
              :small="isXs"
              color="error"
              class="white--text action-btn"
              :disabled="gameOver"
              @click="revealMasterStrike"
            >
              <span class="hidden-xs-only">Master Strike</span>
              <span class="hidden-sm-and-up">Strike</span>
            </v-btn>
          </v-col>
          <v-col cols="4">
            <v-btn
              block
              :small="isXs"
              color="success"
              class="white--text action-btn"
              :disabled="gameOver"
              @click="revealTwist"
            >
              Twist
            </v-btn>
          </v-col>
          <v-col cols="4">
            <v-btn
              block
              :small="isXs"
              color="purple"
              class="white--text action-btn"
              :disabled="!canAttack"
              @click="attack"
            >
              Attack
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-dialog v-model="showEditor" :fullscreen="isXs" max-width="520" scrollable>
      <v-card class="dialog-card">
        <v-card-title>Change Setup</v-card-title>
        <v-card-text>
          <v-autocomplete
            ref="mastermindInput"
            v-model="draftMastermindId"
            :items="mastermindOptions"
            label="Mastermind"
            item-text="label"
            item-value="id"
            class="mt-2"
          />
          <v-autocomplete
            ref="schemeInput"
            v-model="draftSchemeId"
            :items="schemeOptions"
            label="Scheme"
            item-text="label"
            item-value="id"
          />
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-row dense class="ma-0 action-row">
            <v-col cols="6">
              <v-btn block large @click="showEditor = false">Cancel</v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn
                block
                large
                color="pink"
                class="white--text"
                :disabled="!canApplyEditor"
                @click="applyEditor"
              >
                Apply
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="showMasterStrike" :fullscreen="isXs" max-width="720" scrollable>
      <v-card class="dialog-card">
        <v-card-title class="error white--text">Master Strike</v-card-title>
        <v-card-text class="pt-6 reveal-body">
          <div v-if="!masterStrikeAbilities.length" class="grey--text">No Master Strike text on this mastermind.</div>
          <div v-for="(ability, idx) in masterStrikeAbilities" :key="idx" class="mb-4">
            <shared-description-group :description="ability" />
          </div>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-btn block large @click="showMasterStrike = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="showTwist" :fullscreen="isXs" max-width="800" scrollable>
      <v-card class="dialog-card">
        <v-card-title class="success white--text">Twist</v-card-title>
        <v-card-text class="pt-6 twist-body">
          <div v-if="!twistAbilities.length" class="grey--text">No Twist text on this scheme.</div>
          <div v-for="(ability, idx) in twistAbilities" :key="idx" class="mb-6">
            <shared-description-group :description="ability" />
          </div>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-btn block large @click="showTwist = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="showTacticReveal" :fullscreen="isXs" max-width="480" persistent scrollable>
      <v-card v-if="currentReveal" class="dialog-card">
        <v-card-title>Tactic Revealed</v-card-title>
        <v-card-text class="reveal-card-wrap">
          <MastermindCard :height="revealHeight" :card="currentReveal" />
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-btn block large color="pink" class="white--text" @click="closeTacticReveal">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="awaitingFinalBlow" :fullscreen="isXs" max-width="420" persistent>
      <v-card class="dialog-card">
        <v-card-title>FINAL blow?</v-card-title>
        <v-card-text>You have attacked the mastermind 4 times. Go for the final blow?</v-card-text>
        <v-card-actions class="pa-4">
          <v-row dense class="ma-0 action-row">
            <v-col cols="6">
              <v-btn block large @click="declineFinalBlow">No</v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn block large color="pink" class="white--text" @click="acceptFinalBlow">Yes</v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="showEndGame" :fullscreen="isXs" max-width="420" persistent>
      <v-card class="dialog-card">
        <v-card-title>Game Over</v-card-title>
        <v-card-text class="text-center">
          <div class="subtitle-1 mb-2">Total MasterMind POINTS</div>
          <div class="text-h2 pink--text font-weight-bold">{{ points }}</div>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-row dense class="ma-0 action-row">
            <v-col cols="12" sm="6">
              <v-btn block large :to="soloTo">Back to Solo</v-btn>
            </v-col>
            <v-col cols="12" sm="6">
              <v-btn block large color="success" class="white--text" @click="playAgain">Play Again</v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <shared-footer />
  </div>
</template>

<script>
import HeroCard from "../components/cards/HeroCard.vue";
import MastermindCard from "../components/cards/MastermindCard.vue";
import SchemeCard from "../components/cards/SchemeCard.vue";
import VillainCard from "../components/cards/VillainCard.vue";

import { getAllMasterminds, getAllSchemes } from "../services/cardUtils";
import { toInteger } from "../services/queryUtils";
import { randomNumber } from "../services/randomUtils";

const allMasterminds = getAllMasterminds();
const allSchemes = getAllSchemes();

const mastermindOptions = allMasterminds
  .map(mm => ({
    id: mm.id,
    label: mm.filterName || mm.name,
  }))
  .sort((a, b) => a.label.localeCompare(b.label));

const schemeOptions = allSchemes
  .map(scheme => ({
    id: scheme.id,
    label: scheme.filterName || scheme.name,
  }))
  .sort((a, b) => a.label.localeCompare(b.label));

const shuffle = items => {
  const result = items.slice();
  let i = result.length;
  while (i > 1) {
    i -= 1;
    const j = randomNumber(0, i + 1);
    const current = result[i];
    result[i] = result[j];
    result[j] = current;
  }
  return result;
};

const abilityLabel = ability => {
  if (!Array.isArray(ability)) return "";
  const boldPart = ability.find(part => part && part.bold);
  if (!boldPart) return "";
  return String(boldPart.bold).toLowerCase();
};

const extractAbilities = (cards, prefixes) => {
  const result = [];
  cards.forEach(card => {
    if (!card.abilities) return;
    card.abilities.forEach(ability => {
      const label = abilityLabel(ability);
      if (!label) return;
      if (prefixes.some(prefix => label.startsWith(prefix))) result.push(ability);
    });
  });
  return result;
};

const pickMastermindCard = cards => {
  const standard = cards.find(card => !card.tactic && !card.epic && !card.transformed);
  if (standard) return standard;
  return cards.find(card => !card.tactic);
};

const pickSchemeCard = cards => {
  const standard = cards.find(card => !card.transformed && !card.unveiled);
  if (standard) return standard;
  return cards[0];
};

const cardPoints = card => {
  if (!card) return 0;
  if (typeof card.vpNum === "number" && card.vpNum > 0) return card.vpNum;
  const parsed = Number(card.vp);
  if (Number.isNaN(parsed) || parsed <= 0) return 0;
  return parsed;
};

export default {
  name: "PlaySolo",
  components: {
    HeroCard,
    MastermindCard,
    SchemeCard,
    VillainCard,
  },
  data: () => ({
    mastermindGroup: null,
    schemeGroup: null,
    mastermindCard: null,
    schemeCard: null,
    tacticDeck: [],
    revealedTactics: [],
    currentReveal: null,
    points: 0,
    attackCount: 0,
    showMasterStrike: false,
    showTwist: false,
    showTacticReveal: false,
    awaitingFinalBlow: false,
    finalBlowAccepted: false,
    gameOver: false,
    showEndGame: false,
    showEditor: false,
    draftMastermindId: null,
    draftSchemeId: null,
  }),
  created() {
    this.boot();
  },
  computed: {
    isXs() {
      return this.$vuetify.breakpoint.xs;
    },
    scoreLabel() {
      if (this.isXs) return "POINTS " + this.points;
      return "MasterMind POINTS: " + this.points;
    },
    ready() {
      return !!(this.mastermindCard && this.schemeCard);
    },
    mastermindOptions() {
      return mastermindOptions;
    },
    schemeOptions() {
      return schemeOptions;
    },
    canApplyEditor() {
      return this.draftMastermindId != null && this.draftSchemeId != null;
    },
    soloTo() {
      const query = {};
      if (this.mastermindGroup) query.mm = "" + this.mastermindGroup.id;
      if (this.schemeGroup) query.scheme = "" + this.schemeGroup.id;
      return { path: "/solo", query };
    },
    canAttack() {
      if (this.gameOver) return false;
      if (this.awaitingFinalBlow) return false;
      if (this.showTacticReveal) return false;
      if (this.attackCount >= 5) return false;
      if (this.attackCount >= 4 && !this.finalBlowAccepted) return false;
      return true;
    },
    masterStrikeAbilities() {
      if (!this.mastermindCard) return [];
      return extractAbilities([this.mastermindCard], ["master strike"]);
    },
    twistAbilities() {
      if (!this.schemeGroup) return [];
      return extractAbilities(this.schemeGroup.cards, ["twist"]);
    },
    cardHeight() {
      if (this.$vuetify.breakpoint.xs) return 260;
      if (this.$vuetify.breakpoint.sm) return 300;
      return 340;
    },
    schemeHeight() {
      if (this.$vuetify.breakpoint.xs) return 280;
      if (this.$vuetify.breakpoint.sm) return 320;
      return 360;
    },
    revealHeight() {
      if (this.$vuetify.breakpoint.xs) return 240;
      return 320;
    },
    defeatedHeight() {
      if (this.$vuetify.breakpoint.xs) return 220;
      return 260;
    },
    stackOffset() {
      if (this.$vuetify.breakpoint.xs) return 4;
      return 8;
    },
    stackStyle() {
      const extra = this.tacticDeck.length * this.stackOffset;
      return {
        marginBottom: extra + "px",
      };
    },
  },
  methods: {
    boot() {
      const query = this.$route.query;
      const mastermind = allMasterminds.find(mm => mm.id === toInteger(query.mm));
      const scheme = allSchemes.find(s => s.id === toInteger(query.scheme));
      if (!mastermind || !scheme) return;
      this.mastermindGroup = mastermind;
      this.schemeGroup = scheme;
      this.resetGame();
    },
    resetGame() {
      const cards = this.mastermindGroup.cards || [];
      this.mastermindCard = pickMastermindCard(cards);
      this.schemeCard = pickSchemeCard(this.schemeGroup.cards || []);
      this.tacticDeck = shuffle(cards.filter(card => card.tactic && !card.epic));
      this.revealedTactics = [];
      this.currentReveal = null;
      this.points = 0;
      this.attackCount = 0;
      this.showMasterStrike = false;
      this.showTwist = false;
      this.showTacticReveal = false;
      this.awaitingFinalBlow = false;
      this.finalBlowAccepted = false;
      this.gameOver = false;
      this.showEndGame = false;
    },
    playAgain() {
      this.resetGame();
    },
    syncQuery() {
      if (!this.mastermindGroup || !this.schemeGroup) return;
      this.$router.replace({
        path: this.$route.path,
        query: {
          mm: "" + this.mastermindGroup.id,
          scheme: "" + this.schemeGroup.id,
        }
      });
    },
    openEditor(focus) {
      this.draftMastermindId = this.mastermindGroup && this.mastermindGroup.id;
      this.draftSchemeId = this.schemeGroup && this.schemeGroup.id;
      this.showEditor = true;
      this.$nextTick(() => {
        const input = focus === "scheme" ? this.$refs.schemeInput : this.$refs.mastermindInput;
        if (input && input.focus) input.focus();
      });
    },
    applyEditor() {
      const mastermind = allMasterminds.find(mm => mm.id === this.draftMastermindId);
      const scheme = allSchemes.find(s => s.id === this.draftSchemeId);
      if (!mastermind || !scheme) return;

      const mastermindChanged = !this.mastermindGroup || this.mastermindGroup.id !== mastermind.id;
      this.mastermindGroup = mastermind;
      this.schemeGroup = scheme;
      if (mastermindChanged) {
        this.resetGame();
        this.showEditor = false;
        this.syncQuery();
        return;
      }

      this.schemeCard = pickSchemeCard(scheme.cards || []);
      this.showEditor = false;
      this.syncQuery();
    },
    backStyle(idx) {
      const offset = idx * this.stackOffset;
      return {
        transform: `translate(${offset}px, ${offset}px)`,
        zIndex: idx,
      };
    },
    revealMasterStrike() {
      this.showMasterStrike = true;
    },
    revealTwist() {
      this.showTwist = true;
    },
    attack() {
      if (!this.canAttack) return;
      if (this.tacticDeck.length) {
        this.drawTactic();
        return;
      }
      this.drawFinalBlow();
    },
    drawTactic() {
      const next = this.tacticDeck[0];
      this.tacticDeck = this.tacticDeck.slice(1);
      this.revealedTactics = this.revealedTactics.concat([next]);
      this.points += cardPoints(next);
      this.attackCount += 1;
      this.currentReveal = next;
      this.showTacticReveal = true;
    },
    drawFinalBlow() {
      this.points += cardPoints(this.mastermindCard);
      this.attackCount += 1;
      this.currentReveal = this.mastermindCard;
      this.showTacticReveal = true;
    },
    closeTacticReveal() {
      this.showTacticReveal = false;
      this.currentReveal = null;
      if (this.attackCount >= 5) {
        this.endGame();
        return;
      }
      if (this.attackCount === 4 && !this.finalBlowAccepted) {
        this.awaitingFinalBlow = true;
      }
    },
    acceptFinalBlow() {
      this.awaitingFinalBlow = false;
      this.finalBlowAccepted = true;
    },
    declineFinalBlow() {
      this.awaitingFinalBlow = false;
      this.endGame();
    },
    endGame() {
      this.gameOver = true;
      this.showEndGame = true;
    },
  }
}
</script>

<style lang="scss" scoped>
.play-solo {
  overflow-x: hidden;
}

.play-container {
  padding-bottom: 88px;
}

.score-row {
  margin-top: 0;
}

.score-chip {
  max-width: 100%;
  white-space: nowrap;
}

.section-label {
  font-weight: 700;
  margin-bottom: 8px;
}

.mm-stack,
.scheme-wrap,
.reveal-card-wrap {
  position: relative;
  width: calc(100% - 40px);
  max-width: 280px;
  margin: 0 auto;
}

.scheme-wrap ::v-deep .scheme-card,
.scheme-wrap ::v-deep .mm-card {
  height: auto !important;
  min-height: 280px;
  padding-bottom: 16px;
}

.mm-front ::v-deep .mm-card,
.mm-front ::v-deep .hero-card,
.mm-front ::v-deep .villain-card {
  height: auto !important;
  min-height: 260px;
  padding-bottom: 80px;
  overflow: visible;
}

.tactic-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background: linear-gradient(160deg, #7b1fa2 0%, #4a148c 100%);
  border: solid 1px rgba(#000, .25);
  box-shadow: 0 2px 6px rgba(#000, .2);
}

.mm-front {
  position: relative;
  z-index: 20;
}

.play-actions {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 8;
  background: #fff;
  box-shadow: 0 -2px 10px rgba(#000, .16);
}

.action-btn {
  min-height: 44px;
}

.action-row {
  width: 100%;
}

.reveal-body {
  font-size: 16px;
  line-height: 1.5;
}

.twist-body {
  font-size: 20px;
  line-height: 1.5;
}

.dialog-card {
  min-height: 100%;
}

@media (min-width: 600px) {
  .play-container {
    padding-bottom: 100px;
  }

  .reveal-body {
    font-size: 18px;
  }

  .twist-body {
    font-size: 24px;
  }

  .dialog-card {
    min-height: auto;
  }
}
</style>
