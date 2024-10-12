
// k 为占位符
// 索引签名参数类型必须是 “string”、“number”、“symbol”
// type Mapish = { [k: boolean]: boolean }; -- 报错
type Mapish = { [k: string]: boolean };

const featureFlags: Mapish = {
    darkMode: true,
    betaUser: false,
    newUI: true,
    1: false, // '1'
  };
  
  // 访问属性
  console.log(featureFlags.darkMode); // 输出: true
  
  // 动态添加属性
  featureFlags.experimentalFeature = false;
  featureFlags[9] = false; // '9'

  console.log(featureFlags);