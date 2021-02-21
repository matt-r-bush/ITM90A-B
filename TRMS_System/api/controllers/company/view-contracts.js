module.exports = {


  friendlyName: 'View contracts',


  description: 'Display "Contracts" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/company/contracts'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
