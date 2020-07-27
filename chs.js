/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Adventures': '冒险',
    'All Recipes': '所有配方',
    'Applicable Heroes': '适用英雄',
    'available for Upgrades.': '可用于升级。',
    'Back to Heroes': '返回英雄',
    'Back to Inventory': '返回库存',
    'Clear Save': '清除存档',
    'Details': '详情',
    'Download Save': '下载存档',
    'Dungeons': '地下城',
    'Equipment': '装备',
    'Exit Dungeon': '退出地下城',
    'Export Save': '导出存档',
    'Fetching...': '正在获取...',
    'Floor': '层',
    'Guilds': '公会',
    'Guild Workers': '公会工人',
    'Gold & Inventory': '黄金&库存',
    'Guild Recipes Available for Mastery': '公会配方可用于精通',
    'Market': '市场',
    'Inventory': '库存',
    'Heroes': '英雄',
    'Import Save': '导入存档',
    'Quests': '任务',
    'Sell All Commons': '出售所有公共物品',
    'Recipes': '配方',
    'Settings': '设置',
    'Sort Inventory': '库存排序',
    'Time Played': '游戏时长',
    'Town': '乡镇',
    'Turn Order': '回合顺序',
    'View Bank': '查看银行',
    'Upgrades': '升级',
    'Equip': '装备',
    'LVL': '等级',
    'Knife': '刀',
    'Knives': '刀',
    'Hats': '帽子',
    'Hat': '帽子',
    'Staff': '法杖',
    'Staffs': '法杖',
    'A Cool Dark Chainmail': '酷黑锁子甲',
    'Armors': '盔甲',
    'Armor': '盔甲',
    'Belts': '腰带',
    'Belt': '腰带',
    'Balmungous': '香脂',
    'Buzzblade': '嗡嗡之刃',
    'Cannonballer': '炮弹发射器',
    'Cauldroning': '大锅',
    'Clogs': '木屐',
    'Sell': '出售',
    'Shoes': '鞋子',
    'Sticks': '棍棒',
    'Staves': '权杖',
    'Squeaks': '吱吱声',
    'The Bank': '银行',
    'Titan': '泰坦',
    'Tomes': '书籍',
    'Type': '类型',
    'Vest': '背心',
    'Vests': '背心',
    'View Links & Resources': '查看链接&资源',
    'Worker': '工人',
    'Wisdom': '智慧之盾',
    'You have': '你有',
    'Your Adventure Party': '你的冒险派对',
    'Level': '等级',
    'Masks': '面具',
    'Mask': '面具',
    'Ring': '戒指',
    'Rings': '戒指',
    'Lactuca': '翡翠戒指',
    'Glove': '手套',
    'Sabre': '军刀',
    'Gloves': '手套',
    'Gauntlets': '护手',
    'Informing the uninformed...': '通知不知情的人...',
    'Initializing game...': '正在初始化游戏...',
    'Crawling the dungeons...': '地牢爬行...',
    'Constructing buildings...': '构建建筑...',
    'Finalizing your progress...': '正在完成进度...',
    'Gathering materials...': '收集材料...',
    'Gathering your heroes...': '聚集你的英雄...',
    'Helmets': '头盔',
    'Helmet': '头盔',
    'Jawstriker': '颚击者',
    'Item Being Equipped': '物品已被装备',
    'No materials currently in your inventory. Try the dungeons!': '您的库存中目前没有材料。去地下城试试!',
    'Not defeated yet.': '还没有被打败。',
    'Assembling the guilds...': '组装公会...',
    'Green Guard': '绿卫队',
    'Health': '生命值',
    'Not Completed': '未完成',
    'Boots': '靴子',
    'Boot': '靴子',
    'Swords': '剑',
    'Sword': '剑',
    'Stones': '石头',
    'Shield': '盾牌',
    'Shields': '盾牌',
    'Seeker': '探索者',
    'Thrown': '投掷',
    'Words': '词缀',
    'Trinket': '饰品',
    'Whalers': '捕鲸者',
    'Cloaks': '披风',
    'Cloak': '披风',
    'Pendants': '吊坠',
    'Pendant': '吊坠',
    'Shuriken': '手里剑',
    'Loafers': '懒人拖',
    'Loafer': '懒人拖',
    'Mastered': '已精通',
    'Materials': '材料',
    'Max Level!': '最高级！',
    'Max Level Reached!': '达到最高级！',
    'Milestone Markets': '里程碑市场',
    'Tawny': '茶色',
    'Purchase': '购买',
    'Patience': '耐力',
    'Plate': '板',
    'Kite': '风筝',
    'Renae': '雷那',
    'Recipe': '配方',
    'Power': '力量',
    'Locked': '未解锁',
    'Good Craft!': '好手艺!',
    'Fighter': '斗士',
    'The Forge': '锻造厂',
    'Trinkets': '饰品',
    'Tiny': '小',
    'The Marketplace': '市场',
    'The Cat\'s Meow': '猫咪的叫声',
    'The amount of damage an entity is capable of dealing.': '一个实体能够造成的伤害的数量。',
    'The amount of damage an entity can sustain before being downed.': '一个实体在被击倒前所能承受的伤害。',
    'Grogmar': '格罗格玛',
    'Revere': '里维尔',
    'Titus': '提图斯',
    'Troy': '特洛伊',
    'Neve': '尼芙',
    'Zoe': '佐伊',
    'Lambug': '林虫',
    'Grim': '格里姆',
    'Beorn': '贝恩',
    'Cedric': '塞德里克',
    'Caeda': '凯达',
    'All Folks Hat': '全民帽',
    'Alok': '阿洛克',
    'Francis': '弗朗西斯',
    'Gilbert': '吉尔伯特',
    'Gilfred': '吉尔弗雷德',
    'Gilda': '吉尔达',
    'Truth Teller': '吐真者',
    'The Mind Cap': '心灵帽',
    'The Bloopinator': '吸血器',
    'That\'s Not A Knife': '这不是刀',
    'That\'s A Knife': '这是一把刀',
    'Total Commons Crafted': '总计制作的精品级物品',
    'Total Epics Crafted': '总计制作的史诗级物品',
    'Total Floors Beaten': '总计打过的楼层',
    'Total Gold Earned': '总计赚取的黄金',
    'Total Goods Crafted': '总计制作的不错的物品',
    'Total Items Crafted': '总计制作的物品',
    'Total Greats Crafted': '总计制作的大师级物品',
    'Your progress for total bosses defeated.': '你总计击败的Boss进度。',
    'Your progress for perks purchased from the Market.': '从市场购买的福利的进度。',
    'Your progress for donations to the Museum.': '您捐赠给博物馆的进度。',
    'Visit our Subreddit': '访问我们的Subreddit',
    'Unmastered': '未精通',
    'Thanks for checking us out, unfortunately, we don\'t support a screen of this size. Please visit us on your computer, laptop or on a device with a larger screen.': '感谢您的关注，不幸的是，我们不支持这种尺寸的屏幕。请使用您的电脑、笔记本电脑或屏幕更大的设备访问我们。',
    'Residing in the Rapid Chi Orchard, these stoic beings are superb at defense.': '居住在拉皮奇果园（Rapid Chi Orchard）中，这些坚忍的生物在防御上非常出色。',
    'Purchase new recipes unlocked by leveling up your guild.': '购买通过升级公会解锁的新配方。',
    'Purchase unique upgrades and perks that will expand your capabilities.': '购买独特的升级和福利，将扩展您的功能。',
    'Playbooks offer up different hero skills. Find more in the Market.': '剧本提供了不同的英雄技能。 在市场中找到更多。',
    'Progress further to unlock this category.': '进一步解锁该类别。',
    'Bosses Defeated': 'Boss被击败了',
    'Change your game preferences and settings.': '改变你的游戏偏好和设置。',
    'Clear Saved Game Data': '清除保存的游戏数据',
    'Comitatus': '喜剧演员',
    'Complete guild orders to earn reputation and level up your guild.': '完成公会订单以赢得声望并升级您的公会。',
    'Feel free to check out our About & Crediting page or join us on Discord.': '随时查看我们的“关于＆鸣谢”页面或加入Discord。',
    'Import Game Data': '导入存档',
    'Import your own previously exported data or shared game data.': '导入您自己以前导出的存档数据或别人给你共享的游戏存档数据。',
    'If you plan on fighting in the shadows, this is the place to start.': '如果你计划在阴影中战斗，这是开始的地方。',
    'Mastering will remove material costs and grant higher rarity chances. Crafting more of a recipe will lower the mastery cost.': '精通技能将消除物质成本，并给予更高的稀有几率。制作更多的配方将降低精通成本。',
    'Eryn': '艾琳',
    'Oren': '奥伦',
    'Gillian': '吉莉安',
    'Smash': '粉碎',
    'Stilettos': '短剑',
    'Pyromania: A Love Story': '纵火狂：爱情故事',
    'Playbooks': '剧本',
    'Game Statistics': '游戏统计',
    'Herbie': '赫比',
    'Hero Equipment Upgrades': '英雄装备升级',
    'Tiara': '头饰',
    'Loyal Companion': '忠诚伴侣',
    'Named for the common technique of "Water Stabbing," which is the best way to catch a fish.': '得名于常见的“水刺”技术，这是最好的捕鱼方法。',
    'Some suggest that the original name is actually "This Is A Knife" -- they\'re wrong.': '有些人认为它最初的名字实际上是“这是一把刀”——他们错了。s',
    'Sure, a talking dog and a duck who refuses to wear pants is fine, but the weapon is breaking immersion.': '当然，一只会说话的狗和一只拒绝穿裤子的鸭子是没问题的，但这种武器正在打破沉浸感。',
    'Overall Progress': '整体进度',
    'Perks Purchased': '购买的福利',
    'Populating recipes...': '正在填充配方...',
    'Your overall game progress.': '您的整体游戏进度。',
    'Export Game Data': '导出游戏存档',
    'Craft': '制作',
    'Crash': '崩溃',
    'Hall of Milestones': '里程碑大厅',
    'Fusion Cabin': '融合小屋',
    'Adventure Areas': '冒险区域',
    'Select an area for your heroes to explore.': '选择一个区域让你的英雄去探索。',
    'Magical Synthesizer': '神奇合成器',
    'Aviation Association': '航空协会',
    'Trawled Treasures': '搜罗珍宝',
    'Adventure Enemy Party': '冒险敌方',
    'Adventure In Progress': '进行中的冒险',
    'Idle': '闲置',
    'Crafting Slots': '制作槽',
    'Clear Saved Game Data?': '清除游戏存档？',
    'Clear your saved game data from this browser? This action is irreversible.': '从这个浏览器清除你保存的游戏数据?这一操作是不可逆转的。',
    'Delete Game Data': '删除游戏存档',
    'Keep Game Data': '保留游戏存档',
    'Permanently delete your current saved game data. This action is irreversible.': '永久删除您当前保存的游戏数据。这一操作是不可逆转的。',
    'or delete your current save to start a new game.': '或删除当前存档以开始新游戏。',
    'Export Saved Game Data?': '导出保存的游戏存档？',
    'Export your current game data for sharing or importing at a later time.': '导出您当前的游戏数据以便以后共享或导入。',
    'Export your game data for sharing or use at a later time in another browser, computer or device. Copy the export string below for importing.': '导出您的游戏数据，以便以后在其他浏览器、计算机或设备中共享或使用。复制下面的导出字符串以便导入。',
    'Download as File': '下载存档文件',
    'Copy to Clipboard': '复制到剪贴板',
    'Import Saved Game Data?': '导入游戏存档？',
    'Import game data by inputting the export string and pressing the \'Import Save\' button.': '输入存档代码并按“导入存档”按钮导入游戏数据。',
    'Adjust your game preferences and settings. These settings will only be applied to this browser.': '调整你的游戏偏好和设置。这些设置将只应用于此浏览器。',
    'About & Crediting': '关于 & 鸣谢',
    'Choose whether tooltips are rendered when hovering over tooltip-enabled content.': '选择当鼠标悬停在启用工具提示的内容上时是否呈现工具提示。',
    'Designates where the notifications for various events (such as exceptional crafts) will appear.': '指定各种事件(如特殊的工艺品)的通知将出现的地方。',
    'Disabled': '禁用',
    'No Active Fortune': '没有活跃的财富',
    'Notification Location': '通知位置',
    'Game not available on this device': '游戏在此设备上不可用',
    'Tooltips': '工具提示',
    'Top-Center': '中上',
    'Top-Right': '右上',
    'Top-Left': '左上',
    'Bottom-Center': '中下',
    'Bottom-Left': '左下',
    'Bottom-Right': '右下',
    'Enabled': '启用',
    'Reset All Settings': '重置所有设置',
    'Reset your settings to default values for this browser only. This will reload the game but your progress will not be reset.': '仅将此浏览器的设置重置为默认值。 这将重新加载游戏，但您的进度不会被重置。',
    'Progress Tracker': '进度追踪器',
    'Join us on Discord': '在Discord上加入我们',
    'Available Guild Orders': '可用的公会订单',
    'Available Guild Sales': '可用公会销售',
    'Beat next boss to unlock!': '击败下一个Boss来解锁！',
    'Available Perks': '可用福利',
    'Unmastered Only': '只显示未精通',
    'Rewards': '奖励',
    'Mastered Only': '只显示已精通',
    'Just make sure you don\'t get sand in it.': '只是要确保不要把沙子弄进去。',
    'Hull': '船体',
    'Lakekeeper': '旁观者',
    'Lakur': '机率',
    'Pullum': '吊坠',
    'Earthshaping and You': '塑造地球与你',
    'Amici': '埃米希',
    'Abandon Dungeon': '放弃地下城',
    'Gladio': '格拉迪欧',
    'Efficient Spells': '高效法术',
    'Dignity': '尊严',
    'Hut': '小屋',
    'Galoshes': '胶套鞋',
    'Helmut': '头盔',
    'Empty Slot': '空槽',
    'Stars': '之星',
    'Represents a worker for the guild.': '代表公会的一名工人。',
    'Zoe\'s Quest': '佐伊的任务',
    'hero is needed to assist with a potential divergence of timelines.  You don\'t have to turn off the red light, but getting pizza would be seen as a bonus.': '需要英雄来协助时间表的潜在分歧。 您不必关闭红灯，但拿披萨将被视为一种奖励。',
    'hero to help them with a problem.  They are suffering from a gas leak and report many popping noises.': '帮助他们解决问题的英雄。 他们正遭受煤气泄漏之苦，并报告许多爆裂声。',
    'Intense Purple Cuirass': '深紫色铠甲',
    'is hereby commissioned to rescue Sir Doogleberry from an ancient tomb with puzzle elements and a save system.': '被委任从一个带有谜题元素和一个保存系统的古墓中营救杜格贝里爵士。',
    'Select a quest for your heroes to partake in.': '选择一个任务让您的英雄参与。',
    'Sir Randolph Doogleberry': '伦道夫·杜格伯里爵士',
    'traveler to acquire cruise tickets for their northern team.  Don\'t let their promises go undelivered.': '旅行者为其北部团队获取游轮票。 不要辜负他们的诺言。',
    'Trawled Treasures desires a': '搜罗宝藏1个欲望',
    '.  Head on over to the Steam Pipe Trunk Distribution Venue, and consider bringing them a muffin.': '。去蒸汽管道分配地点，考虑给他们带一个松饼。',
    'A neighboring distributor needs a champion with': '邻近的经销商需要一个冠军与',
    'Caeda, again.': '凯达，再次的。',
    'adventurer to bring them some milk.  They will pay handsomely to anyone who will travel to the wall and pick some up.': '冒险家给他们带点牛奶。他们会给任何到长城去买一些的人丰厚的报酬。',
    'Questing Locations': '搜寻地点',
    'Your overall progress throughout the game.': '您在整个游戏中的总体进度。',
    'Wizard College': '巫师学院',
    'The Milk Hole': '牛奶洞',
    'Steam Pipes': '蒸汽管道',
    'An adventurer with': '一个冒险家和',
    'Buckler': '圆盾',
    'Burning Sticks': '燃烧棒',
    'Caeda\'s Other Quest': '凯达的另一个任务',
    'Crown': '皇冠',
    'Cutlass': '弯刀',
    'Cruise Tickets': '邮轮船票',
    'Time Spent Offline': '离线时间',
    'Recipe Mastery': '配方精通',
    'Serpent Mail': '蛇形锁',
    'on Patreon': '在Patreon上',
    'Nal\'Dur\'s Diary': '杜尔的日记',
    'Adipem Pater': '阿迪彭·帕特',
    'Gold Earned': '获得黄金',
    'Requirements': '要求',
    'Strennus': '强度',
    'Moxie': '勇气',
    'Mindful': '留心的',
    'Maidens': '少女',
    'Quest Inactive': '任务未激活',
    'Offline Progression': '离线进度',
    'Here\'s what happened while you were offline.': '这是您离线时发生的情况。',
    'Chaos Theory': '混沌理论',
    'Arms Race': '军备竞赛',
    'Rain Fire': '火雨',
    'Rollin In The Deep': '罗林深处',
    'Start Fusion': '开始融合',
    'Song Of Life': '生命之歌',
    'Store in Bank': '存入银行',
    'Revenge': '复仇',
    'Revere has nothing to prove, because she knows the truth: she can do anything.': '里维尔有什么可以证明的，因为她知道真相：她可以做任何事情。',
    'Research new trinket recipes that can be crafted for gold.': '研究可以用黄金制作的新饰品配方。',
    'Reputation': '声望',
    'Shield Up': '完美护盾',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "A list of all of your heroes and a quick overview of": "您所有英雄的清单以及以下内容的快速概述",
    "A special quest, just for ": "这是一个特别的任务，只是为了",
    "Additional Playbook for ": "额外的剧情",
    "Rodeo ": "竞技",
    "Hitman ": "杀手",
    "Grifter ": "骗子",
    "Hamster ": "仓鼠皮",
    "Heart ": "心灵",
    "Dancing ": "舞蹈",
    "Leather ": "羽毛",
    "General ": "普通",
    "Hunter ": "猎人",
    "Kitchen ": "厨房",
    "Lunar ": "太阴",
    "Marksman ": "射手",
    "Metal ": "金属",
    "Ornate ": "华丽的",
    "Panther ": "豹皮",
    "Mole ": "鼹鼠皮",
    "Hairy ": "毛茸茸的",
    "Loving ": "爱心",
    "Master ": "大师",
    "Criminal ": "罪犯",
    "Dark ": "黑暗",
    "Earth ": "地之",
    "Fire ": "火之",
    "Wind ": "风之",
    "Water ": "水之",
    "Fair ": "公正",
    "Princess ": "公主",
    "Magnetized ": "磁化",
    "Formal ": "优等的",
    "Modest ": "温和的",
    "Other ": "其它",
    "Metallic ": "合金",
    "Coffee ": "咖啡",
    "Challenge ": "挑战",
    "Beach ": "海滩",
    "Druidic ": "德鲁伊",
    "Tactical ": "战术",
    'Trapper ': '捕手',
    'Sailor ': '水手',
    'September ': '余烬',
    'Shining ': '闪亮',
    'Club ': '社团',
    'Spy ': '间谍',
    'Expert ': '专家',
    'Hugging ': '拥抱',
    'Bardic ': '吟游诗人的',
    'Dandy ': '上等',
    'Lifegiver ': '救生员',
    'Tinker ': '修补匠',
    'Ostium ': '开口',
    'Tacet ': '沉默',
    'Cool ': '酷',
    'Deathcaller ': '死亡召唤者',
    'Fancy ': '精致的',
    'Folium ': '叶形',
    'Cleaning ': '清洁',
    'Shooting ': '射击',
    'Chaplain ': '牧师',
    'Janitorial ': '清洁工的',
    'Practitioner ': '医生的',
    'Spoopy ': '间谍',
    'Frostflinger ': '弗罗斯特·弗林格',
    'Slayers ': '魔导士',
    'Soldier ': '士兵',
    'Spellcasting ': '施法',
    'Super ': '超级',
    'Stormbringer ': '风暴使者',
    'Faithful ': '忠实的',
    'Stone ': '石头',
    'Support ': '支持',
    'Poison ': '毒药',
    'Planet ': '星球',
    'Plain ': '朴实的',
    'Pirate ': '海盗',
    'Pumpkin ': '南瓜',
    'Punching ': '穿孔的',
    'Cucumber ': '阴影',
    'Regular ': '普通的',
    'Running ': '奔跑',
    'Salty ': '盐焗',
    'Skull ': '骷髅',
    'Volto ': '护脸',
    'Paladin ': '游侠',
    'New ': '新',
    'Timing ': '同步',
    'Gardening ': '园艺',
    'Meager ': '劣质的',
    'Mega ': '巨型',
    'Mercenary ': '佣兵',
    'Journeyman ': '熟练工的',
    'Pristine ': '崭新的',
    'Shiny ': '光滑的',
    'Ignis ': '火之',
    'Outlaw ': '罪犯',
    'Oxygen ': '氧气',
    'Fan ': '粉丝',
    'Apprentice ': '学徒',
    'Rubber ': '橡胶',
    'Simple ': '简单的',
    'Whimsical ': '古怪的',
    'Assassin ': '刺客',
    'Bandit ': '强盗',
    'Black ': '黑色',
    'Boxing ': '拳击',
    'Fighting ': '战斗',
    'Flat ': '光滑的',
    'Fugitive ': '逃亡者',
    'Butter ': '黄油',
    'Standard ': '标准',
    'Old ': '旧',
    'Hidden ': '隐藏',
    'Great Hamster Vol ': '大仓鼠卷',
    'Fishing ': '钓鱼',
    'Heavy Metal ': '重金属',
    'Extra ': '额外',
    'Powerful ': '强大的',
    'Earthslinger ': '寻地者',
    'Healthy ': '健康的',
    'Coal ': '煤炭',
    'Cobalt ': '深蓝',
    'Conveyor ': '传送',
    'Berserker ': '狂战士',
    'Cowboy ': '牛仔',
    'Rust ': '生锈的',
    'Chef\'s ': '厨师的',
    'Leaded Zeppelin ': '齐柏林飞艇',
    'Noble ': '高贵的',
    'Novice ': '新手',
    'Trustworthy ': '可靠的',
    'Spells Vol': '魔法卷',
    'Sell': '出售',
    'Boss Realm': 'Boss领域',
    'Spooky Spot': '幽灵点',
    'Groovy Grove': '美好的树林',
    'Creepy Crag': '毛骨悚然的峭壁',
    'Real Moxie': '真正的莫西',
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "\n": "",
    "their stats.": "他们的属性。",
    "All Commons": "全部公有物",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^(\d+) days, (\d+) hours, (\d+) minutes, (\d+) second$/, '$1 天, $2 小时, $3 分钟, $4 秒'],
    [/^(\d+) days, (\d+) hours, (\d+) minute, (\d+) second$/, '$1 天, $2 小时, $3 分钟, $4 秒'],
    [/^(\d+) days, (\d+) hours, (\d+) minutes, (\d+) seconds$/, '$1 天, $2 小时, $3 分钟, $4 秒'],
    [/^(\d+) days, (\d+) hours, (\d+) minute, (\d+) seconds$/, '$1 天, $2 小时, $3 分钟, $4 秒'],
    [/^(\d+) day, (\d+) hours, (\d+) minutes, (\d+) seconds$/, '$1 天, $2 小时, $3 分钟, $4 秒'],
    [/^(\d+) Monster Trophies$/, '$1 怪物奖杯'],
    [/^(\d+) Left$/, '$1 剩余'],
    [/^Purchase new recipes unlocked by leveling up\n(.+)your guild.$/, '购买通过升级公会解锁的新配方。'],
    [/^Purchase unique upgrades and perks that will expand your\n(.+)capabilities.$/, '购买独特的升级和特权，将扩展您的功能。。'],
    [/^Delete\n(.+)Data$/, '删除数据'],
    [/^Boss (\d+) Slain$/, 'Boss $1 被杀死了'],
    [/^Guild Level (\d+) Required$/, '要求公会等级 $1'],
    [/^(.+)Locked$/, '$1未解锁'],
    [/^Your progress\n(.+)for donations to the Museum.$/, '你向博物馆捐款的进度。'],
    [/^Your progress for perks purchased from\n(.+)the Market.$/, '你从市场购买的福利的进度。'],
    [/^Your progress for total bosses\n(.+)defeated.$/, '你累计打败Boss的进度'],
    [/^Your progress for total recipes\n(.+)mastered.$/, '你掌握的食谱总数的进度。'],

]);