Page({
    data: {
        imgUrls: [
            'http://img1.plateno.com/inn/090020007/964dbf649a411b0b1ac435805209ea37_640_480.jpg',
            'http://img1.plateno.com/inn/222110/78ca9011834291cb77851cd620304579_640_480.jpg',
            'http://img1.plateno.com/inn/020111/9623c5c1541db1698497d4a9ae47bdc5_640_480.jpg'
        ],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        list:[{
            imgUrls:'http://img1.plateno.com/inn/090020007/964dbf649a411b0b1ac435805209ea37_640_480.jpg',
            price:300,
            fanyuan:true,  /*房源紧张*/
            location:'天河区/火车东站、天河体育中心',
            title:'麗枫酒店·广州天河岗顶地铁站',
            integral:399, /*积分*/
            score:4.7,
            number:'1034人点评',
            jytj:true /*今夜特价*/
        },{
            imgUrls:'http://images.plateno.com/images/inn/15s8idO5Hi/320',
            price:147,
            fanyuan:false,
            location:'1 | 白云区/白云太和镇',
            title:'IU酒店·广州太和广场店',
            message:'有大型免费停车场',
            integral:200,
            score:4.7,
            number:'922人点评'
        },{
            imgUrls:'http://images.plateno.com/images/inn/15vbpG0qgG/320',
            price:114,
            fanyuan:false,
            location:'天河区/火车东站、天河体育中心',
            title:'麗枫酒店·广州天河岗顶地铁站店',
            message:'可能是逼格最高的七天',
            integral:291,
            score:4.7,
            jytj:true,
            number:'1311人点评'
        },{
            imgUrls:'http://images.plateno.com/images/inn/14T8VCJF6S/320',
            price:127,
            fanyuan:false,
            location:'1 | 海珠区/珠江南（河南）地区',
            title:'7天广州宝业路沙园地铁站店',
            integral:false,
            message:'广交会首选酒店',
            score:4.7,
            number:'1601人点评'
        },{
            imgUrls:'http://images.plateno.com/images/inn/14pUxuZbEm/320',
            price:153,
            fanyuan:true,
            location:'1 | 越秀区/环市东路附近',
            title:'7天广州中华广场店',
            message:'离省医中山医最近',
            integral:399,
            score:4.7,
            number:'1172人点评'
        },{
            imgUrls:'http://img1.plateno.com/inn/020113/7e0c0d53f2718df6a44b62b1462dd992_640_480.jpg',
            price:107,
            fanyuan:false, 
            location:'1 | 番禺区/番禺市桥（近长隆度假区',
            title:'7天广州番禺市桥地铁站店',
            message:'给您家的感受！',
            score:4.7,
            jytj:true,
            number:'1143人点评'
        },{
            imgUrls:'http://images.plateno.com/images/inn/14XgJAtOAl/320',
            price:107,
            fanyuan:false,
            location:'1 | 增城区',
            title:'7天广州增城开发区永和汽车站',
            message:'交通便利',
            integral:'',
            score:4.7,
            number:'1126人点评'
        },{
            imgUrls:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            price:300,
            fanyuan:true,
            location:'天河区/火车东站、天河体育中心',
            title:'麗枫酒店·广州天河岗顶地铁站店',
            integral:399,
            score:4.7,
            number:'1034人点评'
        }]
    },
    bindViewTap: function() {
    wx.navigateTo({
      url: '../detail/detail'
    })
  }
})
