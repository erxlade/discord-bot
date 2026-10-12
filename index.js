const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// AYARLAR
const TOKEN = 'MTU1OTE4ODMxNjU4NTQ2Nzk1NA.Gmy6-L.8a7ORkC2FekXjuafEGYNbuj_5-TTOSp1qCtq_I';
const GUILD_ID = '1559159795980701696';
const CHANNEL_ID = '1559181124457201695';

client.once('ready', () => {
    console.log(`${client.user.tag} aktif ve sese bağlanıyor...`);
    
    // Ses kanalına bağlanma
    try {
        joinVoiceChannel({
            channelId: CHANNEL_ID,
            guildId: GUILD_ID,
            adapterCreator: client.guilds.cache.get(GUILD_ID).voiceAdapterCreator,
            selfDeaf: false, // Sağırlaştırma (istediğin gibi ayarla)
            selfMute: false  // Susturma
        });
        console.log('Bot başarıyla ses kanalına katıldı!');
    } catch (error) {
        console.error('Sese bağlanırken hata oluştu:', error);
    }
});

client.login(TOKEN);