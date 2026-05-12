import { internal_checklistStore } from 'storybook/manager-api';

const CHECKLIST_ITEM_IDS = [
  'guidedTour',
  'onboardingSurvey',
  'renderComponent',
  'moreComponents',
  'moreStories',
  'controls',
  'viewports',
  'organizeStories',
  'installVitest',
  'installA11y',
  'runTests',
  'writeInteractions',
  'accessibilityTests',
  'installChromatic',
  'visualTests',
  'coverage',
  'ciTests',
  'installDocs',
  'autodocs',
  'mdxDocs',
  'publishStorybook',
  'whatsNewStorybook10',
];

function muteWhenReady() {
  try {
    internal_checklistStore.mute(CHECKLIST_ITEM_IDS);
  } catch {
    setTimeout(muteWhenReady, 100);
  }
}

muteWhenReady();
