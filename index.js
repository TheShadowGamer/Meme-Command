const { React } = require("powercord/webpack");
const { Plugin } = require("powercord/entities");

module.exports = class MemeCmd extends Plugin {
  startPlugin() {
    this.api.commands.registerCommand({
      command: "meme",
      description: "Send a random meme.",
      usage: "{c}",
      executor: () => {
        let meme = randomMeme();
        return {
          send: true,
          result: meme,
        };
      },
    });
  }

  pluginWillUnload() {
    powercord.api.commands.unregisterCommand("meme");
  }
};

function randomMeme() {
  const memes = [
    "755616797927014540/beeping_contest.png",
    "755616802075181126/Dont_quote_me.png",
    "755616807758594128/HTML_go_brbrbrbr.png",
    "755616809348104282/bounce.gif",
    "755616810472046602/I_think_the_fuck_not.jpg",
    "755616816155590676/lol_stfu.png",
    "755616819854835822/maxresdefault.jpg",
    "755616822903963678/shit_yourself.png",
    "755616825009635368/smells_like_gay.png",
    "755616828310683798/stick_bug_spoiler.png",
    "755616941049249852/wahoo.jpg",
    "755617249695498241/1080p.mov",
    "755617277742809229/banana.mp4",
    "755617281547173888/berb.mov",
    "755617289419620475/carl.mov",
    "755617292989104208/coke_a_cola.mp4",
    "755617322462478356/crab.mp4",
    "755617327739043880/cursed_2.mp4",
    "755617333350891711/DO_NOT_CLICK_THIS_VIDEO.mp4",
    "755617339386364055/Do_You_Want_to_Explode.mp4",
    "755617343136202752/falling_down_the_stairs.mp4",
    "755617348865753100/My_shoes_untied.mp4",
    "755617378963947531/Not_Scientifically_Possible_Full.mp4",
    "755617380658315274/pickle.mp4",
    "755617391278424125/Pug_dancing_to_fnaf_music_box.mp4",
    "755617403446100108/Steven_Universe_Fear.mp4",
    "755617414967722084/super_toilet_grenade_3_smaller_file.mp4",
    "755617420428705952/terror.mp4",
    "755617429400322148/toad_wrench.mp4",
    "755617454302167050/video0_80.mp4",
    "755617458609717278/video0_90.mp4",
  ];
  return `https://cdn.discordapp.com/attachments/755616313887424603/${
    memes[Math.floor(Math.random() * Math.floor(memes.length))]
  }`;
}
