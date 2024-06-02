import CONSTANTS from './constants';

export default function registerSettings() {
  game.settings.register(CONSTANTS.MODULE_ID, 'enabled', {
    name: `${CONSTANTS.MODULE_ID}.Settings.Enabled.Name`,
    hint: `${CONSTANTS.MODULE_ID}.Settings.Enabled.Hint`,
    scope: 'client',
    type: Boolean,
    default: true,
    config: true,
  });

  game.settings.register(CONSTANTS.MODULE_ID, 'actorPermissionsRequired', {
    name: `${CONSTANTS.MODULE_ID}.Settings.ActorPermissionsRequired.Name`,
    hint: `${CONSTANTS.MODULE_ID}.Settings.ActorPermissionsRequired.Hint`,
    scope: 'world',
    type: Number,
    default: '0',
    config: true,
    restricted: true,
    choices: {
      0: 'None',
      1: 'Limited',
      2: 'Observer',
      3: 'Owner',
    },
  });

  game.settings.register(CONSTANTS.MODULE_ID, 'tooltipSmartPlacement', {
    name: `${CONSTANTS.MODULE_ID}.Settings.tooltipSmartPlacement.Name`,
    hint: `${CONSTANTS.MODULE_ID}.Settings.tooltipSmartPlacement.Hint`,
    scope: 'client',
    type: Boolean,
    default: true,
    config: true,
  });

  game.settings.register(CONSTANTS.MODULE_ID, 'previewDelay', {
    name: `${CONSTANTS.MODULE_ID}.Settings.PreviewDelayN`,
    hint: `${CONSTANTS.MODULE_ID}.Settings.PreviewDelayH`,
    scope: 'world',
    type: Number,
    default: 500,
    config: true,
    // onChange: (s) => { },
    // @ts-ignore
    range: { min: 100, max: 3000, step: 100 },
  });

  game.settings.register(CONSTANTS.MODULE_ID, 'tooltipColor', {
    name: `${CONSTANTS.MODULE_ID}.Settings.Tooltip.Color.title`,
    hint: '',
    scope: 'world',
    config: true,
    type: String,
    default: 'Default',
    choices: {
      default: 'Default',
      blue: 'Blue',
      dark: 'Dark',
      green: 'Green',
      light: 'Light',
      orange: 'Orange',
      purple: 'Purple',
      red: 'Red',
      yellow: 'Yellow',
    },
  });

  game.settings.register(CONSTANTS.MODULE_ID, 'tooltipPlacement', {
    name: `${CONSTANTS.MODULE_ID}.Settings.Tooltip.Placement.title`,
    hint: '',
    scope: 'world',
    config: true,
    type: String,
    default: 'East',
    choices: {
      'nw-alt': 'North West Alt',
      nw: 'North West',
      n: 'North',
      ne: 'North East',
      'ne-alt': 'North East Alt',
      w: 'West',
      e: 'East',
      'sw-alt': 'South West Alt',
      sw: 'South West',
      s: 'South',
      se: 'South East',
      'se-alt': 'South East Alt',
    },
  });

  game.settings.register(CONSTANTS.MODULE_ID, 'fontSize', {
    name: `${CONSTANTS.MODULE_ID}.Settings.fontSizeN`,
    hint: `${CONSTANTS.MODULE_ID}.Settings.fontSizeH`,
    scope: 'client',
    type: String,
    default: '',
    config: true,
  });

  game.settings.register(CONSTANTS.MODULE_ID, 'maxWidth', {
    name: `${CONSTANTS.MODULE_ID}.Settings.maxWidthN`,
    hint: `${CONSTANTS.MODULE_ID}.Settings.maxWidthH`,
    scope: 'client',
    type: Number,
    default: 800,
    config: true,
  });

  game.settings.register(CONSTANTS.MODULE_ID, 'tooltipUseMousePositionForCoordinates', {
    name: `${CONSTANTS.MODULE_ID}.Settings.tooltipUseMousePositionForCoordinatesN`,
    hint: `${CONSTANTS.MODULE_ID}.Settings.tooltipUseMousePositionForCoordinatesH`,
    scope: 'world',
    config: true,
    default: true,
    type: Boolean,
  });

  // ============================================
  // Pin Players Default
  // =============================================

  game.settings.register(CONSTANTS.MODULE_ID, 'playerPinDefaultsGlobal', {
    name: `${CONSTANTS.MODULE_ID}.Settings.playerPinDefaults.globalN`,
    hint: `${CONSTANTS.MODULE_ID}.Settings.playerPinDefaults.globalH`,
    scope: 'world',
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(CONSTANTS.MODULE_ID, 'playerPinDefaultsAnchorPoint', {
    name: `${CONSTANTS.MODULE_ID}.Settings.playerPinDefaults.anchorPointN`,
    hint: `${CONSTANTS.MODULE_ID}.Settings.playerPinDefaults.anchorPointH`,
    scope: 'world',
    config: true,
    type: Number,
    default: 1,
    choices: {
      0: 'Center',
      1: 'Bottom',
      2: 'Top',
      3: 'Left',
      4: 'Right',
    },
  });

  game.settings.register(CONSTANTS.MODULE_ID, 'debug', {
    name: `${CONSTANTS.MODULE_ID}.Settings.debugN`,
    hint: `${CONSTANTS.MODULE_ID}.Settings.debugH`,
    scope: 'world',
    config: true,
    type: Boolean,
    default: false,
  });
}
