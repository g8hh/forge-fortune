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
    'Wisdom': '智慧',
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
    'Total Commons Crafted': '总计制作的精品级物品',
    'Total Epics Crafted': '总计制作的史诗级物品',
    'Total Floors Beaten': '总计打过的楼层',
    'Total Gold Earned': '总计赚取的黄金',
    'Total Goods Crafted': '总计制作的不错的物品',
    'Total Items Crafted': '总计制作的物品',
    'Total Greats Crafted': '总计制作的大师级物品',
    'Your progress for total bosses defeated.': '你总计击败的Boss进度。',
    'Your progress for perks purchased from the Market.': '从市场购买的津贴的进度。',
    'Your progress for donations to the Museum.': '您捐赠给博物馆的进度。',
    'Visit our Subreddit': '访问我们的Subreddit',
    'Unmastered': '未掌握',
    'Thanks for checking us out, unfortunately, we don\'t support a screen of this size. Please visit us on your computer, laptop or on a device with a larger screen.': '感谢您的关注，不幸的是，我们不支持这种尺寸的屏幕。请使用您的电脑、笔记本电脑或屏幕更大的设备访问我们。',
    'Residing in the Rapid Chi Orchard, these stoic beings are superb at defense.': '居住在拉皮奇果园（Rapid Chi Orchard）中，这些坚忍的生物在防御上非常出色。',
    'Purchase new recipes unlocked by leveling up your guild.': '购买通过升级公会解锁的新配方。',
    'Purchase unique upgrades and perks that will expand your capabilities.': '购买独特的升级和特权，将扩展您的功能。',
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
    'Oren': '奥伦',
    'Gillian': '吉莉安',

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
    "Hitman ": "杀手",
    "Grifter ": "骗子",
    "Hamster ": "仓鼠皮",
    "Heart ": "心灵",
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
    "Wind ": "风之",
    "Water ": "水之",
    "Fair ": "公正",
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
    'Spy ': '间谍',
    'Spoopy ': '间谍',
    'Slayers ': '杀手',
    'Soldier ': '士兵',
    'Spellcasting ': '施法',
    'Super ': '超级',
    'Stormbringer ': '风暴使者',
    'Stone ': '石头',
    'Support ': '拥护',
    'Poison ': '毒药',
    'Planet ': '星球',
    'Plain ': '朴实的',
    'Pirate ': '海盗',
    'Pumpkin ': '南瓜',
    'Punching ': '穿孔的',
    'Regular ': '普通的',
    'Running ': '奔跑',
    'Salty ': '盐焗',
    'Skull ': '骷髅',
    'Volto ': '护脸',
    'Timing ': '同步',
    'Gardening ': '园艺',
    'Meager ': '劣质的',
    'Mega ': '巨型',
    'Mercenary ': '佣兵',
    'Outlaw ': '罪犯',
    'Oxygen ': '氧气',
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
    [/^(\d+) days, (\d+) hours, (\d+) minutes, (\d+) seconds$/, '$1 天, $2 小时, $3 分钟, $4 秒'],
    [/^(\d+) day, (\d+) hours, (\d+) minutes, (\d+) seconds$/, '$1 天, $2 小时, $3 分钟, $4 秒'],
    [/^(\d+) Monster Trophies$/, '$1 怪物奖杯'],
    [/^(\d+) Left$/, '$1 剩余'],
    [/^Boss (\d+) Slain$/, 'Boss $1 被杀死了'],
    [/^Guild Level (\d+) Required$/, '要求公会等级 $1'],
    [/^(.+)Locked$/, '$1未解锁'],

]);