var express = require('express');
var app = express();
var request = require("request");
//解决跨域的问题
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// var homeApi = 'https://mrobot.pconline.com.cn/s-300/best/cms/listHomepagev2.xsp?pageSize=20&sectionId=';
 var homeApi = 'http://app.u17.com/v3/appV3_3/ios/phone/comic/boutiqueListNew?device_id=91AE94C5-AE78-40A2-8638-B57E58CEB1AA&model=iPhone&sexType=1&target=U17_3.0&time=1515030284&v=3320101&version=3.3.3';
 var rankApi ='http://app.u17.com/v3/appV3_3/ios/phone/rank/list?device_id=91AE94C5-AE78-40A2-8638-B57E58CEB1AA&model=iPhone&sexType=1&target=U17_3.0&time=1515030284&v=3320101&version=3.3.3'
 var delApi = 'http://app.u17.com/v3/appV3_3/ios/phone/comic/detail_static_new?comicid='
 var CateItem ='http://app.u17.com/v3/appV3_3/ios/phone/comic/chapterNew?chapter_id='
 var homeBtn = 'http://app.u17.com/v3/appV3_3/ios/phone/list/index?device_id=91AE94C5-AE78-40A2-8638-B57E58CEB1AA&key=f840f2a39453b195ce1d9912e28c0abd33ac24fa3485f5cd82888d296137916ea66f661d43842757e7d5558e51f80019693d1ac0dcdd46c70f0923e7fbd277935bcbaac684270e148dd0661eaa35a6796775434c0247f4b8cfd3d809867655584f2f736e4bd3ac21a26e484d162cfd5e3eb6bc992e29298d323e6f404d14ac63fe6c43bf827413c47509ed650d91b0a0fa82048e3d7d30f4622bbe69d2898f92c4386da5c00643e180ead6f3416c3c45%3A%3A%3Aopen&model=iPhone&page=1&target=U17_3.0&time=1515134106&version=3.3.3&'
 var Category = 'http://app.u17.com/v3/appV3_3/ios/phone/sort/mobileCateList?device_id=91AE94C5-AE78-40A2-8638-B57E58CEB1AA&key=f840f2a39453b195ce1d9912e28c0abd33ac24fa3485f5cd82888d296137916ea66f661d43842757e7d5558e51f80019693d1ac0dcdd46c70f0923e7fbd277935bcbaac684270e148dd0661eaa35a6796775434c0247f4b8cfd3d809867655584f2f736e4bd3ac21a26e484d162cfd5e3eb6bc992e29298d323e6f404d14ac63fe6c43bf827413c47509ed650d91b0a0fa82048e3d7d30f4622bbe69d2898f92c4386da5c00643e180ead6f3416c3c45%3A%3A%3Aopen&model=iPhone&target=U17_3.0&time=1515134321&v=2&version=3.3.3'
app.get('/api/home',function(req,res){
    //在后台请求的api
    request(homeApi+req.query.sectionId+'&pageNo='+req.query.pageNo,function(error,response,body){
        res.send(response.body);
    })
})
app.get('/api/rank',function(req,res){
  request(rankApi+req.query.sectionId+'&pageNo='+req.query.pageNo,function(error,response,body){
      res.send(response.body);
  })
})
app.get('/api/homeBtn',function(req,res){
    request(homeBtn +"&argName="+ req.query.argName+'&argValue='+req.query.argValue,function(error,response,body){
        res.send(response.body);
    })
  })
app.get('/api/Category',function(req,res){
    request(Category,function(error,response,body){
        res.send(response.body);
    })
  })
app.get('/api/detail',function(req,res){
	//在后台请求的api
	//在后台请求的
  request(delApi+req.query.comicid,function(error,response,body){
      res.send(response.body);
  })
})
app.get('/api/CateItem',function(req,res){
  request(CateItem+req.query.chapter_id,function(error,response,body){
      res.send(response.body);
  })
})

app.get('/api/search',function(req,res){
    request('https://mrobot.pconline.com.cn/s-3600/best/search/classfyIndex.xsp?type=1&platform=ios&v=3.1.1&inReview=0',function(error,response,body){
        res.send(response.body);
    })
})

var recommandAPI = 'https://mrobot.pconline.com.cn/s-300/best/search/listTopicSearch.xsp?searchCondition=';

var server = app.listen(3000,function(){
	console.log("监听端口号3000");
})
