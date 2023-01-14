class constants {
  static getConstant(){

    const startingip = 'http://192.168.100.9:5000/'
    const factoryConstant = {
    url: startingip,    //Production:'http://124.29.205.234:3500/%27,%27http://192.168.15.5:4000%27,%27http://192.168.70.107:4000' Testing:'http://192.168.1.78:4000/' Noshan:'http://192.168.1.97:4000/' Aamir:'http://192.168.1.169:4000/'
    empList: startingip + 'api/itdept/employee',
    empView: startingip + 'api/itdept/employee/details',
    empAdd: startingip + 'api/itdept/employee',
    login: startingip + 'api/login',
    logList: startingip + 'api/logistics',
    taskList: startingip+'api/tasks',
    reportUrl: startingip, //Production:'http://sina_win_server/Sina%27,http://admin-pc:88/ReportServer Testing:'http://finsrv01/ReportServer_SQL2014'
    reportPath: '/sysrep',   //Production:'/SINA_Web' ,/PAF_HIMS
    };

  return factoryConstant;
}
}

export default (constants);