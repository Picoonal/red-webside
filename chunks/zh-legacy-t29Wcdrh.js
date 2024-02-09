System.register([],(function(n,e){"use strict";return{execute:function(){n("default",{layout:{aside:{home:function(n){return(0,n.normalize)(["首页"])},commodity:function(n){return(0,n.normalize)(["商品管理"])},notes:function(n){return(0,n.normalize)(["笔记管理"])}},header:{logout:function(n){return(0,n.normalize)(["退出登陆"])}}},components:{Pagination:{nextPageBtn:function(n){return(0,n.normalize)(["下一页"])},prevPageBtn:function(n){return(0,n.normalize)(["上一页"])},totalPage:function(n){return(0,n.normalize)(["共",(0,n.interpolate)((0,n.named)("totalPage")),"页"])}},FilterBar:{searchPlaceHolder:function(n){return(0,n.normalize)([(0,n.interpolate)((0,n.named)("text"))])},filterPlaceHolder:function(n){return(0,n.normalize)(["请选择筛选条件"])},filterLabel:{note:{id:function(n){return(0,n.normalize)(["笔记编号"])},title:function(n){return(0,n.normalize)(["笔记标题"])}},commodity:{id:function(n){return(0,n.normalize)(["商品编号"])},name:function(n){return(0,n.normalize)(["商品名称"])},brand:function(n){return(0,n.normalize)(["品牌"])}}}},CommodityItem:{genNoteBtn:function(n){return(0,n.normalize)(["生成笔记"])},deleteBtn:function(n){return(0,n.normalize)(["删除"])},editBtn:function(n){return(0,n.normalize)(["编辑"])},sellPoints:function(n){return(0,n.normalize)(["卖点"])},scenarios:function(n){return(0,n.normalize)(["场景"])},notes:function(n){return(0,n.normalize)(["笔记"])},geningNoteCount:function(n){return(0,n.normalize)([(0,n.interpolate)((0,n.named)("num")),"篇笔记生成中"])},geningError:function(n){return(0,n.normalize)(["笔记生成失败请重试"])}},NoteItem:{publishBtn:function(n){return(0,n.normalize)(["编辑&发布"])},deleteBtn:function(n){return(0,n.normalize)(["删除"])},contentLabel:function(n){return(0,n.normalize)(["内容: "])},commodityLabel:function(n){return(0,n.normalize)(["商品信息: "])}},EditCommodityForm:{placeInput:function(n){return(0,n.normalize)(["请输入",(0,n.interpolate)((0,n.named)("text"))])},confirm:function(n){return(0,n.normalize)(["确认"])},cancel:function(n){return(0,n.normalize)(["取消"])},label:{name:function(n){return(0,n.normalize)(["标题"])},brand:function(n){return(0,n.normalize)(["品牌"])},sellPoints:function(n){return(0,n.normalize)(["卖点"])},scenarios:function(n){return(0,n.normalize)(["场景"])},images:function(n){return(0,n.normalize)(["商品图片"])}}},GenerateNoteForm:{placeInput:function(n){return(0,n.normalize)(["请输入",(0,n.interpolate)((0,n.named)("text"))])},genNoteBtn:function(n){return(0,n.normalize)(["生成笔记"])},cancel:function(n){return(0,n.normalize)(["取消"])},label:{commodityName:function(n){return(0,n.normalize)(["商品名称"])},commoditysellPoints:function(n){return(0,n.normalize)(["商品卖点"])},commodityscenarios:function(n){return(0,n.normalize)(["商品场景"])},other:function(n){return(0,n.normalize)(["补充需求"])},genNumber:function(n){return(0,n.normalize)(["生成篇数"])}}},EditNoteForm:{placeInput:function(n){return(0,n.normalize)(["请输入",(0,n.interpolate)((0,n.named)("text"))])},cancel:function(n){return(0,n.normalize)(["取消"])},publishBtn:function(n){return(0,n.normalize)(["保存并发布"])},saveBtn:function(n){return(0,n.normalize)(["保存"])},label:{title:function(n){return(0,n.normalize)(["标题"])},content:function(n){return(0,n.normalize)(["笔记正文"])},topics:function(n){return(0,n.normalize)(["笔记标签"])}}},LoginForm:{title:function(n){return(0,n.normalize)(["登陆"])},loginBtn:function(n){return(0,n.normalize)(["登陆"])},registerBtn:function(n){return(0,n.normalize)(["注册"])},emailLabel:function(n){return(0,n.normalize)(["邮箱"])},passwordLabel:function(n){return(0,n.normalize)(["密码"])},emailPlaceholder:function(n){return(0,n.normalize)(["请输入邮箱"])},passwordPlaceholder:function(n){return(0,n.normalize)(["请输入密码"])}},RegisterForm:{title:function(n){return(0,n.normalize)(["注册"])},registerBtn:function(n){return(0,n.normalize)(["注册"])},loginBtn:function(n){return(0,n.normalize)(["登陆"])},emailLabel:function(n){return(0,n.normalize)(["邮箱"])},passwordLabel:function(n){return(0,n.normalize)(["密码"])},checkPasswordLabel:function(n){return(0,n.normalize)(["确认密码"])},nickNameLabel:function(n){return(0,n.normalize)(["昵称"])},emailPlaceholder:function(n){return(0,n.normalize)(["请输入邮箱"])},nickNamePlaceholder:function(n){return(0,n.normalize)(["请输入昵称"])},passwordPlaceholder:function(n){return(0,n.normalize)(["请输入密码"])},checkPasswordPlaceholder:function(n){return(0,n.normalize)(["再次输入密码以确认"])}}},commodity:{title:function(n){return(0,n.normalize)(["商品列表"])},searchPlaceHolder:function(n){return(0,n.normalize)(["商品名称 / 商品编号 / 品牌"])},createCommodityBtn:function(n){return(0,n.normalize)(["新增商品"])},formTitle:{createCommodity:function(n){return(0,n.normalize)(["添加商品"])},editCommodity:function(n){return(0,n.normalize)(["编辑商品"])},generateNote:function(n){return(0,n.normalize)(["生成笔记"])}},response:{createCommoditySuccess:function(n){return(0,n.normalize)(["添加成功"])},generateNoteInfo:function(n){return(0,n.normalize)(["后台正在生成中,请耐心等待..."])},deleteCommoditySuccess:function(n){return(0,n.normalize)(["删除成功"])},changeCommoditySuccess:function(n){return(0,n.normalize)(["修改成功"])}}},notes:{title:function(n){return(0,n.normalize)(["笔记列表"])},searchPlaceHolder:function(n){return(0,n.normalize)(["笔记名称 / 笔记编号 / 商品名称 / 商品编号"])},createNoteBtn:function(n){return(0,n.normalize)(["新增笔记"])},publishInfoModelTitle:function(n){return(0,n.normalize)(["发布信息填写"])},formTitle:{newNote:function(n){return(0,n.normalize)(["新增笔记"])},editNote:function(n){return(0,n.normalize)(["编辑笔记"])}},label:{info:function(n){return(0,n.normalize)(["笔记信息"])},desc:function(n){return(0,n.normalize)(["笔记详情"])},commodityInfo:function(n){return(0,n.normalize)(["商品信息"])},operate:function(n){return(0,n.normalize)(["操作"])}},response:{createNoteSuccess:function(n){return(0,n.normalize)(["新增成功"])},saveNoteSuccess:function(n){return(0,n.normalize)(["保存成功"])},publishReadyInfo:function(n){return(0,n.normalize)(["准备发布..."])},publishSuccess:function(n){return(0,n.normalize)(["发布成功"])},deleteNoteSuccess:function(n){return(0,n.normalize)(["删除成功"])}},noteModel:{title:function(n){return(0,n.normalize)(["选择发布类型"])},typeLabel:function(n){return(0,n.normalize)(["发布类型"])},dateLabel:function(n){return(0,n.normalize)(["发布日期"])},type:{word:function(n){return(0,n.normalize)(["图文"])},video:function(n){return(0,n.normalize)(["视频"])}}}},home:{hyy:function(n){return(0,n.normalize)(["WELCOME TO AI WORLD"])}},auth:{login:function(n){return(0,n.normalize)(["登陆"])},register:function(n){return(0,n.normalize)(["注册"])}},notFound:{message:function(n){return(0,n.normalize)(["暂时无法打开页面, 请稍后再试"])},backHomeBtn:function(n){return(0,n.normalize)(["返回首页"])}},error:{500:function(n){return(0,n.normalize)(["出错了,请重试"])},aiIsActive:function(n){return(0,n.normalize)(["这个商品的机器人正在努力生成笔记中"])},loginError:function(n){return(0,n.normalize)(["邮箱或密码错误"])},emailNotFound:function(n){return(0,n.normalize)(["邮箱不存在"])},autoLoginError:function(n){return(0,n.normalize)(["自动登录失败,请尝试手动登陆"])},unauthorized:function(n){return(0,n.normalize)(["请登录后重试"])}},generateNoteSuccess:function(n){return(0,n.normalize)([(0,n.interpolate)((0,n.named)("name")),"的笔记生成成功"])}})}}}));