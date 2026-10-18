# 繁星之海供电排查首版

日期：2026-10-18。面向卡在前期发电、矿石冶炼的玩家。交付是可操作的中英文静态页面，不是只有外观的示意稿。

- 英文：index.html；中文：zh.html；共用 style.css、app.js。
- 选择四类提示，显示对应检查步骤和原始依据。没有接游戏，没有读取存档；不能自动诊断或保证修复。
- 无账号、付费接口、外部字体、分析脚本或授权游戏素材。插图为原创流程示意，不是游戏截图或地图。
- 已有网站不改动。本项目还没有创建远端仓库、发布网址、GSC 或 GA4 属性，不复用其他站的统计编号。
- 生产域名和路径尚未确定，所以没有编造 canonical、sitemap 或线上地址。正式发布前补齐。

## 本轮筛选

以下是机会判断，不是关键词搜索量证明。公开讨论证明有人遇到问题；发售新闻和游戏名趋势只能证明关注度。

| 词 / 语言市场 | 时间与需求证据 | 现有结果及缺口 | 最小产品、成本与建议 |
|---|---|---|---|
| Beyond These Stars no power connections / generator not working；繁星之海没电 / 发电机不工作；英文为主、中文为辅助 | Steam 商店显示 2026-10-16 发售；10-16 热修改过发电机轮廓；社区检索出现同名供电卡点。另有 1—2 月旧试玩讨论，只作历史交叉验证，不说成新投诉 | 实际英文 Google 有 AI 摘要、官方 Wiki、YouTube 和新攻略，绝非没有竞争。中文 Google 本次返回大量其他游戏；百度返回汽车发电机、百科、旧新闻，缺少直接对应本作问题的步骤。这是有限样本，不是全网低竞争证明 | 本次选择：四类提示的中英排查页，整理连接、原料、产物和热修依据。零持续接口费；发售周需要关注官方补丁。具体故障词的搜索量和转化未证实，只适合小成本试站 |
| Enshrouded crossplay PS5 PC / 雾锁王国 1.0 跨平台联机；中英 | 官方 10-13 FAQ 确认首发不跨平台、尚无时间预估；10-15—16 社区有人问跨平台及租服 | 公开检索已有官方 FAQ、Enshrouded Companion、多个 Wiki 和中文多人指南。没有完整另做 Google/百度逐名次检查，不提供难度分数 | 若做仅需平台组合检查页；但答案容易被搜索摘要直接满足，维护还要追版本，排在后面，本轮不建 |
| Tenebris Somnia walkthrough / puzzle；英文 | 官方 Steam 公告确认 10-16 发售，社区讨论担心谜题与回溯 | 公开检索已有 Gamer Social Club、Into Indie Games、Ninewiki 等多份发售期流程。中文需求和真实百度结果未核验 | 最小方案是单个谜题的分层提示页；没有自行游玩或可靠独立验证，不足以做完整解谜产品，本轮不建 |
| 豆包输入法超级互传 / macOS 扫码登录；中文 | App Store 更新记录确认相关功能；9-8 LINUX DO 讨论出现 Windows 互传抱怨，但不是近 30 天的新问题；扫码更新的相对时间不稳定，未据此确定首次发布日 | 已有使用教程，兼容性情况未在当前设备实测；未做真实 Google/百度完整检查 | 可考虑以后补现有站的跨端检查分支；当前缺新问题和版本支持证据，不扩建、不重复造站 |

本轮按需求证据、答案缺口、首版成本和维护量排序；没有穷尽所有新词，也没有为凑数补满中英文各五个。

## 搜索与趋势实查

使用本机 Edge 的本轮临时页，保留原有标签页。Google 标明本次结果有个性化，地区显示美国；中文界面不等于中国大陆结果。

- 英文 Google：Beyond These Stars no power connections。看到 AI Overview、官方 Burner Generator、YouTube、Reddit、新攻略和 Fandom。AI 摘要已经直接说明建筑接触、电线与烟灰空间，所以不能靠重复答案就假设能获客。
- 中文 Google：繁星之海 发电机 没电。首屏/可见结果多为深海迷航、Kenshi、满意工厂等无关问题。
- 百度：同一中文词。可见汽车发电机文章、AI 采购回答、本作百科、旧发售新闻等，未见直接解决本作供电的专页。
- 90 天 Google Trends：Worldwide / Web Search / Search term / Beyond These Stars，图表可见 10-15 为 11、10-16 为 53、10-17 为 100、10-18 为 77。
- 7 天 Google Trends：同一游戏名和范围，按小时显示；10-17 04:00 为该窗口 100，10-18 12:00 为 32、20:00 为 39（均为页面显示时间，未另核对图表时区）。
- 两个窗口单独归一化，不能把指数当搜索量，也不做跨窗口数值比较。10-18 可能未完整；零值也不证明没人搜。游戏名升温不等于供电词已经起量；具体故障长尾及中文词没有取得趋势序列。
- Trends 的网页文本读取工具失败后，浏览器界面成功显示图表与表格；没有绕过限制调用隐藏接口。

趋势入口：[90 天](https://trends.google.com/trends/explore?date=today%203-m&q=Beyond%20These%20Stars)、[7 天](https://trends.google.com/trends/explore?date=now%207-d&q=Beyond%20These%20Stars)。

## 原始依据与边界

1. [Steam 商店](https://store.steampowered.com/app/2295060/Beyond_These_Stars/?l=schinese)：中文名、发售日及语言支持。
2. [官方社区 / 热修](https://steamcommunity.com/app/2295060/announcements/)：10-16 第 1 次热修更正发电机范围显示，第 1、2 次修复部分移动建筑问题。仅据此建议核对版本，不说所有卡住都已修好。
3. [官方 Wiki：Power](https://wiki.hoodedhorse.com/Beyond_These_Stars/Power)：电力自动传输、连续接触建筑链、道路和空地的分隔。
4. [官方 Wiki：Burner Generator](https://wiki.hoodedhorse.com/Beyond_These_Stars/Burner_Generator)：燃料与烟灰堵塞。
5. [官方 Wiki：Power Lines](https://wiki.hoodedhorse.com/Beyond_These_Stars/Power_Lines)：铜锭解锁、线路被树木/建筑阻挡。
6. [官方 Wiki：Ore Smelter](https://wiki.hoodedhorse.com/Beyond_These_Stars/Ore_Smelter)：矿石和电力输入。
7. [官方 Wiki：Storage Shed](https://wiki.hoodedhorse.com/Beyond_These_Stars/Storage_Shed)：资源分配与产物堵塞；本页不抄未经核实的容量数值。
8. [官方 Wiki：Buildings](https://wiki.hoodedhorse.com/Beyond_These_Stars/Building)：施工等料与上游暂停。
9. [开发者 FAQ](https://steamcommunity.com/app/2295060/discussions/0/601911716272542834/)：F11 报告入口。其旧发布日期预测不用于当前发售判断。
10. [旧试玩问题讨论](https://steamcommunity.com/app/2295060/discussions/3/693124465727388417/)：历史上出现 No Space / Missing Input 困惑，不当作 10 月新帖。
11. [Enshrouded 官方 FAQ](https://enshrouded.com/en-US/news/enshrouded-launch-faq-early-access-reward-world)、[跨平台用户问题](https://www.reddit.com/r/Enshrouded/comments/1x79v09/any_idea_on_the_crossplay_timeline/)；[Tenebris Somnia 官方发售公告](https://steamcommunity.com/app/2121510/allnews/?l=english)、[已有流程站](https://intoindiegames.com/walkthrough-hub/tenebris-somnia-walkthrough-hub/)；[豆包官方商店更新](https://apps.apple.com/cn/app/id6752316550)、[9 月 Windows 互传讨论](https://linux.do/t/topic/2875316)。

Wiki 细节以当前版本为准。其中 Power 总页允许连续相接的建筑链，而 Burner Generator 页写简单的直接接触。首版采用总页机制，直接接触只是最简单的排查布局，没有混成“所有建筑必须各自贴着发电机”的规则。未进入游戏实测，也未复制第三方攻略或游戏图片。

## 预览与验证

在本目录运行 `node tools/serve.cjs`，打开 http://127.0.0.1:8767/zh.html 。此服务器只绑定本机，只读提供本项目文件。

`node tools/verify.cjs` 验证两种语言的四个真实按钮、禁用脚本时的清单、手机宽度与浏览器错误，并保存本地截图到 proof/。需要本机已有的 Playwright，不自动安装依赖。

本轮验收已执行并通过：两种语言分别在 1440、390 宽度检查四个按钮；语言互跳、键盘 Enter、无脚本全部清单、无横向溢出、无页面脚本错误、无外部请求。已查看中文桌面和手机截图。初次测试浏览器启动被沙箱阻止，获准执行后同一测试通过；没有跳过这一步。截图保存在 proof/，研究临时标签页已关闭，用户原有页面保留。

上线后才有机会验证获客：先确认实际收录，再看是否出现相关问题查询的展示与点击。至少有对应查询/页面的数据再决定是否扩内容；仅访问首版或自测事件不算需求验证。维护不住更新，或有展示但无法用小改动改善结果，就暂停扩展。
