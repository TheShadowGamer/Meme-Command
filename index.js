const { React } = require("powercord/webpack");
const { Plugin } = require("powercord/entities");

module.exports = class MemeCmd extends Plugin {
  startPlugin() {
    this.registerCommand("meme", [], "Send a random meme.", "{c}", () => {
      let meme = randomMeme();
      return {
        send: true,
        result: meme,
      };
    });
  }

  pluginWillUnload() {
    powercord.api.commands.unregisterCommand("meme");
  }
};

function randomMeme() {
  const memes = [
    "747240013606944808/1080p.mov",
    "747240057345409105/berb.mov",
    "747240063104057485/banana.mp4",
    "747240065171718255/carl.mov",
    "747240068867031100/coke_a_cola.mp4",
    "747240094099832842/cursed_2.mp4",
    "747240094011752588/crab.mp4",
    "747240106699653280/DO_NOT_CLICK_THIS_VIDEO.mp4",
    "747240111271575552/Do_You_Want_to_Explode.mp4",
    "747240126140383272/falling_down_the_stairs.mp4",
    "747240140472189049/My_shoes_untied.mp4",
    "747240171203723274/New_kitchen_gun.mp4",
    "747240172583649300/Not_Scientifically_Possible.mp4",
    "747240200010465391/pickle.mp4",
    "747240204456296458/Pug_dancing_to_fnaf_music_box.mp4",
    "747240219471904880/Steven_Universe_Fear.mp4",
    "747240236874203156/super_toilet_grenade_3_smaller_file.mp4",
    "747240242423005194/terror.mp4",
    "747240287344001134/video0_90.mp4",
    "747240293203705936/video0_80.mp4",
    "747240294302613635/wE_sMelL_pEnNieS.mp4",
    "747240440356536380/bounce.gif",
    "747240461583777882/Dont_quote_me.png",
    "747240484992450640/HTML_go_brbrbrbr.png",
    "747240504768462889/lol_stfu.png",
    "747240529057546412/maxresdefault.jpg",
    "747240544845168680/shit_yourself.png",
  ];
  return `https://cdn.discordapp.com/attachments/747239510324281385/${
    memes[Math.floor(Math.random() * Math.floor(memes.length))]
  }`;
}
