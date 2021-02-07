import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | single-question', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('number', 0);
    await render(hbs`<SingleQuestion @index={{this.number}} />`);

    assert.equal(this.element?.textContent?.trim(), 'Frage 1');
  });

  test('show next button', async function(assert) {
    this.set('number', 0);
    this.set('question', { question_type: 'text'});

    await render(hbs`<SingleQuestion @index={{this.number}} @question={{this.question}} />`);

    assert.equal(this.element?.querySelector('.button')?.textContent?.trim(), 'Next');
  });

  test('show submit button', async function(assert) {
    this.set('question', { question_type: 'text'});
    this.set('isLastQuestion', true);

    await render(hbs`<SingleQuestion @question={{this.question}} @isLastQuestion={{this.isLastQuestion}}/>`);

    assert.equal(this.element?.querySelector('.button')?.textContent?.trim(), 'Submit');
  });

  test('show question', async function(assert) {
    this.set('question', { headline: 'What kind of insurance you like to choose?'});

    await render(hbs`<SingleQuestion @question={{this.question}} />`);

    assert.equal(this.element?.querySelector('h2')?.textContent?.trim(), 'What kind of insurance you like to choose?');
  });
});
