'use strict';

module.exports = {

  metadata: {
    name: 'helloWorld',
    properties: {
      human: { required: true, type: 'string' }
    },
    supportedActions: ['weekday', 'weekend']
  },

  invoke: async(context) => {
    // Retrieve the value of the 'human' component property.
    const { human } = context.properties();
    // determine date
    const now = new Date();
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
    const isWeekend = [0, 6].indexOf(now.getDay()) > -1;
    // Send two messages, and transition based on the day of the week
    context.reply(`Greetings ${human}`)
      .reply(`Today is ${now.toLocaleDateString()}, a ${dayOfWeek}`)
      .transition(isWeekend ? 'weekend' : 'weekday');   
  }
}