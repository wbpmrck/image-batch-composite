const puppeteer = require('puppeteer');
const path = require('path');

(async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  /*
    字体：思源黑体 CN

    字体颜色：白色 ffffff

    字体大小（人名）：60
  */
  // 配置1：UED给的底图原来的大小
  const bgSize = {
    w: 2160,
    h: 3840
  };
  // 考虑到合成速度，需要支持可配置的缩放
  const scale = 0.5;

  // 设置页面大小
  await page.setViewport({
    width: Math.floor(bgSize.w * scale),
    height: Math.floor(bgSize.h * scale)
  });

  // 加载测试页面
  await page.goto(`file://${path.join(__dirname, '/tpl/draw.html')}`);

  // 配置3：要邀请的人名列表
  let ar = [
    '董勇',
    '孟召闯',
    '李俊',
    '马国斌',
    '叶传龙',
    '姚碧君',
    '崔小龙',
    '孟凡祥',
    '王来香',
    '胡启锋',
    '姬小奋',
    '高晓玮',
    '栾焕鲲',
    '张辉',
    '黄武伦',
    '陈耕',
    '王蓉',
    '欧福俊',
    '侯国其',
    '杨世健',
    '徐伟贤',
    '彭友良',
    '杨青',
    '林炼豪',
    '王建荣',
    '尹冬梅',
    '李海军',
    '林倩苑',
    '杨建红',
    '董定强',
    '朱翔涛',
    '王捷',
    '林宗洋',
    '范坤',
    '曾菁华',
    '詹天伦',
    '罗美丽',
    '赵振勇',
    '贾茗',
    '刘敬祥',
    '闫峻',
    '付伯伟',
    '杨博军',
    '亢健',
    '徐芳有',
    '张志峰',
    '蒋大勇',
    '孙华',
    '谢国兴',
    '高守强',
    '张烨',
    '陈红云',
    '何开辉',
    '陈俊波',
    '吴海波',
    '仲华',
    '李娜',
    '庞娜',
    '李晓海',
    '朱剑秋',
    '郭继成',
    '刘红宇',
    '安鸿强',
    '党博',
    '赵俊',
    '李凯',
    '李斌',
    '宫璞',
    '焦健',
    '李振宇',
    '严传智',
    '王进',
    '王超',
    '于海春',
    '刘宝',
    '易军',
    '张海林',
    '谢作跑',
    '龚志群',
    '汪洋',
    '洪嘉',
    '魏涛',
    '陶法东',
    '周明',
    '孙伟',
    '童孝泉',
    '王谦',
    '刘志成',
    '刘琦',
    '李科',
    '龙浩',
    '吕敬',
    '朱斌',
    '王皓',
    '李富军',
    '魏玲玲',
    '杨君',
    '邢浩',
    '孙建兵',
    '雷毅',
    '邵波',
    '郭贝贝',
    '杜长江',
    '高兴驰',
    '宋仕鹏',
    '王会肖',
    '周鑫昊',
    '张瑶',
    '杨帆',
    '才德超',
    '丁晓帅',
    '李亚飞',
    '薛东来',
    '佟川',
    '郭晓波',
    '刘琰',
    '何恩锡',
    '杨建明',
    '祝明',
    '翟小六',
    '王丽',
    '李安奇',
    '钟业海',
    '孙成成',
    '岳冲',
    '刘可',
    '杨英华',
    '谷德宝',
    '夏代春',
    '魏凡',
    '周在辉',
    '朱亚辉',
    '张志欣',
    '王伟',
    '李锐',
    '陈虎成',
    '杨丹',
    '严子欣',
    '马国宝',
    '刘东岩',
    '赵勇',
    '戴红斌',
    '汪新勇',
    '王伟',
    '刘德忠',
    '唐乐',
    '梁刚',
    '徐庆',
    '迟世义',
    '江玉张',
    '王小宁',
    '毛海燕',
    '张秋丽',
    '章功成',
    '杨鑫鑫',
    '李亮',
    '王娟',
    '姚超',
    '郑孝庆',
    '廖文军',
    '陈文平',
    '王森玉',
    '倪晓东',
    '胡灿明',
    '潘倩',
    '何海江',
    '严正鹏',
    '张红卫',
    '刘辉祥',
    '韦骄健',
    '张鑫',
    '汪洪林',
    '何巍',
    '梁亚飞',
    '李波',
    '付建新',
    '李肖光',
    '郭修会',
    '傅永伟',
    '谢志武',
    '盛建建',
    '马国斌',
    '孙锋',
    '杨冰',
    '钟卫东',
    '陈泽飞',
    '方宏乾',
    '蔡军',
    '杨彦平',
    '孙雷',
    '刘琳',
    '席坤',
    '方岩',
    '王淳',
    '秦瑾',
    '董宏',
    '高鹏',
    '李红艳',
    '杨漫',
    '韩昊珊',
    '曾献薇',
    '杨彬彬',
    '耿震',
    '朱晓磊',
    '吴莉莉',
    '常新',
    '冯岩',
    '詹海彪',
    '潘锦仕',
    '岑伟冬',
    '张雷',
    '佟圣辉',
    '陈金望',
    '吕士军'
  ];

  let finish = 0;
  // 遍历嘉宾列表，合成不同的邀请函图片
  for (var i = 0; i < ar.length; i++) {

    await page.evaluate((newName) => {
      changeName(newName)
    }, ar[i])
    await page.screenshot({
      path: path.join(__dirname, '/gen/邀请-' + ar[i] + '.png')
      // path:
      // '/Users/kaicui/Documents/work/CBG_PI_PRJ/translate_v3_invite_image_gen/gen/'
      // + ar[i] + '/invite-' + ar[i] + '.png'
    });
    finish++;
    console.log(`已完成[${finish}/${ar.length}]`)
  }
  await browser.close();
})();