const Discord = require('discord.js');
const hentaigifs = [
    "https://78.media.tumblr.com/fa2ec47fb623672ab829f19f8b570d69/tumblr_myoxrjJcOv1sflbiso1_500.gif",
    "https://78.media.tumblr.com/a58945be876daed263c99b18dbd9fb10/tumblr_mghj1iKZnr1rmvspko1_500.gif",
    "https://78.media.tumblr.com/b0a9bf57480a5e23bfeaf8c1465b252e/tumblr_mxthl89HLG1s5k1uro1_500.gif",
    "http://imgur.com/tLhPp.gif",
    "https://78.media.tumblr.com/6050009a6bc0dd9fe8eef771c51e9ba5/tumblr_myoxqoj9ct1sflbiso1_400.gif",
    "https://78.media.tumblr.com/5f33c75b34a58c40c3205b12ec2f5036/tumblr_mqlpxa18Ig1ss99fto1_1280.gif",
    "https://78.media.tumblr.com/56a1195b6f49ef2f5267a4b11c21bf72/tumblr_ooj7updrlN1v2hfg0o2_500.gif",
    "https://78.media.tumblr.com/5a6002e0dbd4b33f4f699266ac26186a/tumblr_mgw21335Id1rmvspko1_500.gif",
    "https://giant.gfycat.com/CleanCoarseGreendarnerdragonfly.gif",
    "https://78.media.tumblr.com/bc1047461efc760d9012b90e244ec383/tumblr_o72cdv9M2i1uo6yjdo1_540.gif",
    "https://78.media.tumblr.com/53101d55e725e79d2e0fdc68498a03cd/tumblr_o9n98q68l31ttgbudo1_400.gif",
    "https://78.media.tumblr.com/b51fdaffc4dbdd4b76ea6a65f1813c1c/tumblr_mosvpnlQPt1sv5v4qo1_250.gif",
    "https://78.media.tumblr.com/2fb7e6a12743faeeeee0bff912e24503/tumblr_mpcezkVT4m1sv5v4qo1_500.gif",
    "https://78.media.tumblr.com/86f64d8860c8c310a0331fbfb380d18e/tumblr_o9obewYOGR1tjgwy0o1_540.gif",
    "https://78.media.tumblr.com/4d022585cb96f60fa9cf78501cc52cc2/tumblr_oi2tobO5qy1vlyfh1o1_500.gif",
    "https://78.media.tumblr.com/ed955ed7b2dae1d34477f44606c27fba/tumblr_oi81dgqWyX1vzttmyo1_1280.gif",
    "https://78.media.tumblr.com/6e011a1c6305d45a9bd05575d0d9361e/tumblr_mogtsoPbkq1sv5v4qo1_500.gif",
    "https://78.media.tumblr.com/99bee511cf2ceb5cd81593e3bd5f9807/tumblr_o9ob0tpe4m1tjgwy0o1_540.gif",
    "https://78.media.tumblr.com/33bac89c9e52a38525ea293182b2915e/tumblr_ovd8kg320v1uivy2io1_1280.gif",
    "https://78.media.tumblr.com/9a0d2c62aca5e5e2be20473f1c304744/tumblr_mxg0fcmg8L1sjyos5o1_500.gif"
]

module.exports.run = async (bot, message, args) => {
    const hentaigif = hentaigifs[Math.floor(Math.random() * hentaigifs.length)];

const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Hentai GIF")
.setImage(hentaigif)
message.channel.send(embed)
}

module.exports.help = {
    name: "hentaigif",
    alias: "hgif",
    description: "Affiche un gif de catégorie hentai.",
    usage: `hentaigif`,
    category: "nsfw",
    cooldown: 10
}