class test {
  constructor(game) {
    this.game = game;
    console.log(
      `
   ___      _                   __                         
  / _ \\_ __(_)___  ___  _ __   /__\\__  ___ __ _ _ __   ___ 
 / /_)/ '__| / __|/ _ \\| '_ \\ /_\\/ __|/ __/ _\` | '_ \\ / _ \\
/ ___/| |  | \\__ \\ (_) | | | //__\\__ \\ (_| (_| | |_) |  __/
\\/    |_|  |_|___/\\___/|_| |_\\__/|___/\\___\\__,_| .__/ \\___|
                                               |_|         
      `
    );
  }

  // This function is used to run the tests.
  run() {
    console.log("Running tests...");
    return true;
  }
}

module.exports = test;
