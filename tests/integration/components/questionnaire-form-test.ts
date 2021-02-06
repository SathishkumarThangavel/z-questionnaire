import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | questionnaire-form', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{questionnaire-form}}`);

    assert.equal(this.element?.textContent?.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#questionnaire-form}}
        template block text
      {{/questionnaire-form}}
    `);

    assert.equal(this.element?.textContent?.trim(), 'template block text');
  });
});
