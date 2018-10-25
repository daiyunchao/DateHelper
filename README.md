# DateHelper
>日期和时间戳之间的相互转换

>可用于浏览器和NodeJS

> 功能说明(代码很简单,提供一些简单有效的Date类型的方法):
/*********************************************************************************************** 
  * 函数和参数说明:
  * 
  * 
  * 通过时间戳获取yyyy-MM-dd HH:mm:ss格式的日期:
  * getDateByTimeStamp(timeStamp)
  * 
  * 通过时间戳获取yyyy年MM月dd HH:mm:ss格式的日期:
  * getCNDateByTimeStamp(timeStamp)
  * 
  * 扩展通过时间戳转换成日期格式函数,可通过参数自定义日期格式:
  * buildDateBySplitSign({timeStamp,yearSign = "-",monthSign = "-",daySign = " ",hourSign = ":",minuteSign = ":",secondSign = ""})
  * 
  * 通过时间戳获取日期yyyy-MM-dd(不包含时间): 
  * getDateByTimeStampEndWithDay(timeStamp)
  * 
  * 通过时间戳获取日期yyyy年MM月dd(不包含时间): 
  * getCNDateByTimeStampEndWithDay(timeStamp)
  * 
  * 通过时间戳获取日期yyyy-MM(不包含时间):
  * getDateByTimeStampEndWithMonth(timeStamp)
  * 
  * 通过时间戳获取日期yyyy月MM(不包含时间):
  * getCNDateByTimeStampEndWithMonth(timeStamp)
  * 
  * 获取今日的最小时间戳:
  * getTodayMinTimeStamp()
  * 
  * 获取今日的最大时间戳:
  * getTodayMaxTimeStamp()
  * 
  * 获取昨日的最小时间戳:
  * getYesterdayMinTimeStamp()
  * 
  * 获取昨日的最大时间戳:
  * getYesterdayMaxTimeStamp()
  * 
  * 通过一个时间戳获取该时间戳对应的日期最小时间戳:
  * getMinTimeStampByTimeStamp(timeStamp)
  * 
  * 通过一个时间戳获取该时间戳对应的日期最大时间戳:
  * getMaxTimeStampByTimeStamp(timeStamp)
  * 
  * 获取本周最小时间戳:
  * getCurrentWeekMinTimeStamp()
  * 
  * 获取本周最大时间戳:
  * getCurrentWeekMaxTimeStamp();
  * 
  * 获取指定时间戳的周的最小时间戳:
  * getWeekMinTimeStampByTimeStamp(timeStamp)
  * 
  * 获取指定时间戳的周的最大时间戳:
  * getWeekMaxTimeStampByTimeStamp(timeStamp)
  * 
  * 获取本月最小时间戳:
  * getCurrentMonthMinTimeStamp()
  * 
  * 获取本月最大的时间戳:
  * getCurrentMonthMaxTimeStamp()
  * 
  * 获取指定时间戳对应月份的最小时间戳:
  * getMonthMinTimeStampByTimeStamp(timeStamp)
  * 
  * 获取指定时间戳对应月份的最大时间戳:
  * getMonthMaxTimeStampByTimeStamp(timeStamp)
  * 
  * 通过一个数字类型的毫秒数,转换成X小时Y分Z秒格式:
  * getCNTimeByTimeStamp(mss)
  * 
  * 通过时间戳获取该时间戳是星期几的数字:和系统的Date.getDay()不同点在于,如果周日系统返回0,该函数返回7
  * getWeekDayByTimeStamp(timeStamp)
  * 
  * 通过时间戳获取该时间戳是中文的星期几:
  * getCNWeekDayByTimeStamp(timeStamp)
  * 
  *在旧的时间戳上添加天数,从而获取新的时间戳:
  * getNewTimeStampByAddDay(timeStamp, addDayCount)
  * 
  * 获取当前时间在今年的第几个星期:
  * getCurrentDateWeekCountInYear()
  * 
  * 获取当前时间在今年的第几个月:
  * getCurrentDateMonthCountInYear()
  * 
  * 获取当前时间在今年的第几个月(中文):
  * getCurrentDateMonthCNNameInYear()
  * 
  * 获取指定时间戳的月份名(中文):
  * getMonthCNNameInYearByTimeStamp(timeStamp)
  * 
  * 获取指定时间戳是年份的第几个星期:
  * getWeekCountInYearByTimeStamp(timeStamp)
  * 
  * 获取指定时间戳是年份的第几月:
  * getMonthCountInYearByTimeStamp(timeStamp)
  * 
  * 判断两个时间戳是否是同一周:
  * timeStampIsSameWeek(timeStamp1, timeStamp2)
  * 
  * 判断两个时间戳是否是同一月:
  * timeStampIsSameMonth(timeStamp1, timeStamp2)
  * 
  * 
  ***********************************************************************************************/
