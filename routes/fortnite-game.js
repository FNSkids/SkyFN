const express = require('express')
const app = express()
const config = require('../config');
const axios = require('axios');

app.get(["/content/api/pages/fortnite-game", "/content/api/pages/"], async (req, res) => {
    axios.get("https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game").then(response => {
            var data = response.data;
            delete data.playersurvey;
            delete data.creativenews;
            delete data.tournamentinformation;
            delete data.savetheworldnews;
            delete data.comics;
            delete data.creativenewsv2;
            delete data.battleroyalenews;

            /*data.playlistinformation.playlist_info.playlists = [
                {
                    "image": `https://SuburbanFunnyCoin.prankielief.repl.co/reks1024.png`,
                    "playlist_name": "Playlist_PlaygroundV2",
                    "hidden": false,
                    "_type": "FortPlaylistInfo",
                    "description": "ReksFN | Creative. Thank you for using ReksFN!",
                    "display_subname": " ",
                    "display_name": "ReksFN | Creative"
                },
                {
                    "image": `https://SuburbanFunnyCoin.prankielief.repl.co/reks1024.png`,
                    "playlist_name": "Playlist_DefaultSolo",
                    "hidden": false,
                    "violator": "Ingame is out!",
                    "_type": "FortPlaylistInfo",
                    "description": "ReksFN | Solo. Thank you for using ReksFN!",
                    "display_subname": " ",
                    "display_name": "ReksFN | Solo"
                },
                {
                    "image": `https://SuburbanFunnyCoin.prankielief.repl.co/reks1024.png`,
                    "playlist_name": "Playlist_DefaultDuo",
                    "hidden": false,
                    "violator": "Join ReksFN",
                    "_type": "FortPlaylistInfo",
                    "description": "ReksFN | Duos. Thank you for using ReksFN!",
                    "display_subname": " ",
                    "display_name": "ReksFN | Duos"
                },
                {
                    "image": `https://SuburbanFunnyCoin.prankielief.repl.co/reks1024.png`,
                    "playlist_name": "playlist_trios",
                    "hidden": false,
                    "violator": "dsc.gg/reksfn",
                    "_type": "FortPlaylistInfo",
                    "description": "ReksFN | Trios. Thank you for using ReksFN!",
                    "display_subname": " ",
                    "display_name": "ReksFN | Trios"
                },
                {
                    "image": `https://SuburbanFunnyCoin.prankielief.repl.co/reks1024.png`,
                    "playlist_name": "Playlist_DefaultSquad",
                    "hidden": false,
                    "violator": "U CAN ACTUALLY GO INGAME",
                    "_type": "FortPlaylistInfo",
                    "description": "ReksFN | Squads. Thank you for using ReksFN!",
                    "display_subname": " ",
                    "display_name": "ReksFN | Squads"
                },
                {
                    "image": `https://SuburbanFunnyCoin.prankielief.repl.co/reks1024.png`,
                    "playlist_name": "Playlist_BattleLab",
                    "hidden": false,
                    "violator": "ReksFN made by Reksely#1207 and Pankiefield#9755",
                    "_type": "FortPlaylistInfo",
                    "description": "ReksFN | Batttle Lab. Thank you for using ReksFN!",
                    "display_subname": " ",
                    "display_name": "ReksFN | Battle Lab"
                }
            ]*/

            data.playlistinformation.frontend_matchmaking_header_text_description = "";
            data.playlistinformation.frontend_matchmaking_header_text = "";

            data.emergencynotice = {
                "news": {
                    "platform_messages": [],
                    "_type": "Battle Royale News",
                    "messages": [{
                        "hidden": false,
                        "_type": "CommonUI Simple Message Base",
                        "subgame": "br",
                        "body": "Made by Reksely#1207 and Pankiefield#9755\r\nDiscord:https://dsc.gg/reksfn",
                        "title": "ReksFN",
                        "spotlight": false
                    }],
                },
                "_title": "emergencynotice",
                "_noIndex": false,
                "_activeDate": "2018-08-06T19:00:26.217Z",
                "lastModified": new Date().toISOString(),
                "_locale": "en-US"
            }



            data.emergencynoticev2 = {
                "jcr:isCheckedOut": true,
                "_title": "emergencynoticev2",
                "_noIndex": false,
                "emergencynotices": {
                    "_type": "Emergency Notices",
                    "emergencynotices": [
                        {
                            "hidden": false,
                            "_type": "CommonUI Emergency Notice Base",
                            "title": "ReksFN",
                            "body": "Made by Reksely#1207 and Pankiefield#9755\r\nDiscord: https://dsc.gg/reksfn",
                        }
                    ]
                },
                "_activeDate": "2018-08-06T19:00:26.217Z",
                "lastModified": new Date().toISOString(),
                "_locale": "en-US"
            }

            data.battleroyalenewsv2 = {
                "news": {
                    "motds": [{
                        "entryType": "Website",
                        "image": `https://SuburbanFunnyCoin.prankielief.repl.co/reks1920.png`,
                        "tileImage": `https://SuburbanFunnyCoin.prankielief.repl.co/reksnews.png`,
                        "videoMute": false,
                        "hidden": false,
                        "tabTitleOverride": "ReksFN",
                        "_type": "CommonUI Simple Message MOTD",
                        "title": "ReksFN",
                        "body": "Made by Reksely#1207 and Pankiefield#9755. Join the ReksFN Discord Server!",
                        "videoLoop": false,
                        "videoStreamingEnabled": false,
                        "sortingPriority": 0,
                        "id": "privateNewsBR",
                        "videoAutoplay": false,
                        "videoFullscreen": false,
                        "spotlight": false,
                        "websiteURL": "https://dsc.gg/reksfn",
                        "websiteButtonText": "Join our discord"
                    }]
                },
                "jcr:isCheckedOut": true,
                "_title": "battleroyalenewsv2",
                "header": "ReksFN",
                "style": "None",
                "_noIndex": false,
                "alwaysShow": false,
                "jcr:baseVersion": "a7ca237317f1e704b1a186-6846-4eaa-a542-c2c8ca7e7f29",
                "_activeDate": "2020-01-21T14:00:00.000Z",
                "lastModified": new Date().toISOString(),
                "_locale": "en-US"
            }



            data.battleroyalenews = data.battleroyalenewsv2;

            data.creativenewsv2 = data.battleroyalenewsv2;

            data.shopCarousel = {
                "jcr:isCheckedOut": true,
                "itemsList": {
                    "_type": "ShopCarouselItemList",
                    "items": [{
                        "tileImage": `https://SuburbanFunnyCoin.prankielief.repl.co/reks1920.png`,
                        "fullTitle": "Private",
                        "hidden": false,
                        "_type": "ShopCarouselItem",
                        "landingPriority": 100,
                        "action": "ShowOfferDetails",
                        "offerId": null,
                        "title": "Private"
                    }]
                },
                "_title": "shop-carousel",
                "_noIndex": false,
                "jcr:baseVersion": "a7ca237317f1e76d4c1405-e84c-4ece-bc50-7112ba557b33",
                "_activeDate": "2020-09-25T12:00:00.000Z",
                "lastModified": new Date().toISOString(),
                "_locale": "en-US"
            }

            data.dynamicbackgrounds = {
        "jcr:isCheckedOut": data.dynamicbackgrounds["jcr:isCheckedOut"] || true,
        "backgrounds": {
            "backgrounds": [
                {
                            "backgroundimage": `https://SuburbanFunnyCoin.prankielief.repl.co/lobby.jpg`,
                            "stage": "defaultnotris",
                            "_type": "DynamicBackground",
                            "key": "lobby"
                }
            ],
            "_type": "DynamicBackgroundList"
        },
        "_title": "dynamicbackgrounds",
        "_noIndex": false,
        "jcr:baseVersion": data.dynamicbackgrounds["jcr:baseVersion"] || "a7ca237317f1e7546d8fe7-0d7a-4312-9e37-a20f1c4333b0",
        "_activeDate": data.battleroyalenewsv2._activeDate || "2020-01-21T14:00:00.000Z0",
        "lastModified": new Date().toISOString(),
        "_locale": data._locale || "en-US"
    }

        
            res.json(data)


        })
})

module.exports = app