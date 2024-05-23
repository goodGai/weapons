function getCompanies(mid, tel, tc, searchText, filterText, ignoreGrade, pageNum, itemsPerPage) {
  // Logger.debug('getCompanies arguments:', arguments);

  // 查询行业情况下不传分页；行业另外处理，不依赖此处数据
  if (!itemsPerPage) return {};

  check(mid, String);
  const skip = pageNum ? (pageNum - 1) * itemsPerPage : 0;

  const {
    invitation: {applicationSetting: {privateComViewSetting = []} = {}} = {}, tenantCode = -1
  } = mid && Collections.Meeting.findOne({_id: mid}, {
    fields: {"invitation.applicationSetting.privateComViewSetting": 1, tenantCode: 1}
  }) || {};
  // Logger.debug('getCompanies privateComViewSetting:', privateComViewSetting);
  const getUndetermined = privateComViewSetting.includes(0);
  const showUndeterminedNtc = getUndetermined && privateComViewSetting.includes(1);

  // let selector = {
  //   $and: [
  //     {meetingId: mid},
  //     {type: commonString.corporationType.company},
  //     {
  //       state: {
  //         $in: getUndetermined ? [
  //           commonString.applicationState.company.pass,
  //           commonString.applicationState.company.undetermined
  //         ] : [
  //           commonString.applicationState.company.pass
  //         ]
  //       },
  //     },
  //     {
  //       $or: [
  //         {
  //           applyState: commonString.applicationState.comApply.normal.value
  //         },
  //         {
  //           applyState: {$exists: false}
  //         }
  //       ]
  //     },
  //     Selector.unDeleted
  //   ]
  // };
  if (searchText) {
    selector['$and'].push({
      $or: [
        {
          name: {$regex: searchText, $options: "i"}
        },
        {
          shareCode: {$regex: searchText, $options: "i"}
        },
        {
          'staff.groupName': {$regex: searchText, $options: "i"}
        },
        {
          'assistants.groupName': {$regex: searchText, $options: "i"}
        }
      ]
    })
  }

  let invDoc = {};

  const totalNum = Collections.Application.find(selector).count();

  const companyList = Collections.Application.find(selector, {
    sort: {companyPriority: -1, createdAt: 1},
    limit: itemsPerPage,
    skip: skip
  }).map(a => {
    return {
      id: a.corporationId,
      applicationId: a._id, // 增加 applicationId 返回 2021-04-21 11:15:00
      name: a.name,
      leaderInfo: (a.leaders || []).map(l => {
        return `${l.position || ''}`
      }).filter(l => {
        return l && l.trim()
      }).join('/'),
      // leaderInfo: (a.leaders || []).map(l => { return `${l.position || ''}` }).join('，'),
      state: showUndeterminedNtc ? a.state : "",
      shareCode: a.shareCode,
      groupName: a.staff && a.staff.groupName,
      invOneToOneLimitGrade: getMatchedLimitGrade(a, 'invOneToOneLimitGrade', invDoc.orgCategory), // 增加公司报名设置的一对一星级返回 2023-8-4 10:28:00
      companyPriority: a.companyPriority || 100, // 自定义公司展示的优先级 返回至小程序
      isOnline: a.isOnline,
    }
  });
  return {
    companies: companyList,
    pageNum: pageNum,
    pageSize: itemsPerPage,
    totalNum: totalNum,
    totalPage: Math.ceil(totalNum / itemsPerPage),
  }
}