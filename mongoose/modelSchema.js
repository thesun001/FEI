var mongoose = require('./connect.js');

var Schema = mongoose.Schema;

/*用户数据模型*/

var userSchema = new Schema({
	username:String,
	number:Number,
	number_s:String,
	authCode:Number,
	gonghao:Number,
	z_gonghao:Number,
	top_gonghao:Number,
	top_name:String,
	time:String
});

/*授权码数据模型*/

var codeSchema = new Schema({
	authCode:Number,
	time:String
});

/*评估数据模型*/
var pingSchema = new Schema({
	username:String,
	number:Number,
	zonghefen:Number,
	jikexishu:Number,
	chushiedu:Number,
	diyaedu:Number,
	time:String
});

/*佣金数据模型*/
var moneySchema = new Schema({
	ownername:String,
	ownerNumber:Number,
	gonghao:Number,
	z_gonghao:Number,
	top_gonghao:Number,
	username:String,
	number:String,
	shenqingTime:String,
	shengxiaoTime:String,
	xiakuanEdu:Number,
	money:Number,
	isSuccess:Boolean, /*//佣金是否发放*/
	isBecause:String, /*//未发放的原因*/
	isMyself:Boolean, /*//是本人发起的请求？*/
	time:String,
	timeStamp:String
});

/*工号数据模型*/

var haoSchema = new Schema({
	ownername:String,
	ownerNumber:Number,
	gonghao:Number,
	z_gonghao:Number,
	top_gonghao:Number,
	isVip:String,
	all_yeji:Number,
	all_money:Number,
	one_money:Number,  /*团队总业绩*/
	alipay:String,
	money_level:Number,
	act_zone:String,
	zan_num:Number,
	wechat:String,
	time:String,
	province:String,
	piaoNum:Number
});

/*评估系统评估数据模型*/
var pgSchema = new Schema({
	username:String,
	number:Number,
	card_id:String,
	zonghefen:Number,
	jikexishu:Number,
	chushiedu:Number,
	diyaedu:Number,
	gonghao:Number,
	jindu_:String,
	time:String
});

/*瓜分额度数据模型*/

var guaSchema = new Schema({
	username:String,
	number:Number,
	number_s:String,
	authCode:Number,
	card_id:String,
	guaedu:Number,
	gonghao:Number,
	z_gonghao:Number,
	top_gonghao:Number,
	time:String
})

/*各地区投票结果*/

var piaoSchema = new Schema({
	aname:String,
	guangdong:Number,
	fujian:Number,
	zhejiang:Number,
	jiangsu:Number,
	anhui:Number,
	hubei:Number,
	hunan:Number,
	guizhou:Number,
	yunnan:Number,
	guangxi:Number,
	jiangxi:Number,
	sichuan:Number,
	shanxi:Number,
	gansu:Number,
	shandong:Number,
	shanxio:Number,
	hebei:Number,
	henan:Number,
	liaoning:Number,
	jilin:Number,
	heilongjiang:Number,
	hainan:Number,
	beijing:Number,
	tianjin:Number,
	chongqing:Number,
	shanghai:Number,
})


var User = mongoose.model('user',userSchema);
var Code = mongoose.model('code',codeSchema);
var Ping = mongoose.model('ping',pingSchema);
var Money = mongoose.model('money',moneySchema);
var Hao= mongoose.model('hao',haoSchema);
var Pg = mongoose.model('pg',pgSchema);
var Gua = mongoose.model('gua',guaSchema);
var Piao = mongoose.model('piao',piaoSchema);



module.exports.User = User;
module.exports.Code = Code;
module.exports.Ping = Ping;
module.exports.Money = Money;
module.exports.Hao = Hao;
module.exports.Pg = Pg;
module.exports.Gua = Gua;
module.exports.Piao = Piao;