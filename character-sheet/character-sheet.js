class CharacterSheet {
  constructor(config) {
    this.config = config;
    this.derived();
  }

  derived() {
    this.derivedAttributes();
    this.derivedGlory();
  }

  derivedAttributes() {
    attrs = this.config.attributes;
    attrs.damage = Math.round((attrs.size + attrs.str) / 6);
    attrs.healing = Math.round((attrs.str + attrs.con) / 3);
    attrs.movement = Math.round((attrs.str + attrs.dex) / 10);
    attrs.maxHp = Math.round(attrs.size + attrs.con);
    attrs.unconscious = Math.round(maxHp / 4);
  }

  derivedGlory() {
    session = this.config.session;
    earned = this.config.glory.earned;
    history = this.config.history;

    historicalGlory = history.reduce(getGlory);
    this.config.glory.totalGlory = session + earned + historicalGlory;
  }
}

function getGlory(event) {
  if (event.glory) {
    return event.glory;
  }
  return 0;
}
