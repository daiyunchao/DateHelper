let DateHelper = require("./DateHelper.js");
let expect = require('chai').expect;
let timeStamp1 = 1532145026000;
let timeStamp2 = 1535341826000;
let mss = 3456890;
let date1;
let date2;


describe('测试时间戳和日期相互转换:', () => {
  it(`测试:getDateByTimeStamp方法,使用时间戳:${timeStamp1}转换成yyyy-MM-dd HH:mm:ss日期格式的结果是:2018-07-21 11:50:26`, () => {
    date1 = DateHelper.getDateByTimeStamp(timeStamp1);
    expect(date1).to.be.equal('2018-07-21 11:50:26')
  });
  it(`测试:getCNDateByTimeStamp方法,使用时间戳:${timeStamp1}转换成yyyy年MM月dd HH:mm:ss日期格式的结果是:2018年07月21日 11:50:26`, () => {
    date1 = DateHelper.getCNDateByTimeStamp(timeStamp1);
    expect(date1).to.be.equal('2018年07月21日 11:50:26')
  });
  it(`测试:buildDateBySplitSign,使用时间戳:${timeStamp1}构建下斜杆格式的日期结果是:2018/07/21/ 11:50:26`, () => {
    date1 = DateHelper.buildDateBySplitSign({
      timeStamp: timeStamp1,
      yearSign: "/",
      monthSign: "/"
    });
    expect(date1).to.be.equal('2018/07/21 11:50:26')
  })

  it(`测试:getDateByTimeStampEndWithDay,使用时间戳:${timeStamp1}获取截止到天的日期格式 结果是:2018-07-21`, () => {
    date1 = DateHelper.getDateByTimeStampEndWithDay(timeStamp1);
    expect(date1).to.be.equal('2018-07-21')
  })

  it(`测试:getCNDateByTimeStampEndWithDay,使用时间戳:${timeStamp1}获取截止到天的日期格式 结果是:2018年07月21日`, () => {
    date1 = DateHelper.getCNDateByTimeStampEndWithDay(timeStamp1);
    expect(date1).to.be.equal('2018年07月21日')
  })

  it(`测试:getDateByTimeStampEndWithMonth,使用时间戳:${timeStamp1}获取截止到月的日期格式 结果是:2018-07`, () => {
    date1 = DateHelper.getDateByTimeStampEndWithMonth(timeStamp1);
    expect(date1).to.be.equal('2018-07')
  })

  it(`测试:getCNDateByTimeStampEndWithMonth,使用时间戳:${timeStamp1}获取截止到月的日期格式 结果是:2018年07月`, () => {
    date1 = DateHelper.getCNDateByTimeStampEndWithMonth(timeStamp1);
    expect(date1).to.be.equal('2018年07月')
  })

  it(`测试:getCNTimeByTimeStamp,使用参数${mss}通过一个数字类型的毫秒数,转换成X小时Y分Z秒格式 结果是:57分37秒`, () => {
    let tempTimeStamp = DateHelper.getCNTimeByTimeStamp(mss);
    expect(tempTimeStamp).to.be.equal('57分37秒')
  })

  it(`测试:getWeekDayByTimeStamp,使用参数${timeStamp1}获取星期几 结果是:6`, () => {
    let weekDay = DateHelper.getWeekDayByTimeStamp(timeStamp1);
    expect(weekDay).to.be.equal(6)
  })

  it(`测试:getCNWeekDayByTimeStamp,使用参数${timeStamp1}获取中文的星期几 结果是:星期六`, () => {
    let weekDay = DateHelper.getCNWeekDayByTimeStamp(timeStamp1);
    expect(weekDay).to.be.equal("星期六")
  })

  it(`测试:getNewTimeStampByAddDay,使用参数${timeStamp1}加上1天获取新的时间戳${timeStamp1 + 24 * 60 * 60 * 1000}`, () => {
    let newTimeStamp = DateHelper.getNewTimeStampByAddDay(timeStamp1, 1);
    expect(newTimeStamp).to.be.equal(timeStamp1 + 24 * 60 * 60 * 1000);
  })

  it(`测试:getMonthCNNameInYearByTimeStamp,使用参数${timeStamp1}获取该时间戳的中文月份:结果是:七月`, () => {
    let monthCNName = DateHelper.getMonthCNNameInYearByTimeStamp(timeStamp1);
    expect(monthCNName).to.be.equal("七月");
  })

  it(`测试:getWeekCountInYearByTimeStamp,使用参数${timeStamp1}获取时间戳是该年的第几个星期:结果是:29`, () => {
    let weekCount = DateHelper.getWeekCountInYearByTimeStamp(timeStamp1);
    expect(weekCount).to.be.equal(29);
  })

  it(`测试:timeStampIsSameWeek,使用参数${timeStamp1}和${timeStamp2}判断两个时间戳是否是同一周:结果是:false`, () => {
    let isSameWeek = DateHelper.timeStampIsSameWeek(timeStamp1, timeStamp2);
    expect(isSameWeek).to.be.equal(false);
  })

  it(`测试:timeStampIsSameMonth,使用参数${timeStamp1}和${timeStamp2}判断两个时间戳是否是同一月:结果是:false`, () => {
    let isSameMonth = DateHelper.timeStampIsSameMonth(timeStamp1, timeStamp2);
    expect(isSameMonth).to.be.equal(false);
  })
})


//测试今日最小时间戳
let todayMinTimeStamp = DateHelper.getTodayMinTimeStamp();

//测试今日最大时间戳
let todayMaxTimeStamp = DateHelper.getTodayMaxTimeStamp();

//测试昨日最小时间戳
let yesterdayMinTimeStamp = DateHelper.getYesterdayMinTimeStamp();

//测试昨日最大时间戳
let yesterdayMaxTimeStamp = DateHelper.getYesterdayMaxTimeStamp();

//通过时间戳获取,该时间戳指定的天中最小时间戳
let minTimeByTimeStamp = DateHelper.getMinTimeStampByTimeStamp(timeStamp1);

//通过时间戳获取,该时间戳指定的天中最大时间戳
let maxTimeByTimeStamp = DateHelper.getMaxTimeStampByTimeStamp(timeStamp1);

//获取本周最小时间戳
let minTimeStampInWeek = DateHelper.getCurrentWeekMinTimeStamp();

//获取本周最大时间戳
let maxTimeStampInWeek = DateHelper.getCurrentWeekMaxTimeStamp();

//获取指定时间戳对应周的最小时间戳
let minTimeStampInWeekByTimeStamp = DateHelper.getWeekMinTimeStampByTimeStamp(timeStamp1);

//获取指定时间戳对应周的最大时间戳
let maxTimeStampByTimeStamp = DateHelper.getWeekMaxTimeStampByTimeStamp(timeStamp1);

//获取本月最小时间戳
let minTimeStampInMonth = DateHelper.getCurrentMonthMinTimeStamp();

//获取本月最大时间戳
let maxTimeStampInMonth = DateHelper.getCurrentMonthMaxTimeStamp();

//获取指定时间戳对应月的最小时间戳
let minTimeStampInMonthByTimeStamp = DateHelper.getMonthMinTimeStampByTimeStamp(timeStamp1);

//获取指定时间戳对应月的最大时间戳
let maxTimeStampInMonthByTimeStamp = DateHelper.getMonthMaxTimeStampByTimeStamp(timeStamp1);

//获取当前时间是在一年中的第几周
let weekNumber = DateHelper.getCurrentDateWeekCountInYear();

//获取当前时间是在一年中的第几月
let monthNumber = DateHelper.getCurrentDateMonthCountInYear();

//获取当前时间是在一年中的第几月(中文)
let monthCNNumber = DateHelper.getCurrentDateMonthCNNameInYear();

console.log(`测试今日最小时间戳:${todayMinTimeStamp}`);
console.log(`测试今日最大时间戳:${todayMaxTimeStamp}`);
console.log(`测试昨日最小时间戳:${yesterdayMinTimeStamp}`);
console.log(`测试昨日最大时间戳:${yesterdayMaxTimeStamp}`);
console.log(`通过时间戳获取,该时间戳指定的天中最小时间戳:${minTimeByTimeStamp}`);
console.log(`通过时间戳获取,该时间戳指定的天中最大时间戳:${maxTimeByTimeStamp}`);
console.log(`获取本周最小时间戳:${minTimeStampInWeek}`);
console.log(`获取本周最大时间戳:${maxTimeStampInWeek}`);
console.log(`获取指定时间戳对应周的最小时间戳:${minTimeStampInWeekByTimeStamp}`);
console.log(`获取指定时间戳对应周的最大时间戳:${maxTimeStampByTimeStamp}`);
console.log(`获取本月最小时间戳:${minTimeStampInMonth}`);
console.log(`获取本月最大时间戳:${maxTimeStampInMonth}`);
console.log(`获取指定时间戳对应月的最小时间戳:${minTimeStampInMonthByTimeStamp}`);
console.log(`获取指定时间戳对应月的最大时间戳:${maxTimeStampInMonthByTimeStamp}`);
console.log(`获取当前时间是在一年中的第几周:${weekNumber}`);
console.log(`获取当前时间是在一年中的第几月:${monthNumber}`);
console.log(`获取当前时间是在一年中的第几月(中文):${monthCNNumber}`);