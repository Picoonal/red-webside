const t={layout:{aside:{home:e=>{const{normalize:n}=e;return n(["首页"])},commodity:e=>{const{normalize:n}=e;return n(["商品管理"])},notes:e=>{const{normalize:n}=e;return n(["笔记管理"])}},header:{logout:e=>{const{normalize:n}=e;return n(["退出登陆"])}}},components:{Pagination:{nextPageBtn:e=>{const{normalize:n}=e;return n(["下一页"])},prevPageBtn:e=>{const{normalize:n}=e;return n(["上一页"])},totalPage:e=>{const{normalize:n,interpolate:r,named:o}=e;return n(["共",r(o("totalPage")),"页"])}},FilterBar:{searchPlaceHolder:e=>{const{normalize:n,interpolate:r,named:o}=e;return n([r(o("text"))])},filterPlaceHolder:e=>{const{normalize:n}=e;return n(["请选择筛选条件"])}},CommodityItem:{genNoteBtn:e=>{const{normalize:n}=e;return n(["生成笔记"])},sellPoints:e=>{const{normalize:n}=e;return n(["卖点"])},scenarios:e=>{const{normalize:n}=e;return n(["场景"])},notes:e=>{const{normalize:n}=e;return n(["笔记"])}},NoteItem:{publishBtn:e=>{const{normalize:n}=e;return n(["编辑&发布"])},deleteBtn:e=>{const{normalize:n}=e;return n(["删除"])}},CreateCommodityForm:{placeInput:e=>{const{normalize:n,interpolate:r,named:o}=e;return n(["请输入",r(o("text"))])},confirm:e=>{const{normalize:n}=e;return n(["确认"])},cancel:e=>{const{normalize:n}=e;return n(["取消"])},label:{title:e=>{const{normalize:n}=e;return n(["标题"])},brand:e=>{const{normalize:n}=e;return n(["品牌"])},sellPoints:e=>{const{normalize:n}=e;return n(["卖点"])},scenarios:e=>{const{normalize:n}=e;return n(["场景"])},images:e=>{const{normalize:n}=e;return n(["商品图片"])}}},GenerateNoteForm:{placeInput:e=>{const{normalize:n,interpolate:r,named:o}=e;return n(["请输入",r(o("text"))])},genNoteBtn:e=>{const{normalize:n}=e;return n(["生成笔记"])},cancel:e=>{const{normalize:n}=e;return n(["取消"])},label:{commodityName:e=>{const{normalize:n}=e;return n(["商品名称"])},commoditysellPoints:e=>{const{normalize:n}=e;return n(["商品卖点"])},commodityscenarios:e=>{const{normalize:n}=e;return n(["商品场景"])},other:e=>{const{normalize:n}=e;return n(["补充需求"])},genNumber:e=>{const{normalize:n}=e;return n(["生成篇数"])}}},EditNoteForm:{placeInput:e=>{const{normalize:n,interpolate:r,named:o}=e;return n(["请输入",r(o("text"))])},cancel:e=>{const{normalize:n}=e;return n(["取消"])},publishBtn:e=>{const{normalize:n}=e;return n(["保存并发布"])},saveBtn:e=>{const{normalize:n}=e;return n(["保存"])},label:{title:e=>{const{normalize:n}=e;return n(["标题"])},content:e=>{const{normalize:n}=e;return n(["笔记正文"])},topics:e=>{const{normalize:n}=e;return n(["笔记标签"])}}}},commodity:{title:e=>{const{normalize:n}=e;return n(["商品列表"])},searchPlaceHolder:e=>{const{normalize:n}=e;return n(["商品名称 / 商品编号 / 品牌"])},createCommodityBtn:e=>{const{normalize:n}=e;return n(["新增商品"])},formTitle:{createCommodity:e=>{const{normalize:n}=e;return n(["添加商品"])},generateNote:e=>{const{normalize:n}=e;return n(["生成笔记"])}},response:{createCommoditySuccess:e=>{const{normalize:n}=e;return n(["添加成功"])},generateNoteInfo:e=>{const{normalize:n}=e;return n(["后台正在生成中,请耐心等待..."])}}},notes:{title:e=>{const{normalize:n}=e;return n(["笔记列表"])},searchPlaceHolder:e=>{const{normalize:n}=e;return n(["笔记名称 / 笔记编号 / 商品名称 / 商品编号"])},createNoteBtn:e=>{const{normalize:n}=e;return n(["新增笔记"])},formTitle:{newNote:e=>{const{normalize:n}=e;return n(["新增笔记"])},editNote:e=>{const{normalize:n}=e;return n(["编辑笔记"])}},label:{info:e=>{const{normalize:n}=e;return n(["笔记信息"])},desc:e=>{const{normalize:n}=e;return n(["笔记详情"])},commodityInfo:e=>{const{normalize:n}=e;return n(["商品信息"])},operate:e=>{const{normalize:n}=e;return n(["操作"])}},response:{createNoteSuccess:e=>{const{normalize:n}=e;return n(["新增成功"])},saveNoteSuccess:e=>{const{normalize:n}=e;return n(["保存成功"])},publishReadyInfo:e=>{const{normalize:n}=e;return n(["准备发布..."])},publishSuccess:e=>{const{normalize:n}=e;return n(["发布成功"])},deleteNoteSuccess:e=>{const{normalize:n}=e;return n(["删除成功"])}}},home:{hyy:e=>{const{normalize:n}=e;return n(["WELCOME TO AI WORLD"])}},notFound:{message:e=>{const{normalize:n}=e;return n(["暂时无法打开页面, 请稍后再试"])},backHomeBtn:e=>{const{normalize:n}=e;return n(["返回首页"])}},error:{500:e=>{const{normalize:n}=e;return n(["出错了,请重试"])},aiIsActive:e=>{const{normalize:n}=e;return n(["这个商品的机器人正在努力生成笔记中"])}},generateNoteSuccess:e=>{const{normalize:n,interpolate:r,named:o}=e;return n([r(o("name")),"的笔记生成成功"])}};export{t as default};
