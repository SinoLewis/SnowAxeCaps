# GigsDash TODOs

1. 5 main modules: Freqtrade, Openai, Nft, Fireshop, IRL
2. Each module may use default compos

## **1. Main app TODOs**

1. Freqtade Modules injection

- Merge config files from Freqtade

  - merge frequi vite.config to ionic app
  - merge frequi tsconfig to ionic app

- Replace router-view with ionic-tabs
- Inject Views & Compos
  - Views: 1) Bots 2) Trade 3) Dashboard 4) Charts 5) Logs
  - Secondary Views: 6) LoginModal 7) LoginView 8) BackTesting 9) OpenTrade 10) TradeHistory 11) Settings 12) 404
    (c) - PoC: make API request of /api/ping to freqtrade server from gigsdash using stores & shared scripts

2. Solve router to tabs error in App.vue

## **2. Vue views TODO**

| NO. | Compo.    | JS & Stores & Utils                                  | HTML | CSS |
| --- | --------- | ---------------------------------------------------- | ---- | --- |
| 1.  | App       | - Switch views without refresh                       |      |     |
|     |           | - Init Supabase client                               |      |     |
|     |           |                                                      |      |     |
| 2.  | Home      | - Main summary overview from other views             |      |     |
|     |           |                                                      |      |     |
| 3.  | Settings  | - Admin account profile                              |      |     |
|     |           |                                                      |      |     |
| 4.  | Freqtrade | - Read from Freqtrade server                         |      |     |
|     |           | - Write to freqtrade server                          |      |     |
|     |           | - Run Bot Strats                                     |      |     |
|     |           | - Implemenent Arbitrage trading strats               |      |     |
|     |           |                                                      |      |     |
| 5.  | Openai    | - Init openai auth client                            |      |     |
|     |           | - Read from Freqtrade server                         |      |     |
|     |           | - Write to freqtrade server                          |      |     |
|     |           | - Run Bot Strats with Openai logic (part time larry) |      |     |
|     |           | - Interface for speech transcriptions                |      |     |
|     |           |                                                      |      |     |
| 6.  | Nft       | - init a web3 auth client                            |      |     |
|     |           |                                                      |      |     |
| 7.  | Fireshop  | - Read from Fireshop supabase database data          |      |     |
|     |           |                                                      |      |     |
| 8.  | IRL       | - IRL mngt ie. SocialMedia API's stats               |      |     |
|     |           | - Discord, Youtube, Twitter stats                    |      |     |
|     |           |                                                      |      |     |

## **3. Vue compos TODO**

| NO. | Compo.    | JS & Stores & Utils                                     | CSS | HTML |
| --- | --------- | ------------------------------------------------------- | --- | ---- |
| 1.  | Tabs      | - Switch between different snow repos with dynamic data |     |      |
|     |           |                                                         |     |      |
| 2.  | Cards     | - Dir that manages all card content                     |     |      |
|     |           |                                                         |     |      |
| 3.  | Dropdowns | - NotificationDropdown.vue                              |     |      |
|     |           | - TableDropdown.vue                                     |     |      |
|     |           | - UserDropdown.vue                                      |     |      |
|     |           |                                                         |     |      |
| 4.  | Stats     | -                                                       |     |      |
|     |           |                                                         |     |      |
| 5.  | Tables    | -                                                       |     |      |
|     |           |                                                         |     |      |
| 6.  | Maps      | -                                                       |     |      |
|     |           |                                                         |     |      |

## **4. DevSecOps**

1. Build & Test & Security workflow

- Build apk binary for the UI
- Build apk binary for the UI + Server for android

2. Deployment & Releases workflow
3. Deploying each module server as either docker or app instance.

## **5. Performance & Testing**

1. Purge unused styles & scripts

## **6. Economics Explained**

1. Define & Track Economics Tenets Stats
